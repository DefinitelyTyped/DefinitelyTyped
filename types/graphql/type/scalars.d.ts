import { GraphQLScalarType } from './definition';

export const GraphQLInt: GraphQLScalarType;
export const GraphQLFloat: GraphQLScalarType;
export const GraphQLString: GraphQLScalarType;
export const GraphQLBoolean: GraphQLScalarType;
export const GraphQLID: GraphQLScalarType;

export const specifiedScalarTypes: ReadonlyArray<GraphQLScalarType>;

export function isSpecifiedScalarType(type: GraphQLScalarType): boolean;
