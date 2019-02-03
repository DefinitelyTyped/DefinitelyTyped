import { VariableDeclarator } from "ast-types/gen/nodes";
import { NodePath } from "recast";
import { Collection } from "../Collection";

type ASTPath<N> = NodePath<N, N>;

export interface GlobalMethods {
    /**
     * Finds all variable declarators, optionally filtered by name.
     */
    findVariableDeclarators(name?: string): Collection<VariableDeclarator>;
}

export interface TransformMethods<N> {
    /**
     * Renames a variable and all its occurrences.
     * This method only applies to VariableDeclarator typed collections.
     */
    renameTo(newName: string): Collection<N>;
}

interface Filter {
    (path: ASTPath<any>): boolean;
}

export interface FilterMethods {
    /**
     * Returns a function that returns true if the provided path is a variable
     * declarator and requires one of the specified module names.
     *
     * @param names A module name or an array of module names
     */
    requiresModule(names: string | string[]): Filter;
}

export function register(): void;
export const filters: FilterMethods;

export { }; // to shut off automatic exporting
