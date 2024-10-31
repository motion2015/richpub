import React from 'react';

import './App.css'
import { Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Detail from './routes/Detail'
import Navigation from 'components/Navigation';
import NotFound from 'components/NotFound';
function App(props) {
  console.log(props);

  return (
    <>

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" exact={true} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/movie-detail' element={<Detail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/movie-detail" element={<About />} /> */}
      </Routes>
    </>
    // <Router>
    //   <Navigation />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path='/movie-detail' element={<Detail />} />
    //   </Routes>
    // </Router>
  )
}



export default App;



