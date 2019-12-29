// Test global mithril types

const comp: m.Component = {
    view() {
        return m('span', 'Test');
    },
};

m.mount(document.getElementById('comp')!, comp)

const vnode = m('div', 'Test')

const s: m.Stream<number> = m.stream(1)

const qstr = m.buildQueryString({ a: 1, b: 'abc' });
const params = m.parseQueryString(qstr);
const pstr = m.buildPathname('/api/user/:id', { id: 1 });
const parts = m.parsePathname(pstr);

m.redraw();
m.redraw.sync();

m(m.route.Link, { selector: 'a', href: '/page1' }, 'Click this');
