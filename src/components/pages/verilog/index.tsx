import React, { useEffect, useState } from "react";
import "../../../index.css";

const VerilogRoute: React.FC<any> = ({}) => {
  return (
    <div className="container">
      <a href="#">Home</a>
      <div className="header-text header-margin">
        My mickey mouse writings about my FPGA journey:
      </div>
      <div style={{ paddingTop: "5vh" }}>
        Part of the reason I choose ECE as my major was because I was interested
        in how computers worked at a low level. Throughout undergrad we had some
        courses in digital hardware, however, due to the heavy workload at the
        time, it felt like I was just cramming for an exam and not doing much
        learning. I have decided to revisit this topic on my own terms, and I am
        documenting my progress here. The intention of this page is not to be a
        learning resource, just for me to dump my work and thoughts, and as such
        the quality of the writing will by very mickey mouse.
      </div>
      <div>
        <ul>
            <li>
                <a href="/#/sap-1">SAP-1</a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default VerilogRoute;
