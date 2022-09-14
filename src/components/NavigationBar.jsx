import React from "react";
import { Body } from "./styles/NavigationBar.styled";

const NavigationBar = () => {
  return (
    <div className="parent">
      <Body>
        <div className="logo">Groovy</div>
        <div className="menu">
          MENU
          <ul>
            <li>Explore</li>
            <li>Genres</li>
            <li>Albums</li>
            <li>Artists</li>
            <li>Radio</li>
          </ul>
        </div>
        <div className="library">
          LIBRARY
          <ul>
            <li>Explore</li>
            <li>Genres</li>
            <li>Albums</li>
            <li>Artists</li>
            <li>Radio</li>
          </ul>
        </div>
        <div className="playlist">
          PLAYLIST
          <ul>
            <li>Explore</li>
            <li>Genres</li>
            <li>Albums</li>
            <li>Artists</li>
            <li>Radio</li>
          </ul>
        </div>
        <div className="sm-logo">Some Logo here</div>
      </Body>
    </div>
  );
};

export default NavigationBar;
