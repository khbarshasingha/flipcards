import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "tachyons";
import Scroll from "./Scroll";
import Data from "./Data";
// import slowdance from "./audioclips/slowdance.mp3";
import { Howl, Howler } from "howler";
import { Cardlist } from "./Cardlist";

const sound = "slowdance.mp3";

class App extends Component {
  // constructor(props) {
  //   super();
  //   this.state = { value: false };
  // }
  Soundplay = src => {
    const sound = new Howl({ src });

    sound.play();
  };
  RenderButton = () => {
    return (
      <button
        onClick={() => {
          this.Soundplay(sound);
        }}
      >
        Play me
      </button>
    );
  };

  render() {
    Howler.volume(1.0);
    return (
      <div>
        <div className="Header">
          <h2 style={{ font: "50px" }}>Hey,Love</h2>
          {this.RenderButton()}
        </div>

        <div className="content">
          {" "}
          <Cardlist />
        </div>
      </div>
    );
  }
}

export default App;
