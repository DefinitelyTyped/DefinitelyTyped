// Example from deku/examples/basic
(function (){
	const {h, createApp} = deku

	function view(state = { count: 0 }, dispatch: Function){
		return (
			h('div', {}, [
				h('div', {}, 'Counter: ' + state.count),
				h('button', {onClick: increment(dispatch)}, 'Increment'),
				h('button', {onClick: decrement(dispatch)}, 'Decrement')
			])
		)
	}

	function increment(dispatch: Function){
		return () => dispatch({
			type: 'INCREMENT'
		})
	}

	function decrement(dispatch: Function){
		return () => dispatch({
			type: 'DECREMENT'
		})
	}

	let render = createApp(document.body)

	function main(state: any){
		let vnode = view(state, (action: any) => main({ count: 0 }))

		render(vnode)
	}

	main({ count: 0 })
})();

// Example from deku/docs/api/create-app
(function (){
	const {createApp, element} = deku

	const App = ({ props = { size: 'medium' } }) => {
		return element('div', { class: `size-${ props.size }` })
	}

	const render = createApp(document.body)

	render(element(App, { size: 'small' }))

	render(element(App, { size: 'large' }))
})();

// Example from deku/docs/api/string
(function (){
	const { h } = deku

	const html = deku.string.render(h('div', {}, [
		h('header'),
		h('sidebar'),
		h('app'),
	]))
})();

// Example from deku/docs/api/element
(function (){
	const { element } = deku

	// Native elements
	element('div', { class: 'greeting' }, [
		element('span', {}, ['Hello'])
	])

	// Components
	let App = {
		render: ({ props = { name: '' } }) => element('div', {}, `Hello ${ props.name }!`)
	}

	element(App, { name: 'Tom' })
})();

// deku.createApp
(function (){
	const { createApp, element } = deku

	let render: Function = createApp(document.body)

	render(element('div'))

	render = createApp(document.body, (action: any) => {
		render(element('div'))
	})

	render(element('div'))
})();

// deku.dom
(function (){
	const { dom, element } = deku

	let el: HTMLElement = dom.create(element('div'), '0.0', ()=>{}, {})

	const update: (DOMElement: HTMLElement, action: any) => HTMLElement = dom.update(()=>{}, {})

	el = update(el, {})
})();

// deku.string
(function (){
	const { element } = deku

	let html: string = deku.string.render(element('div'))

	html = deku.string.render(element('div'), {})
})();

// deku.element
(function (){
	const { element } = deku

	let v: deku.VirtualElement = element('div')

	v = element('div', {})

	v = element('div', {}, [])

	v = element('div', {}, ['foo', 0, 'bar'])

	v = element('div', {}, 'foo')

	v = element('div', {}, 0)

	v = element('div', {}, 'foo', 'bar')

	let Component = {
		render({}){
			return element('div')
		}
	}

	v = element(Component)

	v = element(Component, {})

	v = element(Component, {}, [])
})();

// deku.diff
(function (){
	const { diff, element } = deku

	const { Actions } = diff

	let diffs: any[] = diff.diffNode(element('div'), element('span'))

	let actions: deku.diff.Actions[] = [
		Actions.setAttribute('class', 'foo', 'bar'),
		Actions.removeAttribute('foo', {}),
		Actions.insertChild({}, 0, '0.0'),
		Actions.removeChild(0),
		Actions.updateChild(0, []),
		Actions.updateChildren([]),
		Actions.insertBefore(0),
		Actions.replaceNode({}, {}, '0.0'),
		Actions.removeNode({}),
		Actions.sameNode(),
		Actions.updateThunk({}, {}, '0.0')
	]

	actions.forEach(action => {
		Actions.case({
			setAttribute: (name: string, value: any, previousValue: any) => {
			},
			_: () => {
			}
		}, action)
	})
})();

// deku.vnode
(function (){
	const { vnode, element } = deku

	let v: deku.VirtualElement = vnode.create('div')

	v = vnode.createTextElement('foo')

	const Component = {
		render({}){
			return element('div')
		}
	}

	v = vnode.createThunkElement(Component.render, '', Component, [], {})

	v = vnode.createEmptyElement()

	let b: boolean = vnode.isThunk(v)

	b = vnode.isText(v)

	b = vnode.isEmpty(v)

	b = vnode.isSameThunk(v, v)

	let path: string = vnode.createPath('0', '1', '2', '3')

	path = vnode.createPath(0, 1, 2, 3)
})();
