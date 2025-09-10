import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Ad from './pages/Ad.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Header from './layouts/Header.jsx'
import Footer from './layouts/Footer.jsx'
import './styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <div className="app-container">
            <Router>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ad/:id" element={<Ad />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/error" element={<Error />} />
                        <Route path="*" element={<Navigate to="/error" />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    </React.StrictMode>
)
