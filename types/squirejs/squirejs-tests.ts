
import Squire = require('squirejs');

// Default Configuration
var injector = new Squire();

// Different Context
injector = new Squire('other-requirejs-context');

// require(Array dependencies, Function callback, Function errback)
injector.require(['a'], function(A: any) {}, function(err: any) {});

// mock(String name | Object(name: mock), Object mock)
injector.mock("a", {});
injector.mock({a: {}});

// store(String name | Array names)
injector.store('a');
injector.store(['a', 'b']);

// clean(Optional (String name | Array names))
injector.clean('a');
injector.clean(['a', 'b']);
injector.clean();

// remove()
injector.remove();

// run()
injector.run(['a'], function test(a: any) {})(function done() {});

// Squire.Helpers.returns(Any what)
Squire.Helpers.returns({});

// Squire.Helpers.constructs(Any what)
Squire.Helpers.constructs({});
