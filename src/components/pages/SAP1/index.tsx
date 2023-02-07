import React, { useEffect, useState } from "react";
import "../../../index.css";
import alu from "./alu.PNG";


const AluPage: React.FC<any> = ({}) => {
  return (
    <div className="container">
        <a href="#">Home</a>
      <div
        className="header-text header-margin"
        style={{ textAlign: "center" }}
      >
        SAP-1 CPU
      </div>
      <div style={{paddingTop: "5vh"}}>
        Part of the reason I choose ECE as my major was because I was interested in how
        computers worked at a low level. Throughout undergrad we had some courses in digital hardware,
        however, due to the heavy workload at the time, it felt like I was just cramming for an exam, and
        not doing much learning. I have decided to revisit this topic on my own terms, and I am documenting
        my progress here.
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/* <img style={{ height: "80vh" }} src={tp101} /> */}
        <img style={{ width: "100%", paddingTop: "10vh"}} src={alu} />
        {/* <img style={{ width: "100%", paddingTop: "10vh"}} src={campus2} /> */}
      </div>
    </div>
  );
};

export default AluPage;
