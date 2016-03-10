/// <reference path="../react/react.d.ts" />
/// <reference path="./react-scroll.d.ts" />
/// <reference path="../react/react-dom.d.ts"/>

import { Component } from 'react'
import * as ReactDOM from 'react-dom';
import { Link, Element, Events, scroller } from 'react-scroll'

let link = <Link to="test" spy={true} smooth={true}>Dashboard</Link>;
let element = <Element name="test" >Test</Element>;

scroller.scrollTo("test");


