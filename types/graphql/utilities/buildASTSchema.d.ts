import Maybe from "../tsutils/Maybe";
import {
    DocumentNode,
    Location,
    StringValueNode,
    TypeDefinitionNode,
    NamedTypeNode,
    DirectiveDefinitionNode,
    FieldDefinitionNode,
    InputValueDefinitionNode,
    EnumValueDefinitionNode,
} from "../language/ast";
import { GraphQLNamedType, GraphQLFieldConfig, GraphQLInputField, GraphQLEnumValueConfig } from "../type/definition";
import { GraphQLDirective } from "../type/directives";
import { Source } from "../language/source";
import { GraphQLSchema, GraphQLSchemaValidationOptions } from "../type/schema";
import { ParseOptions } from "../language/parser";
import blockStringValue from "../language/blockStringValue";

interface BuildSchemaOptions extends GraphQLSchemaValidationOptions {
    /**
     * Descriptions are defined as preceding string literals, however an older
     * experimental version of the SDL supported preceding comments as
     * descriptions. Set to true to enable this deprecated behavior.
     * This option is provided to ease adoption and will be removed in v16.
     *
     * Default: false
     */
    commentDescriptions?: boolean;

    /**
     * Set to true to assume the SDL is valid.
     *
     * Default: false
     */
    assumeValidSDL?: boolean;
}

/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
export function buildASTSchema(documentAST: DocumentNode, options?: BuildSchemaOptions): GraphQLSchema;

type TypeDefinitionsMap = { [key: string]: TypeDefinitionNode };
type TypeResolver = (typeRef: NamedTypeNode) => GraphQLNamedType;

export class ASTDefinitionBuilder {
    constructor(typeDefinitionsMap: TypeDefinitionsMap, options: Maybe<BuildSchemaOptions>, resolveType: TypeResolver);

    buildTypes(nodes: ReadonlyArray<NamedTypeNode | TypeDefinitionNode>): Array<GraphQLNamedType>;

    buildType(node: NamedTypeNode | TypeDefinitionNode): GraphQLNamedType;

    buildDirective(directiveNode: DirectiveDefinitionNode): GraphQLDirective;

    buildField(field: FieldDefinitionNode): GraphQLFieldConfig<any, any>;

    buildInputField(value: InputValueDefinitionNode): GraphQLInputField;

    buildEnumValue(value: EnumValueDefinitionNode): GraphQLEnumValueConfig;
}

/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
export function getDescription(
    node: { readonly description?: StringValueNode; readonly loc?: Location },
    options: Maybe<BuildSchemaOptions>
): string | undefined;

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
export function buildSchema(source: string | Source, options?: BuildSchemaOptions & ParseOptions): GraphQLSchema;
