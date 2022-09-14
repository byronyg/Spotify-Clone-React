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
            <li>Recent</li>
            <li>Albums</li>
            <li>Favorite</li>
            <li>Local</li>
          </ul>
        </div>
        <div className="playlist">
          PLAYLIST
          <ul>
            <li>Create New</li>
            <li>Design Flow</li>
            <li>Best of 2022</li>
            <li>Kenyan Jamz</li>
            <li>RNB</li>
          </ul>
        </div>
        <div className="sm-logo">switch mode</div>
      </Body>
    </div>
  );
};

export default NavigationBar;
