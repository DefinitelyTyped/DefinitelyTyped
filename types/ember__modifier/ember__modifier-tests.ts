import {
    capabilities,
    ModifierCapabilities,
    ModifierCapabilitiesVersions,
    on,
    OnModifier,
    setModifierManager,
} from "@ember/modifier";

on; // $ExpectType OnModifier
setModifierManager(owner => {}, {}); // $ExpectType {}
const capabilitiesFor3_22 = capabilities("3.22"); // $ExpectType ModifierCapabilities
capabilitiesFor3_22.disableAutoTracking; // $ExpectType boolean

declare let x: ModifierCapabilitiesVersions;
x["3.22"].disableAutoTracking;
// @ts-expect-error
x["1.23"];

// We can name the type of `OnModifier`.
declare function takesOn(on: OnModifier): void;

// We can name the type of capabilities:
declare function takesCapabilities(caps: ModifierCapabilities): void;
