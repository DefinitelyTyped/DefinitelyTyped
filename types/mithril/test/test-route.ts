import { Vnode, Component, Comp, ClassComponent, FactoryComponent, RouteResolver } from 'mithril';
import h = require('mithril/hyperscript');
import route = require('mithril/route');

const component1 = {
	view() {
		return h('h1', 'Test');
	}
};

const component2: Component<{title: string}> = {
	view({attrs: {title}}) {
		return h('h1', title);
	}
};

interface Attrs {
	id: string;
}

interface State {
	text: string;
}

// Test various component types with router
const component3: Comp<Attrs, State> = {
	text: "Uninitialized",
	oninit({state}) {
		state.text = "Initialized";
	},
	view({attrs}) {
		return h('p', 'id: ' + attrs.id);
	}
};

class Component4 implements ClassComponent<Attrs> {
	view({attrs}: Vnode<Attrs>) {
		return h('p', 'id: ' + attrs.id);
	}
}

const component5: FactoryComponent<Attrs> = () => {
	return {
		view({attrs}) {
			return h('p', 'id: ' + attrs.id);
		}
	};
};

interface RRState {
	message: string;
}

// Stateful RouteResolver example using Attrs type and this context
const routeResolver: RouteResolver<Attrs, RRState> & RRState = {
	message: "",
	onmatch(attrs, path) {
		this.message = "Match";
		const id: string = attrs.id;
		return component3;
	},
	render(vnode) {
		this.message = "Render";
		vnode.key = vnode.attrs.id;
		return vnode;
	}
};

route(document.body, '/', {
	'/': component1,
	'/test1': {
		onmatch(args, path) {
			return component1;
		}
	},
	'/test2': {
		render(vnode) {
			return h(component1);
		}
	},
	test3: {
		onmatch(args, path) {
			return component2;
		},
		render(vnode) {
			return ['abc', 123, null, h(component2), ['nested', h('p', 123)]];
		}
	},
	test4: {
		onmatch(args, path) {
			// Must provide a Promise type if we want type checking
			return new Promise<Component<{title: string}, {}>>((resolve, reject) => {
				resolve(component2);
			});
		}
	},
	'test5/:id': routeResolver,
	test6: {
		onmatch(args, path) {
			// Can return ClassComponent from onmatch
			return Component4;
		}
	},
	test7: {
		onmatch(args, path) {
			// Can return FactoryComponent from onmatch
			return component5;
		}
	},
	// Can use other component types for routes
	test8: Component4,
	test9: component5
});

route.prefix('/app');
route.set('/test1');

route.set('/test/:id', {id: 1});

route.set('/test2', undefined, {
	replace: true,
	state: {abc: 123},
	title: "Title"
});

const path: string = route.get();

const fn = route.link(h('div', 'test'));
