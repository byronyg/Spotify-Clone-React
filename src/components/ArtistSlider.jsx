import React from "react";
import { Body } from "./styles/ArtistSlider.styled";

const ArtistSlider = () => {
  return (
    <Body>
      <div>
        <h1>Trending New Hits</h1>
      </div>
      <div>
        <h1>In my Feelings</h1>
        <h3>Camilla Cabelo</h3>
        <h6>60 million plays</h6>
        <button>Listen Now</button>
      </div>
    </Body>
  );
};

export default ArtistSlider;
