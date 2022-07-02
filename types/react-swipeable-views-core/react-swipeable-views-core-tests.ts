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

// @ts-expect-error
mod();
// @ts-expect-error
mod(0);
mod(0, 4); // $ExpectType number
mod(1, 4); // $ExpectType number
mod(-1, 4); // $ExpectType number

// @ts-expect-error
getDisplaySameSlide();
// @ts-expect-error
getDisplaySameSlide(oldProps);
getDisplaySameSlide(oldProps, nextProps); // $ExpectType boolean

// @ts-expect-error
checkIndexBounds();
checkIndexBounds(oldProps); // $ExpectType void

// @ts-expect-error
checkIndexBounds();
computeIndex({
    children: oldProps.children,
    resistance: oldProps.resistance,
    startIndex: 0,
    startX: 50,
    pageX: 10,
    viewLength: 2,
}); //  $ExpectType { index: number; startX: number; }
