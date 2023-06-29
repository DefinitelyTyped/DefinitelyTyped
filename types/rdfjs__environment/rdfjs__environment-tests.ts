import { NamedNode, Stream } from '@rdfjs/types';
import Environment from '@rdfjs/environment/Environment.js';
import FormatsFactory from '@rdfjs/environment/FormatsFactory.js';
import NamespaceFactory from '@rdfjs/environment/NamespaceFactory.js';
import TermMapSetFactory from '@rdfjs/environment/TermMapSetFactory.js';
import DatasetFactory from '@rdfjs/environment/DatasetFactory.js';
import DataFactory from '@rdfjs/environment/DataFactory.js';
import { SinkMap } from '@rdfjs/sink-map';
import { EventEmitter } from 'events';
import formatsCommon from '@rdfjs/formats-common';

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

function formatsImport() {
    const env = new Environment([FormatsFactory]);

    env.formats.import({});

    const parsers: SinkMap<EventEmitter, Stream> = <any> {};
    env.formats.import({ parsers });

    const serializers: SinkMap<Stream, EventEmitter> = <any> {};
    env.formats.import({ serializers });

    env.formats.import({ parsers, serializers });

    const otherEnv = new Environment([FormatsFactory]);
    otherEnv.formats.import(env.formats);

    env.formats.import(formatsCommon);
}
