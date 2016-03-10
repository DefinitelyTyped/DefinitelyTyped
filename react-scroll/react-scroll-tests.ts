/// <reference path="../react/react.d.ts" />
/// <reference path="./react-scroll.d.ts" />

import { Component } from 'react'
import { Link, Element, Events, scroller } from 'react-scroll'

class LinkTest extends Component<any, any> {

	render() {
		return <div>
	       <Link to="test" spy={true} smooth={true}>Dashboard</Link>
		</div>
	}

}

class ElementTest extends Component<any, any> {

	render() {
		return <div>
	       <Element name="test" >Test</Element>
		</div>
	}
}

scroller.scrollTo("test");


