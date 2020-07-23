import ProgressBar = require('progressbar.js');
import { utils } from 'progressbar.js';

// path
const svgPath = document.getElementById('heart-path');
const path = new ProgressBar.Path(svgPath, {
    duration: 300,
});
const heart = document.getElementById('heart')!;
heart.addEventListener('load', () => {
    const path = new ProgressBar.Path(document.querySelector('#heart-path'), {
        duration: 300,
    });
});
path.animate(
    0.3,
    {
        duration: 800,
    },
    () => {
        console.log('Animation has finished');
    },
);
path.set(0.2);
path.stop();
path.value(); // $ExpectType number
// circle
const circle = new ProgressBar.Circle('#example-percent-container', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    text: {
        value: '0',
    },
});
// line
const bar = new ProgressBar.Line('#container', {
    step: (state, bar, attachment) => {
        bar.path!.setAttribute('stroke', state.color);
    },
});

const opts = {
    from: { color: '#000 ' },
    to: { color: '#888' },
};
bar.animate(0.5, opts);

ProgressBar.utils.capitalize('capitalize'); // $ExpectType string
ProgressBar.utils.extend({}, {}, true); // $ExpectcType {}
ProgressBar.utils.floatEquals(0.2, 0.5); // $ExpectType boolean
// $ExpectType void
ProgressBar.utils.forEachObject({}, (val, key) => {
    console.log(`${key}: ${val}`);
});
ProgressBar.utils.isArray([]); //  $ExpectType boolean
ProgressBar.utils.isFunction(() => {}); // $ExpectType boolean
utils.isObject({}); // $ExpectType boolean
utils.isString('string'); // $ExpectType boolean
utils.removeChildren(bar.path); // $ExpectType void
utils.render('Hello {message}!', { message: 'world' }); // $ExpectType string
utils.setStyle(bar.path, 'color', '#FCB03C'); // $ExpectType void
// $ExpectType void
utils.setStyles(bar.path, {
    color: '#FCB03C',
});
