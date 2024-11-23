import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      {profiles.map((profile) => (
        <NavLink key={profile} to={`/profiles/${profile}`}>
          Profile {profile} <br/>
          </NavLink>
      ))}
      <Outlet /> 
      {/* Outlet is a placeholder for any child roots of this element */}
    </div>
  );
}

export default ProfilesPage;
