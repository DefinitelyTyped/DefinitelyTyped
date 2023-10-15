import { DynamicUrlDeclaration } from "./DynamicUrlDeclaration";

/**
 * Represents a url.
 */
export type UrlConfig<T = never> = string | DynamicUrlDeclaration<T>;
