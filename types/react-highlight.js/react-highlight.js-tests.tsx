import * as React from "react";
import Highlight from "react-highlight.js";

export const _ = () => <>
    <Highlight language="javascript" />
    <Highlight language="typescript">
        `console.log("Hello, world!");`
    </Highlight>
    <Highlight className="typescript" />
    <Highlight className="typescript">
        `console.log("Hello, world!");`
    </Highlight>
    <Highlight style={{ color: "red" }} />
    <Highlight style={{ color: "red"}}>
        `console.log("Hello, world!");`
    </Highlight>
</>;
