import Moon = require("moonjs");

let app = new Moon({
    data: {
        count: 0
    },
    methods: {
        increment() {
            this.set("count", this.get("count") + 1);
        }
    }
});

let count: number = app.get("count");
app.get("increment")();
app.callMethod("increment");

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

var renderApp = new Moon({
    el: "#render",
    render: (h) => {
        return h("div", { attrs: { id: "render" } }, { shouldRender: true, eventListeners: {} }, [h("#text", { shouldRender: true, eventListeners: {} }, this.get("msg"))]);
    },
    data: {
        msg: "Hello Moon!"
    }
});

Moon.component("functional-component", {
    functional: true,
    props: ["someprop"],
    render: (h, ctx) => {
        return h("h1", {}, { shouldRender: true, eventListeners: {} }, [h("#text", { shouldRender: true, eventListeners: {} }, ctx.data.someprop)]);
    }
});

// Component instances should be subtypes of Moon.
var componentConstructor = Moon.component('my-component', {
    props: ['componentprop', 'otherprop'],
    template: "<div>{{componentprop}}</div>"
});

var moon: Moon<object> = new componentConstructor();
componentConstructor instanceof Moon;

Moon.config.silent = true;
Moon.config.keycodes({
    m: 77,
});
