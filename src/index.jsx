import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages'
import Advert from './pages'
import About from './pages'
import Header from './layouts'
import Footer from './layouts'
import Error from './components'
import 'styles/index.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/advert/:questionNumber" element={<Advert />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
