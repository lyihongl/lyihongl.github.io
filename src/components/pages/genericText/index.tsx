import React, { useEffect, useState } from "react";
import "../../../index.css";
import tp101 from "./taipei101.jpg";
import campus1 from "./campus1.jpg";
import campus2 from "./campus2.jpg";

const Page: React.FC<any> = ({}) => {
  return (
    <div className="container">
      <div
        className="header-text header-margin"
        style={{ textAlign: "center" }}
      >
        National Taiwan University Exchange
      </div>
      <div
        style={{
          paddingTop: "10vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <img style={{ height: "80vh" }} src={tp101} />
        <img style={{ width: "100%", paddingTop: "10vh"}} src={campus1} />
        <img style={{ width: "100%", paddingTop: "10vh"}} src={campus2} />
      </div>
    </div>
  );
};

export default Page;
