import { div } from './preset';

const util = AMap.DomUtil;

// $ExpectType Size
util.getViewport(div);

// $ExpectType Pixel
util.getViewportOffset(div);

// $ExpectType HTMLDivElement
util.create('div');
// $ExpectType HTMLAnchorElement
util.create('a');
// $ExpectType HTMLDivElement
util.create('div', div);
// $ExpectType HTMLDivElement
util.create('div', div, 'className');

// $ExpectType void
util.setClass(div);
// $ExpectType void
util.setClass(div, 'className');

// $ExpectType boolean
util.hasClass(div, 'className');

// $ExpectType void
util.removeClass(div, 'className');

// $ExpectType void
util.setOpacity(div, 1);

// $ExpectType void
util.rotate(div, 10);
// $ExpectType void
util.rotate(div, 10, { x: 10, y: 10 });

const util2: typeof AMap.DomUtil = util.setCss(div, { textAlign: 'left' });
// $ExpectError
util.setCss(div, { textAlign: 10 });

// $ExpectType void
util.empty(div);

// $ExpectType void
util.remove(div);
