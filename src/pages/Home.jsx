import {useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home(){const [light,setLight]=useState(false);useEffect(()=>{document.documentElement.dataset.theme=light?'light':'dark';},[light]);return <><a href="#main" className="sr-only fixed top-3 left-3 z-50 rounded bg-accent p-3 text-canvas focus:not-sr-only">Skip to content</a><Navbar light={light} onTheme={()=>setLight(!light)}/><main id="main"><Hero/><About/><Education/><Skills/><Projects/><Certifications/><Contact/></main><Footer/></>}
