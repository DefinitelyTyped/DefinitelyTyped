import Maybe from "../tsutils/Maybe";
import { GraphQLError } from "../error/GraphQLError";
import { GraphQLInputType, GraphQLField, GraphQLArgument } from "../type/definition";
import { GraphQLDirective } from "../type/directives";
import { GraphQLSchema } from "../type/schema";
import { FieldNode, DirectiveNode, VariableDefinitionNode } from "../language/ast";

interface CoercedVariableValues {
    errors: ReadonlyArray<GraphQLError> | undefined;
    coerced: { [key: string]: any } | undefined;
}

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
export function getVariableValues(
    schema: GraphQLSchema,
    varDefNodes: VariableDefinitionNode[],
    inputs: { [key: string]: any }
): CoercedVariableValues;

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
export function getArgumentValues(
    def: GraphQLField<any, any> | GraphQLDirective,
    node: FieldNode | DirectiveNode,
    variableValues?: Maybe<{ [key: string]: any }>
): { [key: string]: any };

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */
export function getDirectiveValues(
    directiveDef: GraphQLDirective,
    node: {
        readonly directives?: ReadonlyArray<DirectiveNode>;
    },
    variableValues?: Maybe<{ [key: string]: any }>
): undefined | { [key: string]: any };
