import React from "react";
import styled from "styled-components";

const NavigationBar = () => {
  const Body = styled.body`
    background: #18181d;
    color: white;
    margin: 0;
    height: 100vh;
  `;
  return (
    <div className="parent">
      <Body>
        <div className="logo">My Music Logo</div>
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
