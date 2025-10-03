/// <reference types="../canary"/>
import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");
import ReactDOMServer = require("react-dom/server");
import ReactDOMStatic = require("react-dom/static");

// @enableGestureTransition
function viewTransitionTests() {
    const ViewTransition = React.ViewTransition;

    <ViewTransition
        ref={current => {
            if (current !== null) {
                // $ExpectType string
                current.name;

                // $ExpectType ViewTransitionPseudoElement
                current.group;
                // $ExpectType ViewTransitionPseudoElement
                current.imagePair;
                // $ExpectType ViewTransitionPseudoElement
                current.old;
                // $ExpectType ViewTransitionPseudoElement
                current.new;

                // $ExpectType CSSStyleDeclaration
                current.old.getComputedStyle();
                // @ts-expect-error -- Implemented on the pseudo elements.
                current.getComputedStyle();
            }
        }}
    >
        <div />
    </ViewTransition>;
}
