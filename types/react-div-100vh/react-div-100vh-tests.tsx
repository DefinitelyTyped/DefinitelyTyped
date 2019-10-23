import * as React from "react";
import Div100vh from "react-div-100vh";

export const _ = () => <>
    <Div100vh className="class">
        <div>Some content</div>
    </Div100vh>
    <Div100vh as="p">
        <span>Child</span>
    </Div100vh>
</>;
