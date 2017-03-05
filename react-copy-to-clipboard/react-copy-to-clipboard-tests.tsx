
import * as React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export class Test extends React.Component<any, any> {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}
            onCopy={() => this.setState({copied: true})}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        );
    }
}
