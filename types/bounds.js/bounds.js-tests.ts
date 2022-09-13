import Bound = require('bounds.js');
import { WatchCallback } from 'bounds.js';

const boundary = Bound();
const image = document.querySelector('img');
const onImgEnter: WatchCallback = ratio => {};
const onImgLeave: WatchCallback = ratio => {};
boundary.watch(image, onImgEnter, onImgLeave);
boundary.check(document.querySelector('.container')); // $ExpectType boolean
boundary.unWatch(image).clear();

Bound({
    root: document.body,
    margins: {
        bottom: 100,
        left: 0,
        right: 0,
        top: 0,
    },
    threshold: 0.5,
    onEmit: actions => {
        if (actions.some(action => action.inside)) {
            console.log('At least one element is inside my boundary');
        }
    },
});

const imgOptions = boundary.watch(image);
imgOptions.onEnter = onImgEnter;
imgOptions.onLeave = onImgLeave;
