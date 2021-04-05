import * as m from 'mithril';

import { Comp, Component } from 'mithril';

///////////////////////////////////////////////////////////
// 0.
// Simplest component example - no attrs or state.
//
const comp0 = {
    view() {
        return m('span', 'Test');
    },
};

// Mount the component
m.mount(document.getElementById('comp0')!, comp0);

// Unmount the component
m.mount(document.getElementById('comp0')!, null);

///////////////////////////////////////////////////////////
// 1.
// Simple example. Vnode type for component methods is inferred.
//
const comp1: Component = {
    oncreate({ dom }) {
        // vnode.dom type inferred
    },
    view(vnode) {
        return m('span', 'Test');
    },
};

///////////////////////////////////////////////////////////
// 2.
// Component with attrs
//
interface Comp2Attrs {
    title: string;
    description: string;
}

const comp2: Component<Comp2Attrs> = {
    view({ attrs: { title, description } }) {
        // Comp2Attrs type is inferred
        return [m('h2', title), m('p', description)];
    },
};

// Correct use
m(comp2, { title: '', description: '' });

// Correct use with lifecycle method
m(comp2, { title: '', description: '', oncreate: v => `${v.attrs.title}\n${v.attrs.description}` });

// Properties missing
// $ExpectError
m(comp2, {});

// Property 'description' is missing in type '{ title: string; }'.
// $ExpectError
m(comp2, { title: '' });

// Property 'title' is missing in type '{ description: string; }'.
// $ExpectError
m(comp2, { description: '' });

// Type 'boolean' is not assignable to type 'string'.
// $ExpectError
m(comp2, { title: '', description: true });

// Object literal may only specify known properties, and 'foo' does not exist in type 'Comp2Attrs & Lifecycle<Comp2Attrs, {}> & { key?: string | number | undefined; }'.
// $ExpectError
m(comp2, { title: '', description: '', foo: '' });

///////////////////////////////////////////////////////////
// 3.
// Declares attrs type inline.
// Uses comp2 with typed attrs and makes use of `onremove`
// lifecycle method.
//
const comp3: Component<{ pageHead: string }> = {
    oncreate({ dom }) {
        // Can do stuff with dom
    },
    view({ attrs }) {
        return m(
            '.page',
            m('h1', attrs.pageHead),
            m(comp2, {
                // attrs is type checked - nice!
                title: 'A Title',
                description: 'Some descriptive text.',
                onremove(vnode) {
                    console.log('comp2 was removed');
                },
            }),
            // Test other hyperscript parameter variations
            m(comp1, m(comp1)),
            m('br'),
        );
    },
};

///////////////////////////////////////////////////////////
// 4.
// Typed attrs and state, and `this` type is inferred.
//
interface Comp4Attrs {
    name: string;
}

interface Comp4State {
    count: number;
    add(this: Comp4State, num: number): void;
}

// Either of these two Comp4 defs will work:
type Comp4 = Component<Comp4Attrs, Comp4State> & Comp4State;
// interface Comp4 extends Component<Comp4Attrs,Comp4State>, Comp4State {}

const comp4: Comp4 = {
    count: 0, // <- Must be declared to satisfy Comp4 type which includes Comp4State type
    add(num) {
        // num and this types inferred
        this.count += num;
    },
    oninit() {
        this.count = 0;
    },
    view({ attrs }) {
        return [
            m('h1', `This ${attrs.name} has been clicked ${this.count} times`),
            m(
                'button',
                {
                    // 'this' is typed!
                    onclick: () => this.add(1),
                },
                'Click me',
            ),
        ];
    },
};

///////////////////////////////////////////////////////////
// 5.
// Stateful component (Equivalent to Comp4 example.)
// Avoids the use of `this` completely; state manipulated
// through vnode.state.
//
const comp5: Component<Comp4Attrs, Comp4State> = {
    oninit({ state }) {
        state.count = 0;
        state.add = num => {
            state.count += num;
        };
    },
    view({ attrs, state }) {
        return [
            m('h1', `This ${attrs.name} has been clicked ${state.count} times`),
            m(
                'button',
                {
                    onclick() {
                        state.add(1);
                    },
                },
                'Click me',
            ),
        ];
    },
};

///////////////////////////////////////////////////////////
//
// Concise module example with default export
//
interface Attrs {
    name: string;
}

interface State {
    count: number;
}

// Using the Comp type will apply the State intersection type for us.
const comp: Comp<Attrs, State> = {
    count: 0,
    view({ attrs }) {
        return m('span', `name: ${attrs.name}, count: ${this.count}`);
    },
};
export default comp;

///////////////////////////////////////////////////////////
//
// Bad hook parameter type
//
interface InvalidState1 {
    oncreate(nope: string): string;
}

// Using the Comp type will apply the State intersection type for us.
const invalidComp1: Comp<{}, InvalidState1> = {
    // $ExpectError
    oncreate(nope: string) { return nope; },
    view() {
        return 'test';
    },
};

///////////////////////////////////////////////////////////
//
// Bad hook type
//
interface InvalidState2 {
    oncreate: string;
}

// Using the Comp type will apply the State intersection type for us.
const invalidComp2: Comp<{}, InvalidState2> = {
    // $ExpectError
    oncreate: 'nope',
    view() {
        return 'test';
    },
};
