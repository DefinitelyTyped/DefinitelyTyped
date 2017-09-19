import { GraphQLInputType, GraphQLField, GraphQLArgument } from '../type/definition';
import { GraphQLDirective } from '../type/directives';
import { GraphQLSchema } from '../type/schema';
import { FieldNode, DirectiveNode, VariableDefinitionNode } from '../language/ast';

/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 */
export function getVariableValues(
    schema: GraphQLSchema,
    varDefNodes: VariableDefinitionNode[],
    inputs: { [key: string]: any }
): { [key: string]: any };

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 */
export function getArgumentValues(
    def: GraphQLField<any, any> | GraphQLDirective,
    node: FieldNode | DirectiveNode,
    variableValues?: { [key: string]: any }
): { [key: string]: any };

/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 */
export function getDirectiveValues(
    directiveDef: GraphQLDirective,
    node: { directives?: Array<DirectiveNode> },
    variableValues?: { [key: string]: any }
): void | { [key: string]: any };
