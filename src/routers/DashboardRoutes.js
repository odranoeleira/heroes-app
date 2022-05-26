import React from "react";
import { DCScreen } from "../components/dc/DCScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

import { Routes, Route } from "react-router-dom";
import { HeroScreen } from "../components/hero/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="dc" element={<DCScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<DCScreen />} />
        </Routes>
      </div>
    </>
  );
};
