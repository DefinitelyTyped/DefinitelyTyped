import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");
import "react/experimental";
import "react-dom/experimental";

function viewTransitionTests() {
    const ViewTransition = React.unstable_ViewTransition;

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

// @enableGestureTransition
function swipeTransitionTest() {
    const startGestureTransition = React.unstable_startGestureTransition;

    function onScroll() {
        // lib.dom.d.ts has no types for ScrollTimeline yet.
        // $ExpectType () => void
        startGestureTransition(
            new AnimationTimeline(),
            () => {
            },
        );
        const gestureProvider: {} = {};

        startGestureTransition(
            // @ts-expect-error -- Incorrect gesture provider
            gestureProvider,
            () => {
            },
        );
    }
}
