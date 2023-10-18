import Service from "@ember/service";

// https://github.com/kategengler/ember-feature-flags/blob/v6.0.0/addon/services/features.js#L5
export default interface Features extends Service {
    setup(features: { [key: string]: boolean }): void;
    enable(feature: string): void;
    disable(feature: string): void;
    isEnabled(feature: string): boolean;
    readonly flags: string[];
}
