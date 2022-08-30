import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize, bindKeyboard, SlideRenderProps } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

function autoPlayTest() {
    // @ts-expect-error
    <AutoPlaySwipeableViews />;
    <AutoPlaySwipeableViews
        index={1}
        onChangeIndex={(index: number) => {
            // $ExpectType number
            index;
        }}
    />;
}

function virtualizeTest() {
    // @ts-expect-error
    <VirtualizeSwipeableViews />;
    <VirtualizeSwipeableViews
        index={1}
        onChangeIndex={(index: number) => {
            index;
        }}
        slideRenderer={(renderer: SlideRenderProps) => {
            return <div>Slide {renderer.index}</div>;
        }}
    />;
}

function bindKeyboardTest() {
    // @ts-expect-error
    <BindKeyboardSwipeableViews />;
    <BindKeyboardSwipeableViews
        index={1}
        onChangeIndex={(index: number) => {
            index;
        }}
    />;
}
