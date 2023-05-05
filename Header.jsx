import React from 'react'
import "./Header.scss";
import profile from "./image-avatar.png";
function Header() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <i className="fa-solid fa-house"></i>
          <i className="fa-solid fa-tv"></i>
          <i className="fa-solid fa-bookmark"></i>
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="profile-div">
          <img src={profile} alt="profile" /> 
        </div>
      </nav>
    </div>
  )
}

export default Header
