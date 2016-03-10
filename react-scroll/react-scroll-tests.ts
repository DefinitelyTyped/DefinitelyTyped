/// <reference path="../react/react.d.ts" />
/// <reference path="./react-scroll.d.ts" />

import * as React from 'react';
import { Link, Element, Events, scroller } from 'react-scroll';

class LinkTest extends React.Component<React.Props<{}>, {}> {

	render() {
		return <div>
	       <Link to="/">Dashboard</Link>
		</div>
	}

}

class ElementTest extends React.Component<React.Props<{}>, {}> {

	render() {
		return <div>
	       <Element name="test" >Test</Element>
		</div>
	}
}

scroller.scrollTo("test");


