import { DefinitionNode } from 'graphql';
import { Root, Fragment } from './IR';
import { Schema } from './Schema';

export function parse(
  schema: Schema,
  text: string,
  filename?: string,
): ReadonlyArray<Root | Fragment>;

export function transform(
  schema: Schema,
  documents: DefinitionNode[],
): ReadonlyArray<Root | Fragment>;
