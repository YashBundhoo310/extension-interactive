import { React } from 'react'
import './assets/scss/styles.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/page/Home';
import Agence from './assets/page/Agence';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import Services from './assets/page/Services';

function App() {

  return (
    <>
      <Header />
      <main>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agence" element={<Agence />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
