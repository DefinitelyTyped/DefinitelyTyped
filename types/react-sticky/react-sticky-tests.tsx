import { Sticky, StickyContainer } from "react-sticky";
import * as React from "react";

const StickyAllOptions: JSX.Element = (
    <StickyContainer className="sticky-container">
        <Sticky
            relative
            disableHardwareAcceleration
            isActive={true}
            className="sticky"
            style={{}}
            stickyClassName="sticky"
            stickyStyle={{}}
            topOffset={0}
            bottomOffset={0}
            onStickyStateChange={(isSticky: boolean): void => undefined}
        >
            {({ style }) => <div style={style} />}
        </Sticky>
    </StickyContainer>
);

const StickyNoOptions: JSX.Element = (
    <StickyContainer>
        <Sticky>{({ style }) => <div style={style} />}</Sticky>
    </StickyContainer>
);
