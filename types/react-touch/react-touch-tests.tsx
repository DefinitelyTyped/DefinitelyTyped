import * as React from "react";
import {
    CustomGesture,
    defineHold, defineSwipe, Draggable, DraggableCallbackArgument, DraggableStyle, Holdable, HoldableConfig,
    HoldableProps, HoldConfig, moves, SwipeConfig, Swipeable, SwipeableConfig, SwipeableProps
} from "react-touch";

export class HoldableTest extends React.PureComponent {
    render() {
        const holdConfig: HoldConfig = {};
        const config: HoldableConfig = defineHold(holdConfig);
        const props: HoldableProps = {
            config,
            onHoldComplete() {
                return;
            }
        };
        return <Holdable {...props} />;
    }
}

export class DraggableTest extends React.PureComponent {
    render() {
        const style: DraggableStyle = {};
        return <Draggable style={style} children={this.callback} />;
    }

    private callback = (argument: DraggableCallbackArgument): JSX.Element => {
        return <div />;
    }
}

export class SwipeableTest extends React.PureComponent {
    render() {
        const swipeConfig: SwipeConfig = {};
        const config: SwipeableConfig = defineSwipe(swipeConfig);
        const props: SwipeableProps = {
            config,
            onSwipeLeft: this.swipeHandler,
            onSwipeUp: this.swipeHandler
        };
        return <Swipeable {...props}>
            <div />
        </Swipeable>;
    }

    private swipeHandler = () => {
        return;
    }
}

export class CustomGestureTest extends React.PureComponent {
    private move: moves[] = [moves.UPLEFT, moves.RIGHT, moves.DOWNRIGHT];

    render() {
        return <CustomGesture config={this.move} onGesture={this.handler} />;
    }

    private handler = () => {
        return;
    }
}
