import * as React from "react";
import Sticky from "react-sticky-el";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "custom-element": unknown;
        }
    }
}

const StickyBasic = () => <Sticky />;
const StickyAllFeatures = () => (
    <Sticky
        mode="bottom"
        disabled
        onFixedToggle={fixed => fixed}
        wrapperCmp="div"
        holderCmp={<div />}
        holderProps={{ title: "a title" }}
        boundaryElement=".an-element"
        scrollElement=".another-element"
        positionRecheckInterval={0}
        stickyStyle={{ display: "block" }}
        stickyClassName="sticky"
        topOffset={0}
        bottomOffset={0}
        hideOnBoundaryHit
        children="a child"
    />
);

<Sticky wrapperCmp="custom-element" />;
