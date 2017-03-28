import * as React from "react";
import * as CopyToClipboard from "react-copy-to-clipboard";

export class Test extends React.Component<any, any> {
    render() {
        return (
          <CopyToClipboard text={"Hello World"}
            onCopy={() => {}}>
            <span>Copy to clipboard with span</span>
          </CopyToClipboard>
        );
    }
}
