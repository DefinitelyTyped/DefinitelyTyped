import Environment from '@rdfjs/environment/Environment';
import FormatsFactory from '@rdfjs/environment/FormatsFactory';
import NamespaceFactory from '@rdfjs/environment/NamespaceFactory';

const emptyEnv = new Environment([]);
const clone = emptyEnv.clone();

interface FooFactory {
    init(): void;
    foo(foo: string): string;
    exports: ['foo'];
}

interface BarFactory {
    bar(bar: number): number;
    baz(): number;
    exports: ['bar'];
}

const fooFactory: FooFactory = <any> {};
const barFactory: BarFactory = <any> {};

let environment = new Environment([
    fooFactory,
    barFactory,
]);
environment = new Environment([
    fooFactory,
    barFactory,
], { bind: true });

// @ts-expect-error
environment.init();

const foo: string = environment.foo('10');
const bar: number = environment.bar(10);

const envWithDefaults = new Environment([
    FormatsFactory,
    NamespaceFactory,
]);

const { formats, namespace }  = envWithDefaults;
