import {Component, Comp, RouteResolver} from 'mithril';
import * as h from 'mithril/hyperscript';
import * as route from 'mithril/route';

const component1 = {
	view() {
		return h('h1', 'Test');
	}
};

const component2 = {
	view({attrs: {title}}) {
		return h('h1', title);
	}
} as Component<{title: string}, {}>;

interface Attrs {
	id: string;
}

interface State {
	text: string;
}

const component3: Comp<Attrs, State> = {
	text: "Uninitialized",
	oninit({state}) {
		state.text = "Initialized";
	},
	view({attrs}) {
		return h('p', 'id: ' + attrs.id);
	}
};

// RouteResolver example using Attrs type and this context
const routeResolver: RouteResolver<Attrs, State> & {message: string} = {
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
	'test5/:id': routeResolver
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
