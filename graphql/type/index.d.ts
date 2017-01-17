// GraphQL Schema definition
export { GraphQLSchema } from 'graphql/type/schema';

export * from 'graphql/type/definition';

export {
    // "Enum" of Directive Locations
    DirectiveLocation,

    // Directives Definition
    GraphQLDirective,

    // Built-in Directives defined by the Spec
    specifiedDirectives,
    GraphQLIncludeDirective,
    GraphQLSkipDirective,
    GraphQLDeprecatedDirective,

    // Constant Deprecation Reason
    DEFAULT_DEPRECATION_REASON,
} from 'graphql/type/directives';

// Common built-in scalar instances.
export {
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
} from 'graphql/type/scalars';

export {
    // "Enum" of Type Kinds
    TypeKind,

    // GraphQL Types for introspection.
    __Schema,
    __Directive,
    __DirectiveLocation,
    __Type,
    __Field,
    __InputValue,
    __EnumValue,
    __TypeKind,

    // Meta-field definitions.
    SchemaMetaFieldDef,
    TypeMetaFieldDef,
    TypeNameMetaFieldDef,
} from 'graphql/type/introspection';

export { DirectiveLocationEnum } from 'graphql/type/directives';
