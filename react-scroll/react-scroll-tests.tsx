/// <reference path="../react/react.d.ts" />
/// <reference path="./react-scroll.d.ts" />

import * as React from 'react';
import { Link, Element, scroller } from 'react-scroll';

let link = <Link to="test" />;
let element = <Element name="test" />;

scroller.scrollTo("test");