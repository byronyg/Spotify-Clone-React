import styled from "styled-components";
import React from "react";

const topbar = () => {
  const Body = styled.body`
    background: #000;
    color: white;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  return (
    <Body>
      <div className="list">
        <a href="/#">MUSIC</a>
        <a href="/#">PODCAST</a>
        <a href="/#">LIVE</a>
      </div>
      <div className="search">
        <input type="search" name="Search" id="" />
      </div>
      <div className="useraccount">
        <ul>
          <li>Icon</li>
          <li>Icon</li>
          <li>User</li>
        </ul>
      </div>
    </Body>
  );
};

export default topbar;
