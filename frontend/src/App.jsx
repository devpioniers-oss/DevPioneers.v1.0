import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Solution  from "./components/Solution"
import Vision  from "./components/Vision"
import Devis from "./components/Devis"

import Section1 from "./Section1"
import Section2 from "./section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      {/* Header toujours affiché */}
      <Header />

      {/* Routes */}
      <Routes>
        {/* Page d'accueil */}
        <Route 
          path="/" 
          element={
            <>
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
            </>
          } 
        />
        {/* Autres pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devis" element={<Devis />} />
      </Routes>
      {/* footer toujours affiché */}
      <Footer />
    </Router>
  )
}

export default App
