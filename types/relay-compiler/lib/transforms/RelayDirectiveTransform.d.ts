import { GraphQLCompilerContext } from '../core/GraphQLCompilerContext';

/**
 * A transform that extracts `@relay(plural: Boolean)` directives and converts
 * them to metadata that can be accessed at runtime.
 */
declare function relayRelayDirectiveTransform(context: GraphQLCompilerContext): GraphQLCompilerContext;

export { relayRelayDirectiveTransform as transform };
