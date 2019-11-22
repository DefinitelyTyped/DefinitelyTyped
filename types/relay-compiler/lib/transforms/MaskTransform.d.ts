import { GraphQLCompilerContext } from '../core/GraphQLCompilerContext';

/**
 * A transform that inlines fragment spreads with the @relay(mask: false)
 * directive.
 */
declare function relayMaskTransform(context: GraphQLCompilerContext): GraphQLCompilerContext;

export { relayMaskTransform as transform };
