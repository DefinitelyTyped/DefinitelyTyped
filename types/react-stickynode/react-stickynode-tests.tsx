import * as Sticky from 'react-stickynode';
import * as React from 'react';

const StickyAllOptions: JSX.Element = (
    <Sticky
        enabled={true}
        top={10}
        bottomBoundary={120}
        innerZ={1000}
        enableTransforms={true}
        activeClass="active"
        releasedClass="released"
        innerClass="innerClass"
        onStateChange={s => s.status === Sticky.StatusCode.STATUS_ORIGINAL}
        shouldFreeze={() => false}
    >
        <div />
    </Sticky>
);

const StickyOptionalStringOptions: JSX.Element = (
    <Sticky top="#elem" bottomBoundary="#bottom" innerZ="1234">
        <div />
    </Sticky>
);

const StickyNoOptions: JSX.Element = (
    <Sticky>
        <div />
    </Sticky>
);

const StickyChildrenFunction: JSX.Element = (
    <Sticky>
        {status => {
            if (status.status === Sticky.STATUS_FIXED) {
                return 'the component is sticky';
            }

            if (status.status === Sticky.STATUS_ORIGINAL) {
                return 'the component in the original position';
            }

            return 'the component is released';
        }}
    </Sticky>
);
