import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      404 Not Found
      <Link to="/">Home from Link</Link>
      {/* Don't use "a" tags coz it refreshes the page before going */}
    </div>
  )
}

export default NotFoundPage
