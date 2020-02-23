import React, {useState} from 'react';
import {Switch,Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import LeftSideBar from './components/LeftSideBar/LeftSideBar'
import Landingpage from './components/Landingpage/Landingpage'
import './App.css'
export const APPLContext = React.createContext({
  Message: ' Thank you for visiting my steampunk inspired website',
  SoundOnOff: true,
  ChangeMessage: () => {},
  ToggleSound: () =>{},
  ProjectSlideStatus: () => {},
  SkillsSlideStatus: () => {},
  ContactSlideStatus: () => {},
});


function App() {

  const [SoundOnOff, setSoundOnOff] = useState(1)
  const [Message, setMessage] = useState(' Thank you for visiting my steampunk inspired website which is under constant construction')
  const [ProjectSlide, setProjectSlide]=useState('projectin')
  const [SkillsSlide, setSkillsSlide]=useState('skillsin')
  const [ContactSlide, setContactSlide]=useState('contactin')
  return (
    <APPLContext.Provider value = {{SoundOnOff,
    setSoundOnOff,
    Message,
    setMessage,
    ProjectSlide,
    SkillsSlide,
    ContactSlide,
    ChangeMessage: Message => setMessage(Message),
    ToggleSound:SoundOnOff=> setSoundOnOff(SoundOnOff),
    ProjectSlideStatus:ProjectSlide=>setProjectSlide(ProjectSlide),
    SkillsSlideStatus: SkillsSlide => setSkillsSlide(SkillsSlide),
    ContactSlideStatus: ContactSlide => setContactSlide(ContactSlide),

    }}>
    <div>
      <Header />
      <LeftSideBar />
      
      <Switch>
      <Route exact path={'/'} component={Landingpage} />
        <Route exact path={'/Projects'} component={Projects} />
        <Route exact path={'/Skills'} component={Skills} />
        <Route exact path={'/Contact'} component={Contact} />
    </Switch>
    </div>
    </APPLContext.Provider>
  );
}

export default App;
