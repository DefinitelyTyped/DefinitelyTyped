import * as React from 'react';
import SwipeableViews,
{
    OnChangeIndexCallback,
    OnSwitchingCallback,
    OnSwitchingCallbackTypeDescriptor,
    OnTransitionEndCallback,
    SpringConfig
} from 'react-swipeable-views';

const onChangeIndex: OnChangeIndexCallback = (indexNew: number, indexLatest: number) => {
    console.log(`New index: ${indexNew}, latest index ${indexLatest}`);
};

const onSwitching: OnSwitchingCallback = (index: number, type: OnSwitchingCallbackTypeDescriptor) => {
    console.log(`Switching to ${index} with transition type "${type}"`);
};

const onTransitionEnd: OnTransitionEndCallback = () => {
    console.log("Transition end.");
};

const style: React.CSSProperties = {
    height: 300
};

const springConfig: SpringConfig = {
    duration: "0.5s",
    easeFunction: "cubic-bezier(0.1, 0.35, 0.2, 1)",
    delay: "0.5s",
};

React.createElement(SwipeableViews, {
    containerStyle: style,
    disabled: false,
    index: 0,
    onChangeIndex,
    onSwitching,
    resistance: false,
    slideStyle: style,
    style,
    threshold: 100,
    className: "swipable-view",
    title: "Carousel",
    onTransitionEnd,
    axis: "x-reverse",
    springConfig,
    disableLazyLoading: false
});

React.createElement(SwipeableViews, {});
