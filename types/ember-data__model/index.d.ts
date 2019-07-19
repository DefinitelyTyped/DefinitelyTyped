// Type definitions for @ember-data/model 3.11
// Project: https://api.emberjs.com/ember-data/release/modules/@ember-data%2Fmodel
// Definitions by: Derek Wickern <https://github.com/dwickern>
//                 Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import DS from 'ember-data';
export default DS.Model;

export const attr: typeof DS.attr;
export const belongsTo: typeof DS.belongsTo;
export const hasMany: typeof DS.hasMany;

export { default as ModelRegistry } from 'ember-data/types/registries/model';
