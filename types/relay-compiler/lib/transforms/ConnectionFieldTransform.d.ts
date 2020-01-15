import { GraphQLCompilerContext } from '../core/GraphQLCompilerContext';

/**
 * This transform rewrites LinkedField nodes with @connection_resolver and rewrites them
 * into `ConnectionField` nodes.
 */
declare function connectionFieldTransform(context: GraphQLCompilerContext): GraphQLCompilerContext;

export { connectionFieldTransform as transform };
