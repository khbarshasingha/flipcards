import React, { useState } from "react";
import slowdance from "./audioclips/slowdance.mp3";
import { Howl, Howler } from "howler";

const Soundplay = src => {
  const sound = new Howl({ src });
  sound.play();
};
const Music = () => {
  return (
    <div>
      {Howler.volume(1.0)}
      <button
        onClick={() => {
          this.Soundplay(slowdance);
        }}
      >
        Play me{" "}
      </button>
    </div>
  );
};
export default Music;
