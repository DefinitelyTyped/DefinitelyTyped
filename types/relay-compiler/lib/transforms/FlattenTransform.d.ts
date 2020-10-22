import { CompilerContext } from '../core/CompilerContext';

export interface FlattenOptions {
    flattenAbstractTypes?: boolean;
}

export function transformWithOptions(
  options: FlattenOptions,
): (context: CompilerContext) => CompilerContext;
