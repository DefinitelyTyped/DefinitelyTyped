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

                // $ExpectType Animatable
                current.group;
                // $ExpectType Animatable
                current.imagePair;
                // $ExpectType Animatable
                current.old;
                // $ExpectType Animatable
                current.new;
            }
        }}
    >
        <div />
    </ViewTransition>;
}
