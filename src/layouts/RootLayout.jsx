import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function RootLayout() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <div className="root-layout">
      <Header />
      <div class={path ? "header-image" : "header-image-hidden"} />
      <main>
        <Outlet />
      </main>
    </div>

  )
}
