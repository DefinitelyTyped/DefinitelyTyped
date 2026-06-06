import * as React from "react";
import NodeResolver from "react-node-resolver";

interface Props {
    readonly children: React.ReactElement;
}

export default class ScrollSpy extends React.Component<Props> {
    nav: HTMLElement | undefined;
    getElements: React.RefCallback<HTMLElement> = ref => {
        if (!ref) return;
        this.nav = ref;
    };
    render() {
        return (
            <NodeResolver innerRef={this.getElements}>
                {this.props.children}
            </NodeResolver>
        );
    }
}
