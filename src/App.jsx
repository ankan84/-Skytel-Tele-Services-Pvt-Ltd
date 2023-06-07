import React, { useEffect, useState } from "react";
import "./App.css";
import RadioBtn from "./RadioBtn";

function App() {

  let value = ["India", "Pakistan", "Nepal"];
  
  return (
    <><RadioBtn value={value} readonly={false}>
    </RadioBtn> </>
  );
}

export default App;
