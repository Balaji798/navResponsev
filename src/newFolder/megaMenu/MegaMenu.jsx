import React, { useState } from "react";
import { megaData } from "./data";
import { Link } from "react-router-dom";
import "./megaMenu.css";

const MegaMenu = () => {
  const [down, setDown] = useState(false);
  return (
    <div class="dropdown">
      <button class="dropbtn">Location</button>
      <div class="dropdown-content">
        {megaData.map((item, index) => (
          <div class="row" key={index}>
            <Link to={`/office-space/${item.city}`}>
              <h3>{item.city}</h3>
            </Link>
            <div style={{ padding: "0 0 0 1.2rem" }}>
              {item.location.map((cityName, _) => (
                <div className="area" style={{ color: "#fff" }} key={_}>
                  {cityName.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
