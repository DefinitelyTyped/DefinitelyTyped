import { CompilerContext } from '../core/CompilerContext';

declare function skipRedundantNodesTransform(
  context: CompilerContext,
): CompilerContext;

export { skipRedundantNodesTransform as transform };
