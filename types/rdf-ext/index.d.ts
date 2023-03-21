// Type definitions for rdf-ext 2.0
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
//                 Jesse Wright <https://github.com/jeswr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Environment } from '@rdfjs/environment/Environment';
import { FormatsFactory } from "@rdfjs/environment/FormatsFactory";
import { FetchFactory } from '@rdfjs/fetch-lite/Factory';
import { NamespaceFactory } from '@rdfjs/namespace/Factory';
import { TermMapFactory } from '@rdfjs/term-map/Factory';
import { TermSetFactory } from '@rdfjs/term-set/Factory';
import { PrefixMapFactory } from '@rdfjs/prefix-map/Factory';
import { TraverserFactory } from "@rdfjs/traverser/Factory";
import { ScoreFactory } from "@rdfjs/score/Factory";
import { ClownfaceFactory } from './ClownfaceFactory';
import { DataFactoryExt as DataFactory } from './DataFactory';
import { DatasetFactory } from './DatasetFactory';

export { default as Environment } from '@rdfjs/environment/Environment';
export { default as FetchFactory } from '@rdfjs/fetch-lite/Factory';
export { default as FormatsFactory } from '@rdfjs/environment/FormatsFactory';
export { default as NamespaceFactory } from '@rdfjs/namespace/Factory';
export { default as PrefixMapFactory } from '@rdfjs/prefix-map/Factory';
export { default as TermMapFactory } from '@rdfjs/term-map/Factory';
export { default as TermSetFactory } from '@rdfjs/term-set/Factory';
export { default as TraverserFactory } from '@rdfjs/traverser/Factory';
export { default as ScoreFactory } from '@rdfjs/score/Factory';
export { default as ClownfaceFactory } from './ClownfaceFactory';
export { default as DataFactory } from './DataFactory';
export { default as DatasetFactory } from './DatasetFactory';

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
    | ScoreFactory
>;

export default defaultEnv;
