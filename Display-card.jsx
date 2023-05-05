import React from "react";
import "./Display-card.scss";
import { Link } from "react-router-dom";

export default function Display_card({ shows }) {
  return (
    <div className="card-container">
      {shows.map((show) => (
        <div key={show.show.id} className="card">
          <div className="image">
            <img
              src={
                show.show.image
                  ? show.show.image.medium
                  : "https://via.placeholder.com/210x295?text=No+Image+Available"
              }
              alt=""
            />
            <div className="name-button">
              <p>{show.show.name}</p>
              <button>
              <Link to={`/shows/${show.show.id}`}>Book Now</Link>
              </button>
            </div>
          </div>
          <div className="card-details">
            <p>
              <i class="fa-solid fa-star"></i>
              {show.show.rating.average ? show.show.rating.average : "N/A"}
            </p>
            <p>{show.show.language}</p>
            <p>{show.show.genres.join("/")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
{
  /* <Link to="/Description">Book Now</Link> */
}
