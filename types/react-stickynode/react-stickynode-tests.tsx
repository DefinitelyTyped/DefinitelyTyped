import * as React from "react";
import * as Sticky from "react-stickynode";

const StickyAllOptions: React.JSX.Element = (
    <Sticky
        enabled={true}
        top={10}
        bottomBoundary={120}
        innerZ={1000}
        enableTransforms={true}
        activeClass="active"
        innerActiveClass="innerActive"
        className="className"
        releasedClass="released"
        innerClass="innerClass"
        onStateChange={s => s.status === Sticky.StatusCode.STATUS_ORIGINAL}
        shouldFreeze={() => false}
    >
        <div />
    </Sticky>
);

const StickyOptionalStringOptions: React.JSX.Element = (
    <Sticky top="#elem" bottomBoundary="#bottom" innerZ="1234">
        <div />
    </Sticky>
);

const StickyNoOptions: React.JSX.Element = (
    <Sticky>
        <div />
    </Sticky>
);

const StickyChildrenFunction: React.JSX.Element = (
    <Sticky>
        {status => {
            if (status.status === Sticky.STATUS_FIXED) {
                return "the component is sticky";
            }

            if (status.status === Sticky.STATUS_ORIGINAL) {
                return "the component in the original position";
            }

            return "the component is released";
        }}
    </Sticky>
);
