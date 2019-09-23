import * as React from 'react';
import GestureRecognizer, { GestureRecognizerConfig, swipeDirections } from 'react-native-swipe-gestures';

const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

const config: GestureRecognizerConfig = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 5,
};

class Example extends React.Component {
    render() {
        return (
            <GestureRecognizer
                config={config}
                onSwipe={(direction, state) => {}}
                onSwipeUp={state => {}}
                onSwipeDown={state => {}}
                onSwipeLeft={state => {}}
                onSwipeRight={state => {}}
            />
        );
    }
}
