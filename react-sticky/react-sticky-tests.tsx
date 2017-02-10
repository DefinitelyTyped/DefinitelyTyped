import {Sticky, StickyContainer} from "react-sticky";
import * as React from "react";

const StickyComponent: JSX.Element =
    <StickyContainer className="sticky-container">
        <Sticky isActive={true} className="sticky" style={{}} stickyClassName="sticky" stickyStyle={{}} topOffset={0} bottomOffset={0} onStickyStateChange={(isSticky: boolean): void => undefined}>
        </Sticky>
    </StickyContainer>;

