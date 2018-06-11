import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSVG = require("react-svg");

const complete = <ReactSVG
    path={"atomic.svg"}
    onInjected={svg => {}}
    className="wrapper-class-name"
    svgClassName="svg-class-name"
    onClick={() => {}}
    evalScripts="once"
    svgStyle={{}}
  />;

const minimal = <ReactSVG path={"test.svg"}/>;
