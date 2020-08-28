import * as React from "react";
import CopyToClipboard = require("react-copy-to-clipboard");

export class OnlyRequiredProps extends React.Component {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}>
              <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        );
    }
}

export class AllProps extends React.Component {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}
                onCopy={() => {}}
                options={{debug: true, message: "message", format: "text/plain"}}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        );
    }
}
