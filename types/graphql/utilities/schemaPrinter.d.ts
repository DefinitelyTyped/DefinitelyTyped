import { GraphQLSchema } from '../type/schema';
import { GraphQLType } from '../type/definition';

export interface PrinterOptions {
  [key: string]: any;
}

export function printSchema(schema: GraphQLSchema, options?: PrinterOptions): string;

export function printIntrospectionSchema(schema: GraphQLSchema, options?: PrinterOptions): string;

export function printType(type: GraphQLType, options?: PrinterOptions): string;
