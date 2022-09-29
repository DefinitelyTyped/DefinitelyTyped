import namespace, { NamespaceBuilder } from '@rdfjs/namespace';
import Factory from '@rdfjs/namespace/Factory';
import { DataFactory, NamedNode } from 'rdf-js';

const factory: DataFactory = {} as any;

const builder1: NamespaceBuilder<string> = namespace('http://schema.org/');
const builder2: NamespaceBuilder<string> = namespace('http://schema.org/', {});
const builder3: NamespaceBuilder<string> = namespace('http://schema.org/', { factory });
const assignToPlain: NamespaceBuilder = builder1;

const node1: NamedNode = builder1.Thing;
const node2: NamedNode = builder1.url;
const node3: NamedNode = builder1('Thing');
const node4: NamedNode = builder1('url');
const node5: NamedNode = builder1`'Thing'`;
const node6: NamedNode = builder1`url`;
const node7: NamedNode = builder1();

type Foobar = 'foo' | 'bar';
const restrictedBuilder: NamespaceBuilder<Foobar> = namespace<Foobar>('http://example.com/');
const assignTypedToPlain: NamespaceBuilder = restrictedBuilder;

const foo = restrictedBuilder.foo;
const bar = restrictedBuilder('bar');
// @ts-expect-error
const bazProp = restrictedBuilder.baz;
// @ts-expect-error
const bazArg = restrictedBuilder('baz');

const exports: ['namespace'] = Factory.exports;
const builderFromFactory: NamespaceBuilder = new Factory().namespace('http://example.com/');
