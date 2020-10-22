import namespace = require('@rdfjs/namespace');
import { NamespaceBuilder } from '@rdfjs/namespace';
import { DataFactory, NamedNode } from 'rdf-js';

const factory: DataFactory = {} as any;

const builder1: NamespaceBuilder = namespace('http://schema.org/');
const builder2: NamespaceBuilder = namespace('http://schema.org/', {});
const builder3: NamespaceBuilder = namespace('http://schema.org/', { factory });

const node1: NamedNode = builder1.Thing;
const node2: NamedNode = builder1.url;
const node3: NamedNode = builder1('Thing');
const node4: NamedNode = builder1('url');
const node5: NamedNode = builder1`'Thing'`;
const node6: NamedNode = builder1`url`;
const node7: NamedNode = builder1();
