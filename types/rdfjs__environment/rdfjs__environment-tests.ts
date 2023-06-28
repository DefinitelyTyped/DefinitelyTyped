import { NamedNode } from '@rdfjs/types';
import Environment from '@rdfjs/environment/Environment';
import FormatsFactory from '@rdfjs/environment/FormatsFactory';
import NamespaceFactory from '@rdfjs/environment/NamespaceFactory';
import TermMapSetFactory from '@rdfjs/environment/TermMapSetFactory';
import DatasetFactory from '@rdfjs/environment/DatasetFactory';
import DataFactory from '@rdfjs/environment/DataFactory';

const emptyEnv = new Environment([]);
const clone = emptyEnv.clone();

declare class FooFactory {
    init(): void;
    foo(foo: string): string;
    static exports: ['foo'];
}

declare class BarFactory {
    bar(bar: number): number;
    baz(): number;
    static exports: ['bar'];
}

const dataEnv = new Environment([
    DatasetFactory,
    DataFactory
]);

let environment = new Environment([
    FooFactory,
    BarFactory,
]);
environment = new Environment([
    FooFactory,
    BarFactory,
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

const env = new Environment([TermMapSetFactory]);

const node: NamedNode = <any> {};
const termMap = env.termMap([ // $ExpectType TermMap<NamedNode<string>, string>
    [node, 'foo'],
    [node, 'bar']
]);
const termSet = env.termSet([node]); // $ExpectType TermSet<NamedNode<string>>
