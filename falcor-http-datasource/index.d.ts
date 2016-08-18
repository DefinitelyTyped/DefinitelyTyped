// Type definitions for falcor-http-datasource 0.1.3
// Project: https://github.com/Netflix/falcor-http-datasource
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="falcor" />

import * as FalcorModel from 'falcor';

declare namespace FalcorHttpDataSource {

    /**
     * A HttpDataSource object is a {@link DataSource} can be used to retrieve data from a remote JSONGraph object using the browser's XMLHttpRequest.
     **/
    class XMlHttpSource extends FalcorModel.DataSource {
        constructor(jsonGraphUrl: string, config?: any);
    }
}

import XMlHttpSource = FalcorHttpDataSource.XMlHttpSource;
export {XMlHttpSource};
export default XMlHttpSource;

