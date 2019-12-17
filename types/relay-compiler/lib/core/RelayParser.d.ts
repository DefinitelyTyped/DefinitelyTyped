import { GraphQLSchema, DefinitionNode } from 'graphql';
import { Root, Fragment } from './GraphQLIR';

export function parse(
  schema: GraphQLSchema,
  text: string,
  filename?: string,
): ReadonlyArray<Root | Fragment>;

export function transform(
  schema: GraphQLSchema,
  documents: DefinitionNode[],
): ReadonlyArray<Root | Fragment>;
