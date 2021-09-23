// Type definitions for ember-feature-flags 6.0
// Project: https://github.com/kategengler/ember-feature-flags#readme
// Definitions by: Frank Tan <https://github.com/tansongyang>
//                 Mike North <https://github.com/mike-north>
//                 Dan Freeman <https://github.com/dfreeman>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import Ember from 'ember';

// https://github.com/kategengler/ember-feature-flags/blob/v6.0.0/addon/services/features.js#L5
export default interface Features extends Ember.Service {
    setup(features: { [key: string]: boolean }): void;
    enable(feature: string): void;
    disable(feature: string): void;
    isEnabled(feature: string): boolean;
}
