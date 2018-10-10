import { trust, parseQueryString, buildQueryString } from 'mithril';
import h = require('mithril/hyperscript');
import { render } from 'mithril/render';
import { redraw } from 'mithril/redraw';
import withAttr = require('mithril/withAttr');

const vnode = trust('Some <strong>bold</strong> text.');

const params = parseQueryString('?id=123');

const qstr = buildQueryString({id: 123});

render(document.body, 'Hello');
render(document.body, h('h1', 'Test'));
render(document.body, [
	h('h1', 'Test'), "abc", null, 123, false, h('p', 'Vnode array'),
	['a', 123, undefined, h('div', 'Nested')]
]);

redraw();

const handler = withAttr("value", (value) => {});
handler({currentTarget: {value: 10}});
