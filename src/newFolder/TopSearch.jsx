import React from 'react'
import {ImCancelCircle} from 'react-icons/im';
import './topSearch.css';

const TopSearch = ({condition,closeTopBar}) => {
  return (
    <div className={condition?"topBar open":"topBar"}>
      <ImCancelCircle onClick={closeTopBar} style={{fontSize:'25px',color:"#9fa3a7"}}/>
      <form className='search'>
        <label>
        <input type="text" name='Search' placeholder='Search for location'></input>
        </label>
        <button>SERCH</button>
      </form>
      <div className='featured'>
        <p>Featured Location</p>
        <div style={{padding:"20px 0px",display:"flex",justifyContent:"space-between",gap:'5px'}
        }>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
          <img src='https://www.incuspaze.com/wp-content/uploads/2020/11/conference-room-in-ahmedabad.jpg' width={170} height={50} style={{borderRadius:"10px"}} alt='/'/>
        </div>
      </div>
      </div>
  )
}

export default TopSearch