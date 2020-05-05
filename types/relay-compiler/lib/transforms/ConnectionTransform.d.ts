import { CompilerContext } from '../core/CompilerContext';

/**
 * This transform rewrites LinkedField nodes with @connection_resolver and rewrites them
 * into `ConnectionField` nodes.
 */
declare function connectionTransform(context: CompilerContext): CompilerContext;

export { connectionTransform as transform };
