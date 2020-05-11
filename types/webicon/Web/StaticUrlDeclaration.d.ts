import { UrlDeclarationBase } from "./UrlDeclarationBase";

/**
 * Represents a static url.
 */
export interface StaticUrlDeclaration extends UrlDeclarationBase {
    url?: string;
}
