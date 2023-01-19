import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OfClass from "./ClassFunc/OfClass";
import Functional from "./ClassFunc/Functional";

function App() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col">
          <OfClass></OfClass>
        </div>
        <div className="col">
          <Functional></Functional>
        </div>
      </div>
    </div>
  );
}

export default App;
