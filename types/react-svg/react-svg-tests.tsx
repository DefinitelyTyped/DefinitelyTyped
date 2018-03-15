import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSVG = require("react-svg");

const complete = <ReactSVG
    path={"atomic.svg"}
    callback={svg => {}}
    className="class-name"
    wrapperClassName="wrapper-class-name"
    evalScripts="once"
    style={{}}
  />;

const minimal = <ReactSVG path={"test.svg"}/>;
