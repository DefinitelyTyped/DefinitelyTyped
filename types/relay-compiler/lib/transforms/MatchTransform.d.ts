import { CompilerContext } from '../core/CompilerContext';

/**
 * This transform rewrites LinkedField nodes with @match and rewrites them
 * into `LinkedField` nodes with a `supported` argument.
 */
declare function relayMatchTransform(context: CompilerContext): CompilerContext;

export { relayMatchTransform as transform };
