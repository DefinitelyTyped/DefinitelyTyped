import * as m from 'mithril';

///////////////////////////////////////////////////////////
// 0.
// Simplest component example - no attrs or state.
//
class Comp0 implements m.ClassComponent {
	constructor(vnode: m.CVnode) {
	}
	view() {
		return m('span', "Test");
	}
}

// Mount the component
m.mount(document.getElementById('comp0')!, Comp0);

// Unmount the component
m.mount(document.getElementById('comp0')!, null);

///////////////////////////////////////////////////////////
// 1.
// Simple example with lifecycle methods.
//
class Comp1 implements m.ClassComponent {
	oninit(vnode: m.CVnode) {
	}
	oncreate({dom}: m.CVnodeDOM) {
	}
	view(vnode: m.CVnode) {
		return m('span', "Test");
	}
}

///////////////////////////////////////////////////////////
// 2.
// Component with attrs type
//
interface Comp2Attrs {
	title: string;
	description: string;
}

class Comp2 implements m.ClassComponent<Comp2Attrs> {
	view({attrs: {title, description}}: m.CVnode<Comp2Attrs>) {
		return [m('h2', title), m('p', description)];
	}
}

///////////////////////////////////////////////////////////
// 3.
// Declares attrs type inline.
// Uses comp2 with typed attrs and makes use of `onremove`
// lifecycle method.
//
class Comp3 implements m.ClassComponent<{pageHead: string}> {
	oncreate({dom}: m.CVnodeDOM<{pageHead: string}>) {
		// Can do stuff with dom
	}
	view({attrs}: m.CVnode<{pageHead: string}>) {
		return m('.page',
			m('h1', attrs.pageHead),
			m(Comp2,
				{
					// attrs is type checked - nice!
					title: "A Title",
					description: "Some descriptive text.",
					onremove(vnode) {
						// Vnode type is inferred
						console.log("comp2 was removed");
					},
				}
			),
			// Test other hyperscript parameter variations
			m(Comp1, m(Comp1)),
			m('br')
		);
	}
}

///////////////////////////////////////////////////////////
// 4.
// Typed attrs, component with state, methods
//
interface Comp4Attrs {
	name: string;
}

class Comp4 implements m.ClassComponent<Comp4Attrs> {
	count: number;
	constructor(vnode: m.CVnode<Comp4Attrs>) {
		this.count = 0;
	}
	add(num: number) {
		this.count += num;
	}
	view(vnode: m.Vnode<Comp4Attrs, Comp4>) {
		return [
			m('h1', `This ${vnode.attrs.name} has been clicked ${this.count} times`),
			m('button',
				{
					// Can access 'this' via vnode.state
					onclick: () => vnode.state.add(1)
				},
			"Click me")
		];
	}
}

///////////////////////////////////////////////////////////
//
// Test that all are mountable components
//
m.route(document.body, '/', {
	'/comp0': Comp0,
	'/comp1': Comp1,
	'/comp2': Comp2,
	'/comp3': Comp3,
	'/comp4': Comp4
});

///////////////////////////////////////////////////////////
//
// Concise module example with default export
//
export interface Attrs {
	name: string;
}

export default class MyComponent implements m.ClassComponent<Attrs> {
	count = 0;
	view({attrs}: m.CVnode<Attrs>) {
		return m('span', `name: ${attrs.name}, count: ${this.count}`);
	}
}
