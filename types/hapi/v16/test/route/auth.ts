'use strict';

import * as Hapi from '../../';

var routeMoreConfig: Hapi.RouteAdditionalConfigurationOptions = {
    auth: false,
}
routeMoreConfig = {
    auth: 'some_strategy',
}
routeMoreConfig = {
    auth: {
        mode: 'required',
        strategies: ['strat1', 'strat2'],
        strategy: 'should not be given when strategies given',
        payload: false,
        access: {
            scope: false,
            entity: 'any',
        },
        // Will over write values in access
        scope: false,
        entity: 'any',
    }
}
