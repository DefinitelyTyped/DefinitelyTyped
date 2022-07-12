declare namespace Runtime {
    type AnyFn = (...args: any[]) => any;

    // TODO: discuss about types taken from another public package
    interface Family {
        current: unknown;
    }

    interface RefreshUpdate {
        staleFamilies: Set<Family>;
        updatedFamilies: Set<Family>;
    }
    //
    function performReactRefresh(): RefreshUpdate | null;

    function register(type: unknown, id: string): void;

    function setSignature(type: unknown, key: string, forceReset?: boolean, getCustomHooks?: () => AnyFn): void;

    /**
     * This is lazily called during first render for a type.
     * It captures Hook list at that time so inline requires don't break comparisons.
     */
    function collectCustomHooksForSignature(type: unknown): void;

    function getFamilyByID(id: string): Family | void;
    function getFamilyByType(type: unknown): Family | void;

    // TODO: consult
    type Instance = unknown;
    function findAffectedHostInstances(families: Family[]): Set<Instance>;
    function injectIntoGlobalHook(globalObject: Window): void;
    function hasUnrecoverableErrors(): boolean;

    /**
     * Exposed for testing.
     */
    function _getMountedRootCount(): number;

    /**
     * This is a wrapper over more primitive functions for setting signature.
     * Signatures let us decide whether the Hook order has changed on refresh.
     *
     * This function is intended to be used as a transform target, e.g.:
     * var _s = createSignatureFunctionForTransform()
     * @example
     * function Hello() {
     * const [foo, setFoo] = useState(0);
     *  const value = useCustomHook();
     * _s(); /* Call without arguments triggers collecting the custom Hook list.
     * This doesn't happen during the module evaluation because we
     * don't want to change the module order with inline requires.
     * Next calls are noops.
     *   return <h1>Hi</h1>;
     * }
     * @example
     * // Call with arguments attaches the signature to the type:
     * _s(
     *    Hello,
     *    'useState{[foo, setFoo]}(0)',
     *    () => [useCustomHook], // Lazy to avoid triggering inline requires
     * );
     */
    function createSignatureFunctionForTransform(): void;

    function isLikelyComponentType(type: unknown): boolean;
}

export default Runtime;
