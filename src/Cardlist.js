import React from "react";
import { Data } from "./Data";
import Cards from "./Cards";

export const Cardlist = () => {
  return Data.map((obj, index) => (
    <Cards key={index} frontsrc={obj.frontsrc} backsrc={obj.backsrc} />
  ));
};
