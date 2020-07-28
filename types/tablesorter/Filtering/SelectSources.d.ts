import { FunctionSelectSource } from "./FunctionSelectSource";
import { ValidSelectSources } from "./ValidSelectSources";

/**
 * Represents types for specifying select-sources.
 */
export type SelectSources<TElement = HTMLElement> = FunctionSelectSource<TElement> | ValidSelectSources;
