// Type definitions for rdf-ext 2.0
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Environment } from '@rdfjs/environment/Environment.js';
import { FormatsFactory } from "@rdfjs/environment/FormatsFactory";
import { FetchFactory } from '@rdfjs/fetch-lite/Factory.js';
import { NamespaceFactory } from '@rdfjs/namespace/Factory.js';
import { TermMapFactory } from '@rdfjs/term-map/Factory.js';
import { TermSetFactory } from '@rdfjs/term-set/Factory.js';
import { PrefixMapFactory } from '@rdfjs/prefix-map/Factory.js';
import { TraverserFactory } from "@rdfjs/traverser/Factory.js";
import { ClownfaceFactory } from './ClownfaceFactory';
import { DataFactoryExt as DataFactory } from './DataFactory';
import { DatasetFactory } from './DatasetFactory';

declare const defaultEnv: Environment<
    ClownfaceFactory
    | DataFactory
    | DatasetFactory
    | FetchFactory
    | FormatsFactory
    | NamespaceFactory
    | TermMapFactory
    | TermSetFactory
    | PrefixMapFactory
    | TraverserFactory
>;

export default defaultEnv;
