import * as WPElement from "@wordpress/element";

const testElement = WPElement.createElement(
    "div",
    { className: "foobar" },
    "hello world"
);

WPElement.createRef();

WPElement.createPortal(testElement, document.createElement("div"));

WPElement.findDOMNode(null);

WPElement.render(testElement, document.createElement("div"));

WPElement.unmountComponentAtNode(document.createElement("div"));

WPElement.RawHTML({ children: "<h1>Hello world</h1>" });

WPElement.isEmptyElement("hello world");

WPElement.renderToString(WPElement.createElement("div", {}, "hello world"));
