import React,{useState} from 'react'
import Contact from './Contact';
import Navbar from '../navbar/Navbar'
import TopSearch from './TopSearch'

const Header = () => {
    const [topBar,setTopBar] = useState(false);
    const [topBar2,setTopBar2] =useState(false);

    const toggleTopBar = () =>{
      setTopBar((prevState) => !prevState);
    }
    const toggleBar=()=>{
      setTopBar2((prevState)=>!prevState)
    } 
  return (
    <>
       <Navbar openTopBar={toggleTopBar} openContactBar={toggleBar}/>
       <TopSearch condition={topBar} closeTopBar={toggleTopBar}/>
       <Contact condition2={topBar2} closeBar={toggleBar}/>
    </>
  )
}

export default Header