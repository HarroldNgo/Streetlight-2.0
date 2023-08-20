import "../css/home.css"
import { useState, useRef, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as api from '../Api.jsx'
import Slider from "react-slick";
import usePostQuery from '../useHooks/usePostQuery'
import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet";
import { motion } from "framer-motion"

export default function Home() {
  const PF = "https://res.cloudinary.com/dmluqp41s/image/upload/"

  const postsQuery = () => ({
    queryKey: ['postsF'],
    queryFn: api.getPostsFeatured,
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



  return (
    <>
      <div className={`home`}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Streetlight</title>
          <meta name="description"
            content="Personal stories of growth and transformation, overcoming obstacles in our journey as we relate to icons of the world." />
        </Helmet>
        <div class="welcome">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 class={`welcome-text`}>the. Streetlight</h1>
          </motion.div>

        </div>
        <div className="name-wrapper">
          <section className="name">
                <h1 class="the-name">the. Name</h1>
              <p class="name-description">The "Streetlight" was a metaphor used by a character named Usnavi from a broadway called "In The Heights" written by Lin-Manuel Miranda and Quiara Alegría Hudes. The "Streetlight" is depicted as a negative metaphor, an inanimate object stuck to the sides of every street. It represented the characters' path- stuck in the same spot serving the same purpose as time goes on. As the characters face various challenges and changes, the metaphor of the streetlight is used to
                convey the idea of guidance, hope, and continuity. Welcome to The Streetlight where we illuminate the stories of the people of the street.
                <br />
              </p>
              <button class="blog-button">Blog</button>

          </section>
          <div className="name-image"></div>
        </div>

        <div className="culture-wrapper">
          <div className="culture-image"></div>
          <section class="culture">
            <h1 class="cultures-title">the. Culture</h1>
            <p class="cultures-info"> The Streetlight's culture encourages to and aim to promote an environment where
              differences are celebrated
              and cherished. By providing a platform for diverse voices, we hope to break down barriers, challenge
              stereotypes, and
              foster a sense of interconnectedness among our global audience. We feature blogs and stories from people of
              different
              cutures and religions, together we can create a community of mutual respect and appreciation for the
              beautiful tapestry of
              cultures and beliefs that make up our world.
            </p>
          </section>
        </div>


      </div>
    </>
  )
}
