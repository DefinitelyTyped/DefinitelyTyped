import LinkifyIt = require("linkify-it");
import * as React from "react";
import ReactLinkify from 'react-linkify';

const linkifier = new LinkifyIt();

class ExampleOfUsingReactLinkify extends React.Component {
	render() {
		return (
			<ReactLinkify
				textDecorator={textDecorator}
				hrefDecorator={hrefDecorator}
				componentDecorator={componentDecorator}
				matchDecorator={matchDecorator}>
				This is a great website: www.wikipedia.org!
			</ReactLinkify>
		);
	}
}

function textDecorator(urlText: string): string {
    return urlText + "is a great url";
}

function hrefDecorator(urlHref: string): string {
	return urlHref;
}

function componentDecorator(decoratedHref: string, decoratedText: string, key: number): React.ReactNode {
	return (
		<a href={decoratedHref} key={key}>
			{decoratedText}
		</a>
	);
}

function matchDecorator(text: string) {
	return linkifier.match(text);
}
