import { CompilerContext } from '../core/CompilerContext';

declare function applyFragmentArgumentTransform(
    context: CompilerContext,
  ): CompilerContext;

export { applyFragmentArgumentTransform as transform };
