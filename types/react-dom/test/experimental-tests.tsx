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

// @enableFragmentRefs
function fragmentRefTest() {
    <React.Fragment
        ref={maybeInstance => {
            // $ExpectType FragmentInstance | null
            maybeInstance;

            // See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/69022/commits/57825689c7abb50a79395d1266226cfa1b31a4e1
            const instance = maybeInstance!;

            instance.focus();
            instance.blur();
            instance.focusLast();
            instance.observeUsing(new IntersectionObserver(() => {}));
            instance.unobserveUsing(new IntersectionObserver(() => {}));
            instance.observeUsing(new ResizeObserver(() => {}));
            instance.unobserveUsing(new ResizeObserver(() => {}));
            instance.getClientRects();
            instance.getRootNode();
            instance.getRootNode({ composed: true });
            instance.addEventListener("click", () => {});
            instance.addEventListener("click", () => {}, true);
            instance.addEventListener("click", () => {}, { capture: true });
            instance.addEventListener("click", () => {}, true);
            instance.removeEventListener("click", () => {});
            instance.removeEventListener("click", () => {}, { capture: true });
            instance.removeEventListener("click", () => {}, true);
            instance.addEventListener("click", () => {}, { passive: true });
            instance.addEventListener("click", () => {}, { once: true });
            instance.addEventListener("click", () => {}, { signal: new AbortController().signal });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal() });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), once: true });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), passive: true });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), capture: true });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), capture: true, once: true });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), capture: true, passive: true });
            instance.addEventListener("click", () => {}, { signal: new AbortSignal(), once: true, passive: true });
            instance.addEventListener("click", () => {}, {
                signal: new AbortSignal(),
                capture: true,
                once: true,
                passive: true,
            });
            instance.removeEventListener("click", () => {}, { capture: true });
            instance.removeEventListener("click", () => {}, true);
            instance.removeEventListener("click", () => {}, {
                // @ts-expect-error -- Not the same options as addEventListener
                passive: true,
            });
            return () => {};
        }}
    >
        <div />
        <div />
    </React.Fragment>;
}
