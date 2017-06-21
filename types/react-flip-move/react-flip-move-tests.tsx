import * as React from "react";
import * as FlipMove from "react-flip-move";

class DefaultTest extends React.Component {
    render() {
        return <FlipMove />;
    }
}

class PresetTest extends React.Component {
    render() {
        return (
            <FlipMove
                appearAnimation="fade"
                enterAnimation="accordionHorizontal"
                leaveAnimation="accordionVertical"
            />
        );
    }
}

class CustomAnimationTest extends React.Component {
    render() {
        const enterAnimation: FlipMove.Animation = {
            from: { opacity: "0" },
            to: { opacity: "1" }
        };

        const leaveAnimation: FlipMove.Animation = {
            from: { opacity: "1" },
            to: { opacity: "0" }
        };

        return (
            <FlipMove
                enterAnimation={enterAnimation}
                appearAnimation={enterAnimation}
                leaveAnimation={leaveAnimation}
            />
        );
    }
}

class FlipMoveTest extends React.Component {
    onStart = (childElement: React.ReactElement<any>, domNode: HTMLElement) => {};

    onFinish = (childElement: React.ReactElement<any>, domNode: HTMLElement) => {};

    onStartAll = (childElements: Array<React.ReactElement<any>>, domNodes: HTMLElement[]) => {};

    onFinishAll = (childElements: Array<React.ReactElement<any>>, domNodes: HTMLElement[]) => {};

    render() {
        return (
            <FlipMove
                delay={0}
                staggerDelayBy={20}
                duration={200}
                staggerDurationBy={20}
                maintainContainerHeight
                disableAllAnimations={false}
                easing="cubic-bezier(1, 0, 0, 1)"
                onStart={this.onStart}
                onFinish={this.onFinish}
                onStartAll={this.onStartAll}
                onFinishAll={this.onFinishAll}
            />
        );
    }
}
