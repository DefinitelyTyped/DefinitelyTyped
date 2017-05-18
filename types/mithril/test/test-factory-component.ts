import * as m from 'mithril';
import {Component, FactoryComponent, Vnode} from 'mithril';

///////////////////////////////////////////////////////////
// 0.
// Simplest component example - no attrs or state.
//
function comp0() {
	return {
		view() {
			return m('span', "Test");
		}
	};
}

// Mount the component
m.mount(document.getElementById('comp0')!, comp0);

// Unmount the component
m.mount(document.getElementById('comp0')!, null);

///////////////////////////////////////////////////////////
// 1.
// Simple example. Vnode type for component methods is inferred.
//
function comp1() {
	return {
		oncreate({dom}) {
			// vnode.dom type inferred
		},
		view(vnode) {
			return m('span', "Test");
		}
	} as Component<{}, {}>;
}

///////////////////////////////////////////////////////////
// 2.
// Component with attrs type. Different type annotation
// style to infer factory vnode type.
//
interface Comp2Attrs {
	title: string;
	description: string;
}

const comp2: FactoryComponent<Comp2Attrs> = vnode => ({ // vnode is inferred
	view({attrs: {title, description}}) { // Comp2Attrs type is inferred
		return [m('h2', title), m('p', description)];
	}
});

///////////////////////////////////////////////////////////
// 3.
// Declares attrs type inline.
// Uses comp2 with typed attrs and makes use of `onremove`
// lifecycle method.
//
const comp3: FactoryComponent<{pageHead: string}> = () => ({
	oncreate({dom}) {
		// Can do stuff with dom
	},
	view({attrs}) {
		return m('.page',
			m('h1', attrs.pageHead),
			m(comp2,
				{
					// attrs is type checked - nice!
					title: "A Title",
					description: "Some descriptive text.",
					onremove(vnode) {
						console.log("comp2 was removed");
					},
				}
			),
			// Test other hyperscript parameter variations
			m(comp1, m(comp1)),
			m('br')
		);
	}
});

///////////////////////////////////////////////////////////
// 4.
// Stateful component using closure method & var
// to hold state.
//
interface Comp4Attrs {
	name: string;
}

function comp4(): Component<Comp4Attrs, {}> {
	let count = 0;

	function add(num: number) {
		count += num;
	}

	return {
		oninit() {
			count = 0;
		},
		view({attrs}) {
			return [
				m('h1', `This ${attrs.name} has been clicked ${count} times`),
				m('button',
					{
						onclick: () => add(1)
					},
					"Click me"
				)
			];
		}
	};
}

///////////////////////////////////////////////////////////
// 5.
// Stateful component (Equivalent to Comp4 example.)
// Uses vnode.state instead of closure.
//
interface Comp5State {
	count: number;
	add(num: number): void;
}

function comp5(): Component<Comp4Attrs, Comp5State> {
	return {
		oninit({state}) {
			state.count = 0;
			state.add = num => { state.count += num; };
		},
		view({attrs, state}) {
			return [
				m('h1', `This ${attrs.name} has been clicked ${state.count} times`),
				m('button',
					{
						onclick() { state.add(1); }
					},
					"Click me"
				)
			];
		}
	};
}

///////////////////////////////////////////////////////////
//
// Test that all are mountable components
//
m.route(document.body, '/', {
	'/comp0': comp0,
	'/comp1': comp1,
	'/comp2': comp2,
	'/comp3': comp3,
	'/comp4': comp4,
	'/comp5': comp5
});

///////////////////////////////////////////////////////////
//
// Concise module example with default export
//
interface Attrs {
	name: string;
}

export default (): Component<Attrs, {}> => {
	let count = 0;
	return {
		view({attrs}) {
			return m('span', `name: ${attrs.name}, count: ${count}`);
		}
	};
};
