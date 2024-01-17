import DataFactory from "@rdfjs/data-model/Factory.js";
import DatasetFactory from "@rdfjs/dataset/Factory.js";
import Environment from "@rdfjs/environment";
import { FactoryConstructor } from "@rdfjs/environment/Environment.js";
import formatsCommon from "@rdfjs/formats";
import FormatsFactory from "@rdfjs/formats/Factory.js";
import NamespaceFactory from "@rdfjs/namespace/Factory.js";
import { SinkMap } from "@rdfjs/sink-map";
import TermMapFactory from "@rdfjs/term-map/Factory.js";
import TermSetFactory from "@rdfjs/term-set/Factory.js";
import { NamedNode, Stream } from "@rdfjs/types";
import { EventEmitter } from "events";

const emptyEnv = new Environment([]);
const clone = emptyEnv.clone();

declare class FooFactory {
    init(): void;
    foo(foo: string): string;
    static exports: ["foo"];
}

declare class BarFactory {
    bar(bar: number): number;
    baz(): number;
    static exports: ["bar"];
}

const dataEnv = new Environment([
    DatasetFactory,
    DataFactory,
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

const foo: string = environment.foo("10");
const bar: number = environment.bar(10);

const envWithDefaults = new Environment([
    FormatsFactory,
    NamespaceFactory,
]);

const { formats, namespace } = envWithDefaults;

const env = new Environment([
    TermSetFactory,
    TermMapFactory,
]);

const node: NamedNode = <any> {};
const termMap = env.termMap([ // $ExpectType TermMap<NamedNode<string>, string>
    [node, "foo"],
    [node, "bar"],
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

class InitOnly {
    init() {}
    clone(): InitOnly {
        return this;
    }
}
const envOneFactoryInitOnly = new Environment([
    FormatsFactory,
    InitOnly,
]);

envOneFactoryInitOnly.formats.import(envOneFactoryInitOnly.formats);

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
function customFactory<F extends FactoryConstructor>(...additionalFactories: F[]) {
    return new Environment([
        DataFactory,
        ...additionalFactories,
    ]);
}

function testCustomFactoryMethod() {
    const env = customFactory(
        class Factory {
            foo() {
                return "bar";
            }
        },
    );

    // $ExpectType BlankNode
    const node = env.blankNode();
    // $ExpectType string
    const foo = env.foo();
}
