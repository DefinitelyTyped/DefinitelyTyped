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
    varDefNodes: Array<VariableDefinitionNode>,
    inputs: { [key: string]: any }
): { [key: string]: any }

/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 */
export function getArgumentValues(
    def: GraphQLField<any, any> | GraphQLDirective,
    node: FieldNode | DirectiveNode,
    variableValues?: { [key: string]: any }
): { [key: string]: any };
