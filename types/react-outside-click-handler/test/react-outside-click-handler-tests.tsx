import * as React from "react";

import OutsideClickHandler from "react-outside-click-handler";

<OutsideClickHandler
    onOutsideClick={(event) => {
        // $ExpectType MouseEvent
        event;
    }}
>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler
    onOutsideClick={(event) => {
        // $ExpectType MouseEvent
        event;
    }}
>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler
    onOutsideClick={(event) => {
        // $ExpectType MouseEvent
        event;
    }}
    disabled={true}
>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler
    onOutsideClick={(event) => {
        // $ExpectType MouseEvent
        event;
    }}
    display="block"
>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler
    onOutsideClick={(event) => {
        // $ExpectType MouseEvent
        event;
    }}
    useCapture={true}
>
    <span>Child</span>
</OutsideClickHandler>;
