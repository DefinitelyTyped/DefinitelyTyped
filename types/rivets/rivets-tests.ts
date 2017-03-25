

rivets.configure({
    // Attribute prefix in templates
    prefix: 'rv',
    // Preload templates with initial data on bind
    preloadData: true,
    // Root sightglass interface for keypaths
    rootInterface: '.',
    // Template delimiters for text bindings
    templateDelimiters: ['[[', ']]'],
    // Augment the event handler of the on-* binder
    handler: function(target:any, event:any, binding:any) {
        this.call(target, event, binding.view.models)
    }
});

var t = {test: ["hello", "one", "two"]}
var opts = {bar: "foo"};
rivets.bind(document.getElementById("para1"), t);
rivets.bind(document.getElementById("para1"), t, opts);
rivets.bind([document.getElementById("para1"), document.getElementById("para2")], t);
