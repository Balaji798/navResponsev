import React from "react";
import "./contact.css";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

const Contact = ({ condition2, closeBar }) => {
  const max = 8;
  const firstNumber = Math.floor(Math.random() * max);

  const secondNumber = Math.floor(Math.random() * max);
  return (
    <div className={condition2 ? "contact on" : "contact"}>
      <div className="head">
        <img
          src="	https://www.incuspaze.com/wp-content/uploads/2020/07/Logo1.png"
          width={150} alt='/'
        />
        <h2
          style={{
            fontSize: "20px",
            color: "#f57f20",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
          onClick={closeBar}
        >
          Close <IoIosArrowUp style={{ fontSize: "35px" }} />
        </h2>
      </div>
      <div className="contactDiv">
        <div className="contactDiv2">
          <h1>Schedule a Visit</h1>
          <div className="contactInput">
            <p>
              Name <span style={{ color: "red" }}>*</span>
            </p>
            <input></input>
          </div>
          <div className="contactInput">
            <p>
              Email Id <span style={{ color: "red" }}>*</span>
            </p>
            <input></input>
          </div>
          <div className="contactInput">
            <p>
              Phone Number <span style={{ color: "red" }}>*</span>
            </p>
            <input></input>
          </div>
          <div className="contactInput">
            <p>
              Preferred Location <span style={{ color: "red" }}>*</span>
            </p>
            <input></input>
          </div>
          <div className="contactInput">
            <p>
              No. of Seats Required <span style={{ color: "red" }}>*</span>
            </p>
            <input></input>
          </div>
          <div className="contactInput">
            <p>
              Message <span style={{ color: "red" }}>*</span>
            </p>
            <textarea
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                padding: "0px",
              }}
            ></textarea>
          </div>
          <div
            className="contactInput"
            style={{ border: "0px", paddingBottom: "1rem" }}
          >
            <p style={{ padding: "0.5rem 0" }}>
              Captcha <span style={{ color: "red" }}>*</span>{" "}
            </p>
            <p>
              {firstNumber} + {secondNumber} =
            </p>
            <input
              style={{
                border: "1px solid  #dfe6ee",
                borderRadius: "5px",
                padding: "1rem 0.5rem",
              }}
            ></input>
          </div>
          <div className="sendButton">
            <button> SEND MESSAGE</button>
          </div>
        </div>
        <div className="contactDiv3" style={{ background: "#f3f5fc" }}>
          <h1 style={{ marginBottom: "2rem" }}>Call Us</h1>
          <h2
            style={{
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#f57f20",
            }}
          >
            <BiPhoneCall style={{ fontSize: "35px" }} />
            +91-9930662621
          </h2>
          <div className="contactInput" style={{ marginBottom: "2rem" }}>
            <p>
              Let us call you back <span style={{ color: "red" }}>*</span>
            </p>
            <input style={{ backgroundColor: "#f3f5fc" }}></input>
          </div>
          <div className="contactInput" style={{ marginBottom: "1rem" }}>
            <p>
              Website <span style={{ color: "red" }}>*</span>
            </p>
            <input style={{ backgroundColor: "#f3f5fc" }}></input>
          </div>
          <div className="sendButton">
            <button> CALL ME BACK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
