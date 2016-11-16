
import autobind = require('autobind-decorator');

class Test {
    public static what: string = 'static';

    @autobind
    public static test(): void {
        console.log(this.what);
    }

    public constructor(public what: string) {
        this.what = what;
    }

    @autobind
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

    public someMethod(): void {
        console.error(this.someMember);
    }
}

const component: Component = new Component('React vs Angular2');
const { someMethod } = component;
component.someMethod(); // errors 'React vs Angular2'
someMethod(); // errors 'React vs Angular2'
