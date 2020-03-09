// Type definitions for non-npm package @ember/routing 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Frouting
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export { default as Route } from '@ember/routing/route';
export { default as Router } from '@ember/routing/router';
import RouterService from '@ember/routing/router-service';
import '@ember/routing/-private/router-dsl';
import '@ember/routing/-private/transition';
// tslint:disable-next-line:strict-export-declare-modifiers
interface Registry {
    'router': RouterService;
}
