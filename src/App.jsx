import React from 'react'
import './app.scss';
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import Timeline from './components/timeline/Timeline.jsx';
import Contact from "./components/contact/Contact"
import { useState } from "react"
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Timeline/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
