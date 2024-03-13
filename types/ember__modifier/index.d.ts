import Owner from "@ember/owner";
import { Opaque } from "ember/-private/type-utils";

// In normal TypeScript, this modifier is essentially an opaque token
// that just needs to be importable. Declaring it with a unique interface
// like this, however, gives tools like Glint (that DO have a richer
// notion of what it is) a place to install more detailed type information.
export interface OnModifier extends Opaque<"modifier:on"> {}

/**
 * The `{{on}}` modifier lets you easily add event listeners.
 *
 * @see https://api.emberjs.com/ember/4.1/classes/Ember.Templates.helpers/methods/on?anchor=on
 */
export const on: OnModifier;

/**
 * Given a modifier manager factory and a modifier, tell Ember to set the
 * manager returned by that factory as the manager for the modifier.
 *
 * @param factory A function which takes an `owner` and returns a [modifier
 *   manager](https://emberjs.github.io/rfcs/0373-Element-Modifier-Managers.html).
 * @param modifier The modifier definition to associate with the manager.
 */
export function setModifierManager<T>(factory: (owner: Owner) => unknown, modifier: T): T;

export interface ModifierCapabilitiesVersions {
    // passes factoryFor(...).class to `.createModifier`
    // uses args proxy, does not provide a way to opt-out
    "3.22": {
        disableAutoTracking?: boolean;
    };
}

export interface ModifierCapabilities {
    disableAutoTracking: boolean;
}

/**
 * Given a target version of Ember, return an opaque token which Ember can use
 * to determine what a given modifier manager supports.
 */
export function capabilities<Version extends keyof ModifierCapabilitiesVersions>(
    managerAPI: Version,
    optionalFeatures?: ModifierCapabilitiesVersions[Version],
): ModifierCapabilities;
