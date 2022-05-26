import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="mt-2">
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
