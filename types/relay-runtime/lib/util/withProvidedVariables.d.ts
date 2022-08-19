import { ProvidedVariablesType } from './RelayConcreteNode';
import { Variables } from './RelayRuntimeTypes';

export default function withProvidedVariables(
    userSuppliedVariables: Variables,
    providedVariables: ProvidedVariablesType | null | undefined,
): Variables;
