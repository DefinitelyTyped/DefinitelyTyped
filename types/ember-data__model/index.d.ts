// Type definitions for @ember-data/model 4.0
// Project: https://github.com/emberjs/data
// Definitions by: James C. Davis <https://github.com/jamescdavis>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import DS from 'ember-data';
export default DS.Model;

export import attr = DS.attr;
export import belongsTo = DS.belongsTo;
export import hasMany = DS.hasMany;
export import AsyncBelongsTo = DS.AsyncBelongsTo;
export import AsyncHasMany = DS.AsyncHasMany;
export import SyncHasMany = DS.SyncHasMany;
