/// <reference path="react-dom.d.ts" />
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactDomServer from 'react-dom/server';

var reactElement: React.ReactElement<{}>;
var DOMElement = document.getElementById("main");

var r: React.Component<{}, {}> = ReactDom.render(reactElement, DOMElement);
var u: boolean = ReactDom.unmountComponentAtNode(DOMElement);

var s: string = ReactDomServer.renderToString(reactElement);
var m: string = ReactDomServer.renderToStaticMarkup(reactElement);
