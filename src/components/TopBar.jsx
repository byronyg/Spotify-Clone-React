import React from "react";
import { Body } from "./styles/TopBar.styled";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b2589d5c05bb482a929c08074afbe7be&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

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
          placeholder="&#xf002; Type here to search"
          id=""
        />
      </div>
      <div className="useraccount">
        <ul>
          {/* <li>Icon</li>
          <li>Icon</li> */}
          {/* <button onClick={}>Login With Spotify</button> */}
          {/* <li>User</li> */}
        </ul>
        <a href={AUTH_URL} className="button">
          Login With Spotify
        </a>
      </div>
    </Body>
  );
};

export default topbar;
