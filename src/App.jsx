import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Menus from "./pages/Menus";
import WhatsOn from "./pages/WhatsOn";
import FirstFloor from "./pages/FirstFloor";
import PrivateDining from "./pages/PrivateDining";
import Rooftop from "./pages/Rooftop";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF2E8] text-[#222]">
        <Header />
        
        <main className="flex-1 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/whats-on" element={<WhatsOn />} />
            <Route path="/first-floor" element={<FirstFloor />} />
            <Route path="/private-dining" element={<PrivateDining />} />
            <Route path="/rooftop" element={<Rooftop />} />
            <Route path="/rooftop-bar" element={<Rooftop />} />
            <Route path="/events" element={<Events />} />
            <Route path="/event-booking" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery-10" element={<Gallery />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
