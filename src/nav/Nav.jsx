import React from 'react'
import { TbSearch } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <header>
    <img src="./images/image.png" alt="/" className="logo" />
    <input type="checkbox" id="menu-bar" />
    <label for="menu-bar">
      <GiHamburgerMenu />
    </label>
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">location</a>
        </li>
        <li>
          <a href="#">product</a>
          <ul>
            <li>
              <a href="#">Managed Office Space</a>
              <ul>
                <li>
                  <a href="/">SBM</a>
                </li>
                <li>
                  <a href="/">Headquarters</a>
                </li>
                <li>
                  <a href="/">Branch Office</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Coworking Space</a>
              <ul>
                <li>
                  <a href="/">Open Dedicated Seats</a>
                </li>
                <li>
                  <a href="/">Private Cabin</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Meeting {"&"} Events</a>
              <ul>
                <li>
                  <a href="/">Meeting Rooms</a>
                </li>
                <li>
                  <a href="/">Conference Rooms</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Virtual Office</a>
            </li>
          </ul>
        </li>
      </ul>
      <div style={{padding:"1rem 2rem"}}>
        <div className="search">
          <input
            style={{
              outline: "none",
              backgroundColor: "#4e5174",
              border: "none",
              color: "#fff",
              opacity: "1",
              padding:"1rem 0"
            }}
            placeholder="Find Workspace in"
          ></input>
          <TbSearch
            style={{
              color: "#fff",
              opacity: "1",
              fontSize: "25px",
              paddingTop: "0.3rem",
            }}
          />
        </div>
      </div>
      <ul>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">gallery</a>
        </li>
        <li>
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <BiPhoneCall style={{ fontSize: "25px" }} />
            <h2> 9930662621</h2>
          </a>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Nav