import React, { useState, useEffect,useContext,useRef} from 'react'
import {APPLContext} from './../../App'
import Child from './Child'
import './Projects.css'

const ProjectChildren = ()=>{
    const aPPLContext = useContext(APPLContext)
    let  [,setState]=useState();
    const display = useRef('')
    const openclosestatus = useRef('')
    

    function useMousePosition() {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
      
        function handleMouseMove(event) {
          setMousePosition({
            x: event.clientX,
            y: event.clientY
          });
        }
      
        useEffect(() => {
          window.addEventListener("mousemove", handleMouseMove);
      
          return () => {
            window.removeEventListener("mousemove", handleMouseMove);
          };
        }, []);
      
        return mousePosition;
      }
      
      const { x, y } = useMousePosition();
     // console.log ("x y values ===========" + x + ' ' + y)
      const setxyposition = () =>{

        if (x >= 334 && x <= 816 && y>=144 && y <=315){

          display.current = 'digital'
          openclosestatus.current='open-digital-dash'
         console.log ("x y values ===========" + x + ' ' + y)
         setState({})
        }
        if(x >= 837 && x <= 1287 && y>=144 && y <=315){
          display.current = 'veg'
        
         console.log ("x y values ===========" + x + ' ' + y)
         setState({})
        }
      }

    return(
        <div>
            <div className={aPPLContext.ProjectSlide} >
                <div className='Projects-container' onClick = {() => setxyposition()}>
                    <Child display={display.current} openclosestatus={openclosestatus.current}/>
                </div>
            </div>
        </div>
    )
}
export default ProjectChildren