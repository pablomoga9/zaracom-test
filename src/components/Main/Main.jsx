import React from "react";
import Home from './Home/Home';
import Podcast from "./Podcast/Podcast";
import Episode from "./Episode/Episode";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return <>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Podcast/>} path="/podcast/:podcastId"/>
      <Route element={<Episode/>} path="/podcast/:podcastId/episode/:episodeId"/>
    </Routes>
    <h1>This is Main</h1>
  </>;
};

export default Main;
