import React = require("react");
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");
import "react/experimental";
import "react-dom/experimental";

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

    <React.ViewTransition
        onGestureEnter={(timeline, options, instance, types) => {
            // $ExpectType CSSNumberish | null
            timeline.currentTime;
            // $ExpectType ViewTransitionPseudoElement
            instance.group;
        }}
    >
    </React.ViewTransition>;
}

// @enableSrcObject
function srcObjectTest() {
    <img src={new Blob()} />;
    <img src={new File([], "image.png")} />;
    <img
        // @ts-expect-error -- MediaStream is only valid on video/audio elements
        src={new MediaStream()}
    />;
    <img
        // @ts-expect-error -- MediaSource is only valid on video/audio elements
        src={new MediaSource()}
    />;
    <img
        // @ts-expect-error -- arbitrary object is not valid
        src={{}}
    />;

    <audio src={new Blob()} />;
    <audio src={new File([], "react.mp3")} />;
    <audio src={new MediaStream()} />;
    <audio src={new MediaSource()} />;
    <audio
        // @ts-expect-error -- arbitrary object is not valid
        src={{}}
    />;

    <video src={new Blob()} />;
    <video src={new File([], "react.mp3")} />;
    <video src={new MediaStream()} />;
    <video src={new MediaSource()} />;
    <video
        // @ts-expect-error -- arbitrary object is not valid
        src={{}}
    />;
}

// @enableDefaultTransitionIndicator
function defaultTransitionIndicatorTest() {
    ReactDOMClient.createRoot(document.createElement("div"), {
        onDefaultTransitionIndicator: () => {
            return () => {};
        },
    });
    ReactDOMClient.createRoot(document.createElement("div"), {
        // No cleanup is fine e.g. if optimistic state is used
        onDefaultTransitionIndicator: () => {},
    });
    ReactDOMClient.hydrateRoot(document.createElement("div"), null, {
        onDefaultTransitionIndicator: () => {
            return () => {};
        },
    });
    ReactDOMClient.hydrateRoot(document.createElement("div"), null, {
        // No cleanup is fine e.g. if optimistic state is used
        onDefaultTransitionIndicator: () => {},
    });
}
