import { RequestParameters } from './RelayConcreteNode';
import { Variables } from './RelayRuntimeTypes';

export type RequestIdentifier = string;

/**
 * Returns a stable identifier for the given pair of `RequestParameters` +
 * variables.
 */
export function getRequestIdentifier(parameters: RequestParameters, variables: Variables): RequestIdentifier;
