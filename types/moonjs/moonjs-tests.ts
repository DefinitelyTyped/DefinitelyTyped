import Moon = require("moonjs");

const app = new Moon({
    data: {
        count: 0
    },
    methods: {
        increment() {
            const current = this.get("count");
            current; // $ExpectType number
            this.set("count", current + 1);
        }
    }
});

const count = app.get("count");
count;                          // $ExpectType number
app.get("increment")();         // $ExpectType void
app.callMethod("increment");    // $ExpectType any

app.destroy();

new Moon({
    hooks: {
        init: () => {
        },
        mounted: () => {
            // called when element is mounted and the first build has been run
        },
        updated: () => {
            // called every time data is updated
        },
        destroyed: () => {
            // called when it is destroyed, the component might be removed
            // from the DOM
        }
    }
});

new Moon({
    render: (h) => {
        return h("h1", {}, null, "Hello Moon!"); // same as <h1>Hello Moon!</h1>
    }
});

const renderApp = new Moon({
    el: "#render",
    render(h) {
        return h("div", { attrs: { id: "render" } }, { shouldRender: true, eventListeners: {} }, [h("#text", { shouldRender: true, eventListeners: {} }, this.get("msg"))]);
    },
    data: () => ({
        msg: "Hello Moon!"
    }),
});

Moon.component("functional-component", {
    functional: true,
    props: ["someprop"],
    render: (h, ctx) => {
        return h("h1", {}, { shouldRender: true, eventListeners: {} }, [h("#text", { shouldRender: true, eventListeners: {} }, ctx.data.someprop)]);
    }
});

const testHTMLElement = document.createElement("div");
const componentConstructor = Moon.component('my-component', {
    props: ['componentprop', 'otherprop'],
    template: "<div>{{componentprop}}</div>",
    el: testHTMLElement,
    data: () => ({
        foo: 100,
        bar: 200,
    }),
    methods: {
        halfFoo() {
            const currentFoo = this.get('foo');
            currentFoo; // $ExpectType: number
            return currentFoo / 2;
        },
        bothProps(): [any, any] {
            const compProp = this.get('componentprop');
            const otherProp = this.get('otherprop');
            return [compProp, otherProp];
        }
    },
});

// Component instances should be subtypes of Moon.
const componentInstance = new componentConstructor();
componentInstance instanceof Moon;

Moon.config.silent = true;
Moon.config.keycodes({
    m: 77,
});

// 'data' needs to be a function when creating components.
// $ExpectError
Moon.component('broken1', {
    el: testHTMLElement,
    data: {
        foo: 100,
        bar: 200,
    },
});

// Misspelled prop
Moon.component('broken2', {
    props: ['hello'],
    methods: {
        noHallo() {
            // $ExpectError
            this.get('hallo');
        }
    },
});
