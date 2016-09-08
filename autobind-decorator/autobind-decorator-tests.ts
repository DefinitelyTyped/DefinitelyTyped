/// <reference path="autobind-decorator.d.ts" />

import autobind = require('autobind-decorator');

class Test {
    public static what: string = 'static';

    @bind
    public static test(): void {
        console.log(this.what);
    }

    public constructor(public what: string) {
        this.what = what;
    }

    @bind
    public test(): void {
        console.warn(this.what);
    }
}

const tester: Test = new Test('bind');
const { test } = tester;
tester.test(); // warns 'bind'.
test(); // warns 'bind'.
Test.test(); // logs 'static'.

@autobind
class Component {
  public constructor(private someMember: string) {
    this.someMember = someMember;
  }
  
  public somMethod(): void {
    console.error(this.someMember);
  }
}

const component: Component = new Component('React vs Angular2');
const { somMethod } = component;
component.someMethod(); // errors 'React vs Angular2'
somMethod(); // errors 'React vs Angular2'
