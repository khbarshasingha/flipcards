import React from "react";
import { Musicdata } from "./Data";
import { Music } from "./Music";

export const Musiclist = () => {
  return Musicdata.map((obj, index) => <Music key={index} src={obj.src} />);
};
