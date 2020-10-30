import { CompilerContext } from '../core/CompilerContext';

/**
 * A transform that extracts `@relay(plural: Boolean)` directives and converts
 * them to metadata that can be accessed at runtime.
 */
declare function relayRelayDirectiveTransform(context: CompilerContext): CompilerContext;

export { relayRelayDirectiveTransform as transform };
