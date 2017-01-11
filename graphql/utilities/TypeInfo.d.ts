import { GraphQLSchema } from 'graphql/type/schema';
import {
    GraphQLOutputType,
    GraphQLCompositeType,
    GraphQLInputType,
    GraphQLField,
    GraphQLArgument,
    GraphQLType,
} from 'graphql/type/definition';
import { GraphQLDirective } from 'graphql/type/directives';
import { ASTNode, FieldNode } from 'graphql/language/ast';

/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */
export class TypeInfo {
    constructor(
        schema: GraphQLSchema,
        // NOTE: this experimental optional second parameter is only needed in order
        // to support non-spec-compliant codebases. You should never need to use it.
        // It may disappear in the future.
        getFieldDefFn?: getFieldDef
    );

    getType(): GraphQLOutputType;
    getParentType(): GraphQLCompositeType;
    getInputType(): GraphQLInputType;
    getFieldDef(): GraphQLField<any, any>;
    getDirective(): GraphQLDirective;
    getArgument(): GraphQLArgument;
    enter(node: ASTNode): any;
    leave(node: ASTNode): any;
}

export interface getFieldDef {
    (
        schema: GraphQLSchema,
        parentType: GraphQLType,
        fieldNode: FieldNode
    ): GraphQLField<any, any>
}