import React, { useState, useEffect } from "react";
import "./index.scss";
import profile from "./image-avatar.png";
import Display_card from "./Display-card";

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
      console.log(data)
    };

    fetchData();
  }, []);

  function searchf(){
    document.getElementsByClassName("search")[0].focus();
  }
  const trendingShows = shows.sort(() => 0.5 - Math.random()).slice(0, 4);
  const recommendedShows = shows.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="container">
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
      <section>
        <section className="search-bar">
          <i className="fa-solid fa-magnifying-glass" onClick={searchf}/>
          <input className="search" placeholder="Search for Shows" />
        </section>
        <section className="trending">
          <h1>Trending</h1>
          <Display_card shows={trendingShows}/>
        </section>
        <section className="all-shows">
          <h1>All Shows</h1>
          <Display_card shows={shows}/>
        </section>
      </section>
    </div>
  );
}

export default Home;
