import React, { useEffect, useState } from "react";
import "../../../index.css";
import alu from "./alu.PNG";
import neuro_excel from "./neuro_excel.PNG";
import cw_1 from "./cw_1.PNG";
import fib from "./fib.PNG";

const AluPage: React.FC<any> = ({}) => {
  return (
    <div className="container2">
      <a href="#">Home</a>
       &nbsp; 
      <a href="/#/verilog">Back</a>
      <div
        className="header-text header-margin"
        style={{ textAlign: "center" }}
      >
        SAP-1 CPU
      </div>
        <div className="header-text">
          Feb 6/7, 2022:
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
        <img style={{ width: "100%", paddingTop: "3vh" }} src={alu} />
      </div>
      <div style={{ marginTop: "3vh" }}>
        The above image is a waveform of my ALU working! I spent a few hours
        trying to get it to work. Previously the bus_debug signal was being
        driven to XX. To debug this I removed all components from the top level
        design, and slowly re-introduced them until I saw the error again. The reason
        for the bus_debug being XX was because I had an uninitialized signal being
        passed into the ALU, causing the output of the ALU to be garbage.
      </div>
        <img style={{ width: "100%", paddingTop: "10vh" }} src={neuro_excel} />
      <div style={{ marginTop: "3vh" }}>
        I used this super janky excel sheet to help me see what the hex value of the control word should be.
      </div>
      <div style={{marginTop: "3vh"}} className="header-text">
        Feb 8, 2022:
      </div>
      <div style={{marginTop: "3vh"}}>
      Today I integrated everything and programmed the ram/rom. I wanted to test my cpu implementation by
      having it compute the fibonacci sequence.
      I used a simple python script to generate all the control words for each instruction in the ISA.
      Then I just manually programmed the ram with hexcodes.
      </div>
        <img style={{ height: "80vh", paddingTop: "3vh" }} src={fib} />
        <div style={{marginTop: "3vh"}}>
          As you can see from the cpu_out line, it is the fib sequence, kind of. There is a 1 missing at the start,
          but that is a quirk of how I setup the base case in my program. I'm kind of too lazy to change it atm since
          I have to manually write the instructions in hex which is somewhat time consuming. My next goal in this project
          is to roll an assembler.
        </div>
    </div>
  );
};

export default AluPage;
