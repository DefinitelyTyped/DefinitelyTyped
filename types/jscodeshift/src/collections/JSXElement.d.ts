import { JSXElement } from "ast-types/gen/nodes";
import { NodePath } from "recast";
import { Collection } from "../Collection";

type ASTPath<N> = NodePath<N, N>;

export interface GlobalMethods {
    /**
     * Finds all JSXElements optionally filtered by name
     */
    findJSXElements(name?: string): Collection<JSXElement>;

    /**
     * Finds all JSXElements by module name. Given
     *
     *     var Bar = require('Foo');
     *     <Bar />
     *
     * findJSXElementsByModuleName('Foo') will find <Bar />, without having to
     * know the variable name.
     */
    findJSXElementsByModuleName(moduleName: string): Collection<JSXElement>;
}

type Defined<T> = T extends undefined ? never : T;
type JSXElementChild = Defined<JSXElement["children"]>[0];

export interface TraversalMethods {
    /**
     * Returns all child nodes, including literals and expressions.
     * This method only applies to JSXElement typed collections.
     */
    childNodes(): Collection<JSXElementChild>;

    /**
     * Returns all children that are JSXElements.
     * This method only applies to JSXElement typed collections.
     */
    childElements(): Collection<JSXElement>;
}

interface Filter {
    (path: ASTPath<any>): boolean;
}

export interface FilterMethods {
    /**
     * Filter method for attributes.
     */
    hasAttributes(attributeFilter: { [attributeName: string]: any }): Filter;

    /**
     * Filter elements which contain a specific child type
     */
    hasChildren(name: string): Filter;
}

export interface MappingMethods {
    /**
     * Given a JSXElement, returns its "root" name. E.g. it would return "Foo" for
     * both <Foo /> and <Foo.Bar />.
     */
    getRootName(path: ASTPath<any>): string;
}

export function register(): void;
export const filters: FilterMethods;
export const mappings: MappingMethods;

export { }; // to shut off automatic exporting
