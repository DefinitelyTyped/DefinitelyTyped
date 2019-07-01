import * as React from "react";

import { AutoAffix, Overlay, RootCloseWrapper } from "react-overlays";
import { OverlayRenderProps } from "react-overlays/lib/Overlay";

import { OverlayFade } from "./react-overlays-tests-transition";

class TestAffix extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <AutoAffix viewportOffsetTop={15} container={this}>
                    <div>Test</div>
                </AutoAffix>
            </div>
        );
    }
}

function renderOverlayContent({ props, arrowProps }: OverlayRenderProps) {
    return (
        <div ref={props.ref} {...props}>
            <div ref={arrowProps.ref}>
                Popover content
            </div>
        </div>
    );
}

class TestOverlay extends React.Component<{}, { open: boolean }> {
    target: HTMLElement | null = null;
    state = { open: false };

    render(): JSX.Element {
        const { open } = this.state;

        return (
            <div>
                <button
                    type="button"
                    ref={ref => (this.target = ref)}
                    onClick={() => this.setState({ open: !open })}
                >
                    Click me
                </button>

                <Overlay
                    show={open}
                    rootClose={true}
                    target={() => this.target}
                    transition={OverlayFade}
                    onHide={() => this.setState({ open: false })}
                    placement="bottom"
                >
                    {renderOverlayContent}
                </Overlay>
            </div>
        );
    }
}

class TestRootCloseWrapper extends React.Component {
    handleRootClose = () => {};
    render() {
        return (
            <RootCloseWrapper
                onRootClose={this.handleRootClose}
                disabled={false}
                event="click"
            >
                <div>Test</div>
            </RootCloseWrapper>
        );
    }
}
