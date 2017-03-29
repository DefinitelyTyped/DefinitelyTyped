import * as m from 'mithril'

const vnode = m.trust('Some <strong>bold</strong> text.')

const params = m.parseQueryString('?id=123')

const qstr = m.buildQueryString({id: 123})

m.render(document.body, 'Hello')
m.render(document.body, m('h1', 'Test'))
m.render(document.body, [
	m('h1', 'Test'), "abc", null, 123, false, m('p', 'Vnode array'),
	['a', 123, undefined, m('div', 'Nested')]
])

m.redraw()
