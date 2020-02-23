import React, { useState, useEffect,useContext,useRef} from 'react'
import {APPLContext} from './../../App'
import buttonimage from '../../Assets/button.png'
import DigitalDashDetail from '../../Assets/Digital-Dash-Detail1.png'
import Steam from '../../Sounds/steam1.mp3'
import './Projects.css'

const Child = (props) => {
  const { display,openclosestatus } = props
  let  [,setState]=useState();
  const displayupbutton = useRef('hide')
  const displaydigdashimage = useRef('hide')
  const Styletobeused = useRef('')

  displayupbutton.current = 'displaybutton'
  displaydigdashimage.current = 'displayPicture'
  Styletobeused.current=openclosestatus
  //close details screen
  const close = (e) => {
    if(e==='digital'){
      Styletobeused.current = 'close-digital-dash'
      
      console.log(e)
      console.log(Styletobeused.current)
      setState({});
      //sets a waiting time for the div to move up the screen before hiding it
      setTimeout(() =>{ Styletobeused.current = 'hide'
                        displayupbutton.current = 'hide'
                        displaydigdashimage.current = 'hide'
                        setState({});},
                4500)
                return(
                  <div className={Styletobeused.current}>
                           
                  </div>
                )
      }

  }

  useEffect(() => {
    close()
  }, [Styletobeused.current]);

  if (display==='digital' || Styletobeused.current==='close-digital-dash'){
      
    return(
      <div className={Styletobeused.current}>
               <p>over details</p>
               <div className={displaydigdashimage.current}>
                        <img src={DigitalDashDetail}>
                        </img>
              </div>
              <div className={displayupbutton.current} >
                        <img src={buttonimage}
                             alt="close button"
                             onClick = {() => close('digital')}/>
              </div>
      </div>
    )
    }
    else if(display==='veg'){
      return(
        <div className='open-digital-dash'>
                 <p>veg details</p>
        </div>
      )

    }
    else{
      return(
        null
      )
    }
      
}
export default Child
