import React from 'react';
import Header from './Pages/Header';
import './App.css'
import Banner from './Pages/Banner';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import MySkill from './Pages/MySkill';
import MyProject from './Pages/MyProject';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <div className='bg-slate-700'>
      <Header></Header>
      <Banner></Banner>
      <AboutMe id='about'></AboutMe>
      <Skills id='service'></Skills>
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Contact></Contact>
    </div>
  );
};

export default App;