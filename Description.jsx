import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./Description.scss";

export default function Description() {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const p = fetch(url);

    p.then((response) => {
      return response.json();
    }).then((data) => {
      setShow(data);
    });
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <img src={show.image?.medium} alt={show.name} />
        </div>
        <div>
          <h2>{show.name}</h2>
          <p>IMDB rating: {show.rating.average}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(", ")}</p>
        </div>
      </div>
      <p>{show.summary}</p>
    </div>
  );
}
