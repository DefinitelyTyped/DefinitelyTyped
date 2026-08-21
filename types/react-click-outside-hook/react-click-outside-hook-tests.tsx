import * as React from "react";

import { useClickOutside } from "react-click-outside-hook";

function Component() {
    const [ref, hasClickedOutside] = useClickOutside();
    return <div ref={ref}>{hasClickedOutside.toString()}</div>;
}
