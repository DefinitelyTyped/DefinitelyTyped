import * as React from 'react';
import { SwipeableViewsProps } from 'react-swipeable-views';
import { checkIndexBounds, computeIndex, constant, getDisplaySameSlide, mod } from 'react-swipeable-views-core';

const oldProps: SwipeableViewsProps = {
    index: 1,
    children: [React.createElement('div'), React.createElement('div')],
};

const nextProps: SwipeableViewsProps = {
    index: 2,
    children: [React.createElement('div'), React.createElement('div')],
};

// $ExpectType number
constant.RESISTANCE_COEF;
// $ExpectType number
constant.UNCERTAINTY_THRESHOLD;

mod(); // $ExpectError
mod(0); // $ExpectError
mod(0, 4); // $ExpectType number
mod(1, 4); // $ExpectType number
mod(-1, 4); // $ExpectType number

getDisplaySameSlide(); // $ExpectError
getDisplaySameSlide(oldProps); // $ExpectError
getDisplaySameSlide(oldProps, nextProps); // $ExpectType boolean

checkIndexBounds(); // $ExpectError
checkIndexBounds(oldProps); // $ExpectType void

checkIndexBounds(); // $ExpectError
computeIndex({
    children: oldProps.children,
    resistance: oldProps.resistance,
    startIndex: 0,
    startX: 50,
    pageX: 10,
    viewLength: 2,
}); //  $ExpectType { index: number; startX: number; }
