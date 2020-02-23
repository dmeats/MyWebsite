import React, {useContext,useRef,useEffect,useState} from 'react'
import {APPLContext} from './../../App'
import "./Header.css"
import SoundOn from '../../Assets/SoundOn1.png'
import SoundOff from '../../Assets/SoundOff1.png'

const Header = () =>{
  const aPPLContext = useContext(APPLContext)
  const imagetobedisplayed = useRef(SoundOn);
  const [Selector, setSelector] = useState(true);

  //turn sound on and off
  const toggle = () => {
    setSelector(!Selector)
    Selector ? imagetobedisplayed.current=SoundOn: imagetobedisplayed.current=SoundOff;
   
   aPPLContext.setSoundOnOff(Selector)
   
   
   
  }
  useEffect(() => {
    toggle();
  }, []);

    return(
    <div>
      <div className="Header">
     
          <div className = 'Red-Circle'></div>
          <div className = 'Blue-Circle' ></div>
          <div className = 'Purple-Circle' onClick={() => toggle()} >
          <img src={imagetobedisplayed.current} alt="Logo" />
          </div>
          <div className = 'Red-Circle'></div>
<div className = 'Green-Message-Box'>Message:{aPPLContext.Message}</div>
          <div className = 'Red-Circle'></div>
          <div className='Bottom-Header-Rail'></div>
      </div>
      
      </div>
    )
}
export default Header