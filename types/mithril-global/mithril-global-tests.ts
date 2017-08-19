// Test global mithril types

const comp = {
	view() {
		return m('span', "Test")
	}
} as m.Comp<{},{}>

m.mount(document.getElementById('comp')!, comp)

const vnode = m('div', 'Test')

const s: m.Stream<number> = m.stream(1)
