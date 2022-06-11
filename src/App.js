import React from 'react';
import Header from './Pages/Header';
import './App.css'
import Banner from './Pages/Banner';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import MySkill from './Pages/MySkill';
import MyProject from './Pages/MyProject';
const App = () => {
  return (
    <div className='bg-slate-700'>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <MySkill></MySkill>
      <MyProject></MyProject>
    </div>
  );
};

export default App;