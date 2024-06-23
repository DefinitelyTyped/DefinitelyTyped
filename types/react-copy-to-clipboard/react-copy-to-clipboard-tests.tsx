import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function OnlyRequiredProps() {
    return (
        <CopyToClipboard text={"Hello World"}>
            <button>Copy to clipboard with button</button>
        </CopyToClipboard>
    );
}

function AllProps() {
    return (
        <CopyToClipboard
            text={"Hello World"}
            onCopy={() => {}}
            options={{ debug: true, message: "message", format: "text/plain" }}
        >
            <span>Copy to clipboard with span</span>
        </CopyToClipboard>
    );
}
