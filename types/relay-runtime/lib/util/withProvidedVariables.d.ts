import { ProvidedVariablesType } from "./RelayConcreteNode";
import { Variables } from "./RelayRuntimeTypes";

interface WithProvidedVariablesFn {
    (
        userSuppliedVariables: Variables,
        providedVariables: ProvidedVariablesType | null | undefined,
    ): Variables;
    tests_only_resetDebugCache: undefined | (() => void);
}
declare const withProvidedVariables: WithProvidedVariablesFn;
export default withProvidedVariables;
