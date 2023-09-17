import React from "react";
import jinna from "./photos/jinna.jpg";
import asik from "./photos/asik.jpg";
import nizar from "./photos/nizar.jpg";
import rahman from "./photos/rahman.jpg";
import mubarak from "./photos/mubarak.jpg";
import asif from "./photos/Asif.jpg";
import rabi from "./photos/rabi.jpg";
import noor from "./photos/noor.jpg";
import sahul from "./photos/sahul.jpg";
import kucha from "./photos/kucha.jpg";
import azar from "./photos/azar.jpg";
import amjat from "./photos/amjat.jpg";
import asaraf from "./photos/asaraf.jpg";
import jiya from "./photos/jiya.jpg";
import ibrahim from "./photos/ibrahim.jpg";
import rahuf from "./photos/rahuf.jpg";
import rasik from "./photos/rasik.jpg";
import shake from "./photos/shake.jpg";
import hani from "./photos/hani.jpg";

function Main() {
  return (
    <main className="main">
      <a href={jinna} download="jinna">
        <img src={require("./photos/jinna.jpg")} alt="jinna" />
      </a>
      <a href={asik} download="asik">
        <img src={require("./photos/asik.jpg")} alt="asik" />
      </a>
      <a href={nizar} download="nizar">
        <img src={require("./photos/nizar.jpg")} alt="nizar" />
      </a>
      <a href={rahman} download="rahman">
        <img src={require("./photos/rahman.jpg")} alt="rahman" />
      </a>
      <a href={mubarak} download="mubarak">
        <img src={require("./photos/mubarak.jpg")} alt="mubarak" />
      </a>
      <a href={asif} download="asif">
        <img src={require("./photos/Asif.jpg")} alt="asif" />
      </a>
      <a href={rabi} download="rabi">
        <img src={require("./photos/rabi.jpg")} alt="rabi" />
      </a>
      <a href={noor} download="noor">
        <img src={require("./photos/noor.jpg")} alt="noor" />
      </a>
      <a href={sahul} download="sahul">
        <img src={require("./photos/sahul.jpg")} alt="sahul" />
      </a>
      <a href={kucha} download="kucha">
        <img src={require("./photos/kucha.jpg")} alt="kucha" />
      </a>
      <a href={amjat} download="amjat">
        <img src={require("./photos/amjat.jpg")} alt="amjat" />
      </a>
      <a href={azar} download="azar">
        <img src={require("./photos/azar.jpg")} alt="azar" />
      </a>
      <a href={asaraf} download="asaraf">
        <img src={require("./photos/asaraf.jpg")} alt="asaraf" />
      </a>
      <a href={jiya} download="jiya">
        <img src={require("./photos/jiya.jpg")} alt="jiya" />
      </a>
      <a href={rahuf} download="rahuf">
        <img src={require("./photos/rahuf.jpg")} alt="rahuf" />
      </a>
      <a href={ibrahim} download="ibrahim">
        <img src={require("./photos/ibrahim.jpg")} alt="ibrahim" />
      </a>
      <a href={rasik} download="rasik">
        <img src={require("./photos/rasik.jpg")} alt="rasik" />
      </a>
      <a href={shake} download="shake">
        <img src={require("./photos/shake.jpg")} alt="shake" />
      </a>
      <a href={hani} download="hani">
        <img src={require("./photos/hani.jpg")} alt="hani" />
      </a>
    </main>
  );
}

export default Main;
