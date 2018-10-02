// Type definitions for ember-feature-flags 4.0
// Project: https://github.com/kategengler/ember-feature-flags#readme
// Definitions by: Frank Tan <https://github.com/tansongyang>
//                 Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import Ember from 'ember';

// https://github.com/kategengler/ember-feature-flags/blob/v3.0.0/addon/services/features.js#L5
export default interface Features extends Ember.Service {
    setup(features: { [key: string]: boolean }): void;
    enable(feature: string): void;
    disable(feature: string): void;
    isEnabled(feature: string): boolean;
}
