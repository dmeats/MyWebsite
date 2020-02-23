import React, { useState, useEffect,useContext,useRef} from 'react'
import {APPLContext} from './../../App'
import buttonimage from '../../Assets/button.png'
import DigitalDashDetail from '../../Assets/Digital-Dash-Detail1.png'
import VegDetail from '../../Assets/Veg.png'
import Steam from '../../Sounds/steam1.mp3'
import './Projects.css'

const ChildProjects = () => {
  const aPPLContext = useContext(APPLContext)
    const [audio2] = useState(new Audio(Steam));
    const Styletobeused = useRef('')
    const displayupbutton = useRef('hide')
    const displaydigdashimage = useRef('hide')
    const displayvegimage = useRef('hide')
    const HoverDigitalStylebeused = useRef('Digital-Dash-hover-off')
    const HoverVegStylebeused = useRef('Veg-hover-off')
    const HoverSolarStylebeused = useRef('Solar-hover-off')
    const HoverDrumStylebeused = useRef('Drum-hover-off')
    const HoverAirStylebeused = useRef('Air-hover-off')

    let  [,setState]=useState(); //used to force a rerender to happen which will allow a style to be set
    const [statestyle, setstatestyle] = useState('');

   //for hovering over image on projects screen
   const hoveron =(e) =>{
     if(e==='Digital'){
       console.log(e)
       HoverDigitalStylebeused.current='Digital-Dash-hover-over'
       setState({})
     }
     if(e==='Veg'){
      console.log(e)
      HoverVegStylebeused.current='Veg-hover-over'
      setState({})
    }
    if(e==='Solar'){
      console.log(e)
      HoverSolarStylebeused.current='Solar-hover-over'
      setState({})
    }
    if(e==='Drum'){
      console.log(e)
      HoverDrumStylebeused.current='Drum-hover-over'
      setState({})
    }
    if(e==='Air'){
      console.log(e)
      HoverAirStylebeused.current='Air-hover-over'
      setState({})
    }
   }

   //hovering off of image on projects screen
   const hoveroff =(e) =>{
    if(e==='Digital'){
      console.log(e)
      HoverDigitalStylebeused.current='Digital-Dash-hover-off'
      setState({})
    }
    if(e==='Veg'){
      console.log(e)
      HoverVegStylebeused.current='Veg-hover-off'
      setState({})
    }
    if(e==='Solar'){
      console.log(e)
      HoverSolarStylebeused.current='Solar-hover-off'
      setState({})
    }
    if(e==='Drum'){
      console.log(e)
      HoverDrumStylebeused.current='Drum-hover-off'
      setState({})
    }
    if(e==='Air'){
      console.log(e)
      HoverAirStylebeused.current='Air-hover-off'
      setState({})
    }
  }

///function to close and open details of projects by changing their style

    const OpenCloseDetails = (e) =>{
      
      if (e==='opendigital'){
        Styletobeused.current= 'open-digital-dash'
        displayupbutton.current = 'displaybutton'
        displaydigdashimage.current = 'displayPicture'
       
        console.log(Styletobeused.current)
        setState({}); //forces a rerender
       
      }
      if(e==='closedigital'){
        Styletobeused.current = 'close-digital-dash'
        
        console.log(e)
        setState({});
        //sets a waiting time for the div to move up the screen before hiding it
        setTimeout(() =>{ Styletobeused.current = 'hide'
                          displayupbutton.current = 'hide'
                          displaydigdashimage.current = 'hide'
                          setState({});},
                  2500)
        }
        if (e==='openveg'){
          Styletobeused.current = 'open-veg'
          displayupbutton.current = 'displaybutton'
          displayvegimage.current='displayPicture'
          console.log(e)
          console.log(Styletobeused.current)
          setState({}); //forces a rerender
         
        }
        if(e==='closeveg'){
          Styletobeused.current = 'close-veg'
          
          console.log(e)
          setState({});
          //sets a waiting time for the div to move up the screen before hiding it
          setTimeout(() =>{ Styletobeused.current = 'hide'
                            displayupbutton.current = 'hide'
                            displayvegimage.current='hide'
                            setState({});},
                    4500)
          }
          if (e==='opensolar'){
            Styletobeused.current = 'open-solar'
            displayupbutton.current = 'displaybutton'
            console.log(e)
            console.log(Styletobeused.current)
            setState({}); //forces a rerender
           
          }
          if(e==='closesolar'){
            Styletobeused.current = 'close-solar'
            
            console.log(e)
            setState({});
            //sets a waiting time for the div to move up the screen before hiding it
            setTimeout(() =>{ Styletobeused.current = 'hide'
                              displayupbutton.current = 'hide'
                              setState({});},
                      4500)
            }
            if (e==='opendrum'){
              Styletobeused.current = 'open-drum'
              displayupbutton.current = 'displaybutton'
              console.log(e)
              console.log(Styletobeused.current)
              setState({}); //forces a rerender
             
            }
            if(e==='closedrum'){
              Styletobeused.current = 'close-drum'
              
              console.log(e)
              setState({});
              //sets a waiting time for the div to move up the screen before hiding it
              setTimeout(() =>{ Styletobeused.current = 'hide'
                                displayupbutton.current = 'hide'
                                setState({});},
                        4500)
              }
              if (e==='openair'){
                Styletobeused.current = 'open-air'
                displayupbutton.current = 'displaybutton'
                console.log(e)
                console.log(Styletobeused.current)
                setState({}); //forces a rerender
               
              }
              if(e==='closeair'){
                Styletobeused.current = 'close-air'
                
                console.log(e)
                setState({});
                //sets a waiting time for the div to move up the screen before hiding it
                setTimeout(() =>{ Styletobeused.current = 'hide'
                                  displayupbutton.current = 'hide'
                                  setState({});},
                          4500)
                }
    }

///function to play audio
    const playAudio = () =>{
      
      console.log('playing sound')
      
      if(aPPLContext.SoundOnOff===true){
        
                        audio2.play();
                      }
  
       if(aPPLContext.SoundOnOff===false){

                        audio2.pause();
                      }
   }
    
      useEffect(() => {
        playAudio();
        
        console.log(aPPLContext.ProjectSlide)
      }, []);

      return(
        <div>
                 <div className={aPPLContext.ProjectSlide} onLoadStart={playAudio()}>
                    <div className='Projects-container'>
                    <div className={HoverDigitalStylebeused.current}
                     onClick = {() => OpenCloseDetails('opendigital')}
                     onMouseOver={()=>hoveron('Digital')}
                     onMouseOut={()=>hoveroff('Digital')}>
                    </div>

                    <div className={Styletobeused.current} >
                      <div className={displayupbutton.current}
                           onClick = {() => OpenCloseDetails('closedigital')}>
                             <img src={buttonimage}  alt="close button" />
                      </div>
                    </div>
                    
                    <div className={HoverVegStylebeused.current}
                         onClick = {() => OpenCloseDetails('openveg')}
                         onMouseOver={()=>hoveron('Veg')}
                         onMouseOut={()=>hoveroff('Veg')}>
                    </div>

                    <div className={Styletobeused.current} >
                      <div className={displayupbutton.current}
                           onClick = {() => OpenCloseDetails('closeveg')}>
                             <img src={buttonimage}  alt="close button" />
                      </div>
                    </div>
                    
                    <div className={HoverSolarStylebeused.current}
                         onClick = {() => OpenCloseDetails('opensolar')}
                         onMouseOver={()=>hoveron('Solar')}
                         onMouseOut={()=>hoveroff('Solar')}>                     
                    </div>
                    <div className={Styletobeused.current} >
                      <div className={displayupbutton.current}
                           onClick = {() => OpenCloseDetails('closesolar')}>
                             <img src={buttonimage}  alt="close button" />
                      </div>
                    </div>
                    
                    <div className={HoverDrumStylebeused.current}
                         onClick = {() => OpenCloseDetails('opendrum')}
                         onMouseOver={()=>hoveron('Drum')}
                         onMouseOut={()=>hoveroff('Drum')}>
                    </div>
                     <div className={Styletobeused.current} >
                       <div className={displayupbutton.current}
                            onClick = {() => OpenCloseDetails('closedrum')}>
                              <img src={buttonimage}
                                alt="close button" />
                        </div>
                     </div>
                    
                     <div className={HoverAirStylebeused.current}
                          onClick = {() => OpenCloseDetails('openair')} 
                          onMouseOver={()=>hoveron('Air')} 
                          onMouseOut={()=>hoveroff('Air')}>
                     </div>
                     <div className={Styletobeused.current} >
                       <div className={displayupbutton.current} 
                            onClick = {() => OpenCloseDetails('closeair')}>
                              <img src={buttonimage}  
                              alt="close button" />
                       </div>
                     </div>
                    
                    </div>
                  </div>
        </div>
      )
      
}
export default ChildProjects