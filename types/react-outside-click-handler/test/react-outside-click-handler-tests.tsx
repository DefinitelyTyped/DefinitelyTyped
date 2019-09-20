import * as React from "react";

import OutsideClickHandler from "react-outside-click-handler";

const onClickOutside: (event: React.MouseEvent<any>) => void = () => {};

<OutsideClickHandler onOutsideClick={onClickOutside}>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler onOutsideClick={onClickOutside} disabled={true}>
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler onOutsideClick={onClickOutside} display="block">
    <span>Child</span>
</OutsideClickHandler>;

<OutsideClickHandler onOutsideClick={onClickOutside} useCapture={true}>
    <span>Child</span>
</OutsideClickHandler>;
