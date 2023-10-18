import { Environment } from "@rdfjs/environment/Environment.js";
import { FormatsFactory } from "@rdfjs/environment/FormatsFactory.js";
import { FetchFactory } from "@rdfjs/fetch-lite/Factory.js";
import { NamespaceFactory } from "@rdfjs/namespace/Factory.js";
import { PrefixMapFactory } from "@rdfjs/prefix-map/Factory.js";
import { ScoreFactory } from "@rdfjs/score/Factory.js";
import { TermMapFactory } from "@rdfjs/term-map/Factory.js";
import { TermSetFactory } from "@rdfjs/term-set/Factory.js";
import { TraverserFactory } from "@rdfjs/traverser/Factory.js";
import ClownfaceFactory from "./ClownfaceFactory.js";
import { DataFactoryExt as DataFactory } from "./DataFactory.js";
import { DatasetFactory } from "./DatasetFactory.js";

export { default as Environment } from "@rdfjs/environment/Environment.js";
export { default as FormatsFactory } from "@rdfjs/environment/FormatsFactory.js";
export { default as FetchFactory } from "@rdfjs/fetch-lite/Factory.js";
export { default as NamespaceFactory } from "@rdfjs/namespace/Factory.js";
export { default as PrefixMapFactory } from "@rdfjs/prefix-map/Factory.js";
export { default as ScoreFactory } from "@rdfjs/score/Factory.js";
export { default as TermMapFactory } from "@rdfjs/term-map/Factory.js";
export { default as TermSetFactory } from "@rdfjs/term-set/Factory.js";
export { default as TraverserFactory } from "@rdfjs/traverser/Factory.js";
export { default as ClownfaceFactory } from "./ClownfaceFactory.js";
export { default as DataFactory } from "./DataFactory.js";
export { default as DatasetFactory } from "./DatasetFactory.js";

declare const defaultEnv: Environment<
    | ClownfaceFactory
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
