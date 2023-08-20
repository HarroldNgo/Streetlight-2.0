import "../css/Blog.css"
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as api from '../Api.jsx'
import Slider from "react-slick";
import usePostQuery from '../useHooks/usePostQuery'
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet";
import SharePopup from "../components/SharePopup"
import { useEffect, useRef } from "react";

export default function Home() {
  const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"
  const [dragging, setDragging] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [sharePost, setSharePost] = useState("")
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpenShare(false);
    }
  };

  const postsQuery = () => ({
    queryKey: ['posts'],
    queryFn: api.getPosts,
    cacheTime: Infinity,
    staleTime: Infinity,
  })
  const { data: posts, isLoading, isError } = useQuery(postsQuery())

  if (isLoading) {
    return ''
  }
  if (isError) {
    return ''
  }
  usePostQuery(posts)

  let formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <>
      <h1 className="blog-title">blog</h1>
      <div className="blog-posts">
        {posts.map((p, i) => (
          <div className="blog-post">
            <div className="blog-post-text">
              <p className="blog-post-date">{formattedDate.format(new Date(p.createdAt))}</p>
              <h1 className="blog-post-title">{p.title}</h1>
            </div>
            <Link to={`/post/${p.slug}`}>
              <img className="blog-post-image" src={PF + p.photo + ".png"} alt="" />
            </Link>
            <img className="blog-post-share" src="assets/share.png" alt="" onClick={() => {
              setOpenShare(true)
              setSharePost(`https://streetlightblog.com/post/${p.slug}`)
            }} />
          </div>

        ))}
      </div>
      <SharePopup innerRef={ref} postLink={sharePost} open={openShare} onClose={() => setOpenShare(false)} />
    </>
  )
}
