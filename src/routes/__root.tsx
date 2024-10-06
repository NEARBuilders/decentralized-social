import { createRootRoute, Outlet } from '@tanstack/react-router'
import React from 'react'
import { css } from "../styles/styles"

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="gradient-bg"></div>
      <Outlet />
    </>
  )
}

// Add this to your index.html instead of injecting it here
