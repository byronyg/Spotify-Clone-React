import React from "react";
import "./App.css";
import ArtistSlider from "./components/ArtistSlider";
import Genres from "./components/Genres";
import NavigationBar from "./components/NavigationBar";
import TopArtists from "./components/TopArtists";
import TopBar from "./components/TopBar";
import TopCharts from "./components/TopCharts";

function App() {
  return (
    <div className="wrapper">
      <div className="left">
        <NavigationBar />
      </div>
      <div className="right">
        <div className="topbar">
          <TopBar />
        </div>
        <div className="artist">
          <ArtistSlider />
        </div>
        <div className="lower">
          <div className="genre">
            <div className="topartists">
              <TopArtists />
            </div>
            <div className="chartsalot">
              <div className="genres">
                <Genres />
              </div>
              <div className="topcharts">
                <TopCharts />
              </div>
            </div>
          </div>
          <div className="player">player goes here</div>
        </div>
      </div>
    </div>
  );
}

export default App;
