
import Forge = require('forge-di');

var forge = new Forge();

class Bar {}

class Foo {
	constructor(public bar: Bar) {
	}
}

forge.bind('foo').to.type(Foo);
forge.bind('bar').to.type(Bar);

var foo: Foo = forge.get<Foo>('foo');
var barInst = foo.bar;

// register functions
var createFoo = (bar: Bar)  => new Foo(bar);
forge.bind('foo').to.function(createFoo);

// Conditional bindings and resolution hints
class RedFoo {}
class BlueFoo {}

forge.bind('foo').to.type(RedFoo).when('red');
forge.bind('foo').to.type(BlueFoo).when((hint) => hint === 'blue');

// Lifecycles
forge.bind('foo').to.type(Foo).as.singleton();
forge.bind('bar').to.type(Bar).as.transient();

// explicit arguments
var manuallyCreatedBar = new Bar();
forge.bind('foo').to.type(Foo).with({bar: manuallyCreatedBar});

var bindingArgs: Forge.IBindingArguments = {
	bar: manuallyCreatedBar
};
forge.bind('foo').to.type(Foo).with(bindingArgs);

// Ephemeral Bindings TODO
class DependsOnFoo {
	constructor(public foo: Foo){}
}
var dependsOnFoo = forge.create(DependsOnFoo);

// Unbinding and rebinding
forge.unbind('foo');
forge.rebind('foo').to.type(Foo);