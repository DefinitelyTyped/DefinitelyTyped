import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import { render } from "react-dom";

render(
    <Scrollbars style={{ width: 500 }}>
        <div>Test</div>
    </Scrollbars>,
    document.getElementById("main"),
);
