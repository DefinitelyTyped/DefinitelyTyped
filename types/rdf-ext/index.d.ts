// Type definitions for rdf-ext 2.0
// Project: https://github.com/rdf-ext/rdf-ext
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Environment } from '@rdfjs/environment/Environment.js';
import { FormatsFactory } from "@rdfjs/environment/FormatsFactory";
import { FetchFactory } from '@rdfjs/fetch-lite/Factory.js';
import { NamespaceFactory } from '@rdfjs/namespace/Factory.js';
import { ClownfaceFactory } from './ClownfaceFactory';
import { DataFactoryExt as DataFactory } from './DataFactory';
import { DatasetFactory } from './DatasetFactory';

declare const defaultEnv: Environment<
    ClownfaceFactory | DataFactory | DatasetFactory | FetchFactory | FormatsFactory | NamespaceFactory
>;

export default defaultEnv;
