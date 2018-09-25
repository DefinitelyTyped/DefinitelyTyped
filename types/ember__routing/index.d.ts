// Type definitions for @ember/routing 3.0
// Project: http://emberjs.com/
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export { default as Route } from '@ember/routing/route';
export { default as Router } from '@ember/routing/router';
import RouterService from '@ember/routing/router-service';

// tslint:disable-next-line:strict-export-declare-modifiers
interface Registry {
    'router': RouterService;
}
