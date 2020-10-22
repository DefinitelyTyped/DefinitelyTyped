import * as m from 'mithril';

const component1 = {
    view() {
        return m('h1', 'Test');
    },
};

const component2: m.Component<{ title: string }> = {
    view({ attrs: { title } }) {
        return m('h1', title);
    },
};

interface Attrs {
    id: string;
}

interface State {
    text: string;
}

// Test various component types with router
const component3: m.Comp<Attrs, State> = {
    text: 'Uninitialized',
    oninit({ state }) {
        state.text = 'Initialized';
    },
    view({ attrs }) {
        return m('p', 'id: ' + attrs.id);
    },
};

class Component4 implements m.ClassComponent<Attrs> {
    view({ attrs }: m.Vnode<Attrs>) {
        return m('p', 'id: ' + attrs.id);
    }
}

const component5: m.FactoryComponent<Attrs> = () => {
    return {
        view({ attrs }) {
            return m('p', 'id: ' + attrs.id);
        },
    };
};

interface RRState {
    message: string;
}

// Stateful RouteResolver example using Attrs type and this context
const routeResolver: m.RouteResolver<Attrs, RRState> & RRState = {
    message: '',
    onmatch(attrs, path) {
        this.message = 'Match';
        const id: string = attrs.id;
        return component3;
    },
    render(vnode) {
        this.message = 'Render';
        vnode.key = vnode.attrs.id;
        return vnode;
    },
};

// Stateful RouteResolver example using Attrs type and this context
const routeResolverWithRouteParam: m.RouteResolver<Attrs, RRState> & RRState = {
    message: '',
    onmatch(attrs, path, route) {
        this.message = route;
        const id: string = attrs.id;
        return component3;
    },
    render(vnode) {
        this.message = 'Render';
        vnode.key = vnode.attrs.id;
        return vnode;
    },
};

m.route(document.body, '/', {
    '/': component1,
    '/test1': {
        onmatch(args, path) {
            return component1;
        },
    },
    '/test2': {
        render(vnode) {
            return m(component1);
        },
    },
    test3: {
        onmatch(args, path) {
            return component2;
        },
        render(vnode) {
            return ['abc', 123, null, m(component2), ['nested', m('p', 123)]];
        },
    },
    test4: {
        onmatch(args, path) {
            // Must provide a Promise type if we want type checking
            return new Promise<m.Component<{ title: string }>>((resolve, reject) => {
                resolve(component2);
            });
        },
    },
    'test5/:id': routeResolver,
    test6: {
        onmatch(args, path) {
            // Can return ClassComponent from onmatch
            return Component4;
        },
    },
    test7: {
        onmatch(args, path) {
            // Can return FactoryComponent from onmatch
            return component5;
        },
    },
    // Can use other component types for routes
    test8: Component4,
    test9: component5,
});

m.route.prefix = '/app';
m.route.set('/test1');

m.route.set('/test/:id', { id: 1 });

m.route.set('/test2', undefined, {
    replace: true,
    state: { abc: 123 },
    title: 'Title',
});

const path: string = m.route.get();

const ex1 = m(m.route.Link, { selector: 'a', href: '/url' });

const ex2 = m(m.route.Link, {
    selector: 'a',
    href: '/url',
    options: {
        replace: true,
        state: { abc: 123 },
        title: 'Title',
    },
});
