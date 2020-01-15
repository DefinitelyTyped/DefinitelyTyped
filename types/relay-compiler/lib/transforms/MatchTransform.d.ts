import { GraphQLCompilerContext } from '../core/GraphQLCompilerContext';

/**
 * This transform rewrites LinkedField nodes with @match and rewrites them
 * into `LinkedField` nodes with a `supported` argument.
 */
declare function relayMatchTransform(context: GraphQLCompilerContext): GraphQLCompilerContext;

export { relayMatchTransform as transform };
