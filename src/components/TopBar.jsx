import React from "react";
import { Body } from "./styles/TopBar.styled";

const topbar = () => {
  return (
    <Body>
      <div className="list">
        <a href="/#">MUSIC</a>
        <a href="/#">PODCAST</a>
        <a href="/#">LIVE</a>
      </div>
      <div className="search">
        <input
          type="search"
          name="Search"
          placeholder="Type here to search"
          id=""
        />
      </div>
      <div className="useraccount">
        <ul>
          {/* <li>Icon</li>
          <li>Icon</li> */}
          <button>Login With Spotify</button>
          {/* <li>User</li> */}
        </ul>
      </div>
    </Body>
  );
};

export default topbar;
