import React from 'react';
import Header from './Pages/Header';
import './App.css'
import Banner from './Pages/Banner';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
};

export default App;