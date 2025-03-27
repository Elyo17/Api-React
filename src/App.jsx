import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {ArtistDetail} from "./ArtistDetail";
import {Artist} from "./Artist";
import {Home} from "./Home";
import './App.css'
import { Events } from './Events';
import { EventsDetail } from './EventsDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/artist" element={<Artist />}/>
      <Route path='/artist/:id' element={<ArtistDetail/> }/>
      <Route path="/events" element={<Events />}/>
      <Route path='/events/:id' element={<EventsDetail/> }/>
    </Routes>
  )
};

export default App
