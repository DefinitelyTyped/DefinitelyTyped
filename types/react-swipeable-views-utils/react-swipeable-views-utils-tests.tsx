import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function autoPlayTest() {
    // $ExpectError
    <AutoPlaySwipeableViews />;
    <AutoPlaySwipeableViews
        index={1}
        onChangeIndex={index => {
            // $ExpectType number
            index;
        }}
    />;
}
