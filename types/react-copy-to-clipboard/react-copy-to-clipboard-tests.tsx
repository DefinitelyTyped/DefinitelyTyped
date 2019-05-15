import * as React from "react";
import CopyToClipboard = require("react-copy-to-clipboard");

export class Test extends React.Component {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}
            onCopy={() => {}}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        );
    }
}
