// Type definitions for non-npm package @ember/routing 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Frouting
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

export { default as Route } from '@ember/routing/route';
export { default as Router } from '@ember/routing/router';
import RouterService from '@ember/routing/router-service';
import '@ember/routing/-private/router-dsl';
import '@ember/routing/-private/transition';
interface Registry {
    'router': RouterService;
}
