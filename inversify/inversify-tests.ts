/// <reference path="inversify.d.ts" />

import { inversify } from "inversify";

interface FooInterface {
  name : string;
  greet() : string;
}

interface BarInterface {
  name : string;
  greet() : string;
}

interface FooBarInterface {
  foo : FooInterface;
  bar : BarInterface;
  greet() : string;
}

class Foo implements FooInterface {
  public name : string;
  constructor() {
    this.name = "foo";
  }
  public greet() : string {
    return this.name;
  }
}

class Bar implements BarInterface {
  public name : string;
  constructor() {
    this.name = "bar";
  }
  public greet() : string {
    return this.name;
  }
}

class FooBar implements FooBarInterface {
  public foo : FooInterface;
  public bar : BarInterface;
  constructor(FooInterface : FooInterface, BarInterface : BarInterface) {
    this.foo = FooInterface;
    this.bar = BarInterface;
  }
  public greet() : string{
    return this.foo.greet() + this.bar.greet();
  }
}

// Kernel
var kernel = new inversify.Kernel();

// Identifiers
var fooRuntimeIdentifier = "FooInterface";
var barRuntimeIdentifier = "BarInterface";
var fooBarRuntimeIdentifier = "FooBarInterface";

// Bindings
var fooBinding =  new inversify.TypeBinding<FooInterface>(fooRuntimeIdentifier, Foo);
var barBinding =  new inversify.TypeBinding<BarInterface>(barRuntimeIdentifier, Bar);
var fooBarBinding =  new inversify.TypeBinding<FooBarInterface>(fooBarRuntimeIdentifier, FooBar);

kernel.bind(fooBinding);
kernel.bind(barBinding);
kernel.bind(fooBarBinding);

// Resolve
var foo = kernel.resolve<Foo>(fooRuntimeIdentifier);
var bar = kernel.resolve<Bar>(barRuntimeIdentifier);
var fooBar = kernel.resolve<FooBar>(fooBarRuntimeIdentifier);

// Unbind
kernel.unbind(fooRuntimeIdentifier);
kernel.unbindAll();
