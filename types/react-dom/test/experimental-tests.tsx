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

function swipeTransitionTest() {
    const useSwipeTransition = React.unstable_useSwipeTransition;
    // $ExpectType [value: string | null, startGesture: StartGesture]
    const [value, startGesture] = useSwipeTransition("/?a", null, "/?b");

    // lib.dom.d.ts has no types for ScrollTimeline yet.
    // $ExpectType () => void
    startGesture(new AnimationTimeline());
    const gestureProvider: {} = {};
    // @ts-expect-error -- Incorrect gesture provider
    startGesture(gestureProvider);
    // @ts-expect-error -- missing gesture provider
    startGesture();
}
