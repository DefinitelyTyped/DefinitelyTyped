export type AnyFn = (...args: any[]) => any;

export interface Family {
    current: unknown;
}

export interface RefreshUpdate {
    staleFamilies: Set<Family>;
    updatedFamilies: Set<Family>;
}

export function performReactRefresh(): RefreshUpdate | null;

export function register(type: unknown, id: string): void;

export function setSignature(type: unknown, key: string, forceReset?: boolean, getCustomHooks?: () => AnyFn): void;

/**
 * This is lazily called during first render for a type.
 * It captures Hook list at that time so inline requires don't break comparisons.
 */
export function collectCustomHooksForSignature(type: unknown): void;

export function getFamilyByID(id: string): Family | void;
export function getFamilyByType(type: unknown): Family | void;

export type Instance = unknown;
export function findAffectedHostInstances(families: Family[]): Set<Instance>;
export function injectIntoGlobalHook(globalObject: Window): void;
export function hasUnrecoverableErrors(): boolean;

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
export function createSignatureFunctionForTransform(): void;

export function isLikelyComponentType(type: unknown): boolean;
