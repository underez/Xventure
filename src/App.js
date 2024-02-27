import React from "react";
import './App.css';
import { BrowserRouter,Routes,Route } from"react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Book from './pages/Book';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="Services" element={<Services/>} />
  <Route path="Book" element={<Book/>} />
  <Route path="Gallery" element={<Gallery/>} />
  <Route path="Contact" element={<Contact/>} />

</Routes>
</BrowserRouter>
</>
  );
}
export default App;
