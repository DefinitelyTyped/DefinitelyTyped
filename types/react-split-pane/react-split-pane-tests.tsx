import * as React from "react";
import * as SplitPane from "react-split-pane";

class SplitPaneTest extends React.Component<React.Props<{}>> {

    render() {
        return (
            <SplitPane
                allowResize={true}
                className="pane"
                defaultSize={30}
                maxSize={50}
                minSize={20}
                split="vertical"
            >
                <div />
                <div />
            </SplitPane>
        );
    }
}
