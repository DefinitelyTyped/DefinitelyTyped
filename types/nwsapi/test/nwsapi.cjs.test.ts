import nwsapi = require("nwsapi");
const matcher = nwsapi({ document, DOMException });

matcher; // $ExpectType NWSAPI

matcher.byTag("html", document); // $ExpectType HTMLHtmlElement[]
matcher.byTag("custom-element", document); // $ExpectType Element[]

matcher.byClass("class", document); // $ExpectType Element[]
matcher.byId("class", document); // $ExpectType Element[]

// $ExpectType HTMLDivElement | null
matcher.first("div", null, element => {
    element; // $ExpectType HTMLDivElement
});

// $ExpectType HTMLParagraphElement[]
matcher.select("p", null, element => {
    element; // $ExpectType HTMLParagraphElement
});

function testElement(element: Element) {
    if (
        matcher.match("svg", element, element => {
            element; // $ExpectType SVGSVGElement
        })
    ) {
        element; // $ExpectType SVGSVGElement
    }
    element; // $ExpectType Element
}

// $ExpectType HTMLHtmlElement | null
matcher.closest("html", document.head, element => {
    element; // $ExpectType HTMLHtmlElement
});

// UMD global:
// @ts-expect-error
NW;
