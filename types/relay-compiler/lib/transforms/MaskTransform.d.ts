import { CompilerContext } from '../core/CompilerContext';

/**
 * A transform that inlines fragment spreads with the @relay(mask: false)
 * directive.
 */
declare function relayMaskTransform(context: CompilerContext): CompilerContext;

export { relayMaskTransform as transform };
