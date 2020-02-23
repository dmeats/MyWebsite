import React, { useState, useEffect,useContext,useRef} from 'react'
import ChildProjects from './ChildProjects'
import ProjectChildren from "./ProjectChildren";
import {APPLContext} from './../../App'


const Projects = () => {
  const aPPLContext = useContext(APPLContext)

      //checks to see if skill is rolled out and if so slides the skills back in
      if (aPPLContext.SkillsSlide === 'skillsout'){
        let SkillsSlide = 'skillsin'
      
      return(
        <div>
                <div className={SkillsSlide} >
                    <div className = 'Skills-container'>
                    <p></p>
                    </div>
                </div>
  
                <ChildProjects />
        </div>
      )
      }

      
      if (aPPLContext.SkillsSlide === 'skillsin'){
       
      return(
        <div>
                 <ChildProjects />
        </div>
      )
      }
}
export default Projects