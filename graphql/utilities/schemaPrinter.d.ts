import { GraphQLSchema } from '../type/schema';
import { GraphQLType } from '../type/definition';

export function printSchema(schema: GraphQLSchema): string;

export function printIntrospectionSchema(schema: GraphQLSchema): string;

export function printType(type: GraphQLType): string;
