import * as React from "react";
import Highlight from "react-highlight.js";

export const _ = () => <>
    <Highlight language="javascript" />
    <Highlight language="typescript">
        `console.log("Hello, world!");`
    </Highlight>
    <Highlight language="javascript" className="typescript" />
    <Highlight language="javascript" className="typescript">
        `console.log("Hello, world!");`
    </Highlight>
    <Highlight language="javascript" style={{ color: "red" }} />
    <Highlight language="javascript" style={{ color: "red"}}>
        `console.log("Hello, world!");`
    </Highlight>
</>;
