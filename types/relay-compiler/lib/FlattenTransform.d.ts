import { GraphQLCompilerContext } from '../';

export interface FlattenOptions {
  flattenAbstractTypes?: boolean;
}

export function transformWithOptions(
  options: FlattenOptions,
): (context: GraphQLCompilerContext) => GraphQLCompilerContext;
