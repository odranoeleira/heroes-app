import React from "react";
import { HeroList } from "../hero/HeroList";

export const DCScreen = () => {
  return (
    <div className="mt-2">
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
