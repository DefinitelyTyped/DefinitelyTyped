import * as React from "react";
import { render } from "react-dom";

import { useClickOutside } from "react-click-outside-hook";

function Component() {
    const [ref, hasClickedOutside] = useClickOutside<HTMLDivElement>();
    return <div ref={ref}>{hasClickedOutside.toString()}</div>;
}

render(<Component />, document.getElementById("test"));
