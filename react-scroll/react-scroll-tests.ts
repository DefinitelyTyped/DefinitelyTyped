/// <reference path="./react-scroll.d.ts" />

import { Link, Element, Events, scroller } from 'react-scroll';

class LinkTest extends React.Component<React.Props<{}>, {}> {

	render() {
		return <div>
	       <Link to={'/'} />
		</div>
	}

}

class ElementTest extends React.Component<React.Props<{}>, {}> {

	render() {
		return <div>
	       <Element name="test" />
		</div>
	}
}

scroller.scrollTo("test");


