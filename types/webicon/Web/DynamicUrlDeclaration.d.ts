import { StaticUrlDeclaration } from "./StaticUrlDeclaration";
import { UrlDeclarationBase } from "./UrlDeclarationBase";

/**
 * Represents a dynamically generated url.
 */
export interface DynamicUrlDeclaration<T = undefined> extends UrlDeclarationBase {
    /**
     * Either the actual url or a function for generating the url.
     */
    url?: string | ((args: T) => string | StaticUrlDeclaration);
}
