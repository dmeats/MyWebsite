import React, { useState, useEffect,useRef,useContext } from "react";
import {Link} from 'react-router-dom'
import {APPLContext} from './../../App'
import './LeftSideBar.css'
import GearSound from '../../Sounds/gears5.mp3'
import SelectorSound from '../../Sounds/selector3.mp3'
import LargeGear from '../../Assets/large_Gear.png'
import VerySmallGear from '../../Assets/Very_Small_Gear.png'
import SprogetGear from '../../Assets/Gear_sproget.png'


//<div className='playsound'>
//<button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//</div>


const LeftSideBar = () =>{
 
  const aPPLContext = useContext(APPLContext)
  const selector = useRef('');
  const indi1 = useRef('indicator1yellow');
  const indi2 = useRef('indicator2yellow');
  const indi3 = useRef('indicator3yellow');

  const ChangeIndicator = (e) =>{
    console.log('made it here = ' + e)
    selector.current = e
    if (selector.current === 1) {
      indi1.current = 'indicator1blue'
      indi2.current = 'indicator2yellow'
      indi3.current = 'indicator3yellow'
      let Message=' Projects built with JavaScript and Reactjs utilizing Hooks. This site was built with Reactjs.'
      aPPLContext.ChangeMessage(Message)
      let ProjectSlide = 'projectout'
      aPPLContext.ProjectSlideStatus(ProjectSlide)
      //let SkillsSlide = 'skillsin'
      //aPPLContext.SkillsSlideStatus(SkillsSlide)
      let ContactSlide = 'contactin'
      aPPLContext.ContactSlideStatus()
    }
    if (selector.current === 2) {
      indi1.current = 'indicator1yellow'
      indi2.current = 'indicator2blue'
      indi3.current = 'indicator3yellow'
      let Message=' Skills that I have developed and are being constantly updated with projects as well as self learning online tutorials'
      aPPLContext.ChangeMessage(Message)
     // let ProjectSlide = 'projectin'
     // aPPLContext.ProjectSlideStatus(ProjectSlide)
      let SkillsSlide = 'skillsout'
      aPPLContext.SkillsSlideStatus(SkillsSlide)
      let ContactSlide = 'contactin'
      aPPLContext.ContactSlideStatus()
    }
    if (selector.current === 3) {
      indi1.current = 'indicator1yellow'
      indi2.current = 'indicator2yellow'
      indi3.current = 'indicator3blue'
      //aPPLContext.ChangeMessage(Message)
       let ProjectSlide = 'projectin'
       aPPLContext.ProjectSlideStatus(ProjectSlide)
       let SkillsSlide = 'skillsin'
       aPPLContext.SkillsSlideStatus(SkillsSlide)
    }
  }
  
    const useAudio = GearSound => {
        const [audio] = useState(new Audio(SelectorSound));
        
        const [playing, setPlaying] = useState(true);
        
        
        
        const toggle = () => {
          if (aPPLContext.SoundOnOff === true){
          setPlaying(!playing)
          }
         
        }
        
        

        useEffect(() => {
          playing ? audio.play(): audio.pause();
         },
          [playing]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, [aPPLContext.SoundOnOff]);
      
        return [playing, toggle];
      };

      const [playing, toggle] = useAudio(SelectorSound);
     
      const [audio1] = useState(new Audio(GearSound));

      const playAudio = () =>{
        
        console.log('playing sound')
        
        audio1.play()
       
      } 

      useEffect(() => {
                        if(aPPLContext.SoundOnOff===true){
                      audio1.addEventListener('ended', () => {
                    audio1.currentTime = 0; //loops the sound
                    audio1.play();
                    audio1.volume = .2
                  })
                  }
                        if(aPPLContext.SoundOnOff===false){
                          audio1.addEventListener('ended', () => {
                        audio1.currentTime = 0; //loops the sound
                        audio1.pause();
                      })
                  }
        
      }, [aPPLContext.SoundOnOff]);

      useEffect(() => {
        ChangeIndicator();
      }, []);
      
    return(
    <div onLoadStart={playAudio()}>
        
        <div className ='Left-Container' >
        
                    <div>
                    <div className='Project-link' onClick={() => ChangeIndicator(1)}>
                    <Link exact to={'/Projects'} style={{ textDecoration: 'none' }} onClick={toggle} >Projects</Link>
                    </div>
                    <img src={LargeGear } className='LargeGear' />
                    
                    </div>
                    <div className={indi1.current}></div>
                    
                    <div>
                    <img src={SprogetGear } className = 'SprogetGear1'/>
                    </div>
                    <div>
                    <img src={VerySmallGear } className = 'VerySmallGear1' />
                    </div>
                    <div>
                    <img src={SprogetGear } className = 'SprogetGear2'/>
                    </div>
                    <div>
                    <img src={VerySmallGear } className = 'VerySmallGear2' />
                    </div>
                    <div className='Skills-link' onClick={() => ChangeIndicator(2)}>
                    <Link exact to={'/Skills'} style={{ textDecoration: 'none' }} onClick={toggle}  >Skills</Link>
                    </div>
                    <div className={indi2.current}></div>
                    <div>
                    <img src={LargeGear } className='LargeGear2' />
                    </div>
                    <div>
                    <img src={VerySmallGear } className = 'VerySmallGear3' />
                    </div>
                    <div>
                    <img src={SprogetGear } className = 'SprogetGear3'/>
                    </div>
                    <div>
                    <img src={SprogetGear } className = 'SprogetGear4'/>
                    </div>
                    <div>
                    <img src={VerySmallGear } className = 'VerySmallGear4' />
                    </div>
                    <div className='Contact-link' onClick={() => ChangeIndicator(3)}>
                    <Link exact to={'/Contact'} style={{ textDecoration: 'none' }} onClick={toggle}  >Contact</Link>
                    </div>
                    <div className={indi3.current}></div>
                    <div>
                    <img src={LargeGear } className='LargeGear3' />
                    </div>
       
        </div>
                    
        <div className = 'Left-rail'>
        </div>
        
    </div>
    )
}
export default LeftSideBar