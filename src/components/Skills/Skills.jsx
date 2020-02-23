import React, { useState, useEffect,useContext} from 'react'
import {APPLContext} from './../../App'
import Steam from '../../Sounds/steam1.mp3'
import './Skills.css'

const Skills = () => {
  const aPPLContext = useContext(APPLContext)
    const [audio3] = useState(new Audio(Steam));

    const playAudio = () =>{
      
      console.log('playing sound')
      
      if(aPPLContext.SoundOnOff===true){
        
                        audio3.play();
                      }
  
       if(aPPLContext.SoundOnOff===false){

                        audio3.pause();
                      }
   }
     

    useEffect(() => {
        playAudio();
      }, []);

      

    if (aPPLContext.ProjectSlide === 'projectout'){
      let ProjectSlide = 'projectin'
     // console.log(ProjectSlide)
     // aPPLContext.ProjectSlideStatus(ProjectSlide)
     // console.log(aPPLContext.SkillsSlide)
    return(
      <div>
              <div className={ProjectSlide} >
                  <div className = 'Projects-container'>
                  <p></p>
                  </div>
              </div>

              <div className={aPPLContext.SkillsSlide} onLoadStart={playAudio()}>
                  <div className='Skills-container'>
                  <p>
                    
                  </p>
                  </div>
              </div>
      </div>
    )
    }
    if (aPPLContext.ProjectSlide === 'projectin'){
     
    return(
      <div>
               <div className={aPPLContext.SkillsSlide} onLoadStart={playAudio()}>
                  <div className='Skills-container'>
                  <p>
                    
                  </p>
                  </div>
              </div>
      </div>
    )
    }

}
export default Skills