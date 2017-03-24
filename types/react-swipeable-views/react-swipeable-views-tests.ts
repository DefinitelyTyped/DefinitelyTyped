import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

const onChangeIndex = (indexNew:number, indexLatest:number) => {
    console.log('New index: ' + indexNew + ', latest index' + indexLatest);
};

const onSwitching = (index:number) => {
    console.log('Switching to ' + index);
};

const style:React.CSSProperties = {
    height: 300
};

React.createElement(SwipeableViews, {
    containerStyle: style,
    disabled: false,
    index: 0,
    onChangeIndex: onChangeIndex,
    onSwitching: onSwitching,
    resistance: false,
    slideStyle: style,
    style: style,
    threshold: 100
});


React.createElement(SwipeableViews, {});
