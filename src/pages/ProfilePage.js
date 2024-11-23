import React from 'react'
import { useParams } from 'react-router-dom'

function ProfilePage() {
  const params = useParams(); // calls all the parameters available ofa specific page
  console.log(params)
  return (
    <div>
      <h1>Profile Page {params.profileId}</h1>
    </div>
  )
}

export default ProfilePage
