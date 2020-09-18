import React, { Component, useState, useEffect } from "react";
import { Musiclist } from "./Musiclist";
import { Musicdata } from "./Data";
import { Howl, Howler } from "howler";

export const Music = ({ index, src }) => {
  // const [value, setValue] = useState(false);

  // useEffect(() => {
  //   const Soundplay = src => {
  //     const sound = new Howl({ src });
  //     if (value === true) {
  //       sound.play();
  //     } else {
  //       sound.pause();
  //     }
  //   };
  // });
  const Soundplay = src => {
    const sound = new Howl({ src });

    sound.play();
  };

  // return <button onClick={() => setValue((value = true))}>Play me </button>;

  return <button onClick={() => Soundplay(src)}>Play me </button>;
};
