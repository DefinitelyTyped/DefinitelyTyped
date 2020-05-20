import { Rivets } from 'rivets';

Rivets.configure({
    // Attribute prefix in templates
    prefix: 'rv',
    // Preload templates with initial data on bind
    preloadData: true,
    // Root sightglass interface for keypaths
    rootInterface: '.',
    // Template delimiters for text bindings
    templateDelimiters: ['[[', ']]'],
    // Augment the event handler of the on-* binder
    handler(target: any, event: any, binding: any) {
        this.call(target, event, binding.view.models);
    }
});

const t = { test: ["hello", "one", "two"] };
const opts = { bar: "foo" };
Rivets.bind(document.getElementById("para1"), t);
Rivets.bind(document.getElementById("para1"), t, opts);
Rivets.bind([document.getElementById("para1"), document.getElementById("para2")], t);
