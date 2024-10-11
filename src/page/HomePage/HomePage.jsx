import React from "react";
import Header from "../../component/Header/Header";
import ListMovies from "./ListMovies";
import TabMovies from "./TabMovies";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ListMovies />
      <TabMovies />
      homepage
    </div>
  );
}
