// Test global mithril types

const comp: m.Comp<{},{}> = {
	view() {
		return m('span', "Test")
	}
};

m.mount(document.getElementById('comp')!, comp)

const vnode = m('div', 'Test')

const s: m.Stream<number> = m.stream(1)
