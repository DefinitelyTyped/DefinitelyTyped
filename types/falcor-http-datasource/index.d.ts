/// <reference types="falcor" />

import * as FalcorModel from "falcor";

declare namespace FalcorHttpDataSource {
    /**
     * A HttpDataSource object is a {@link DataSource} can be used to retrieve data from a remote JSONGraph object using the browser's XMLHttpRequest.
     */
    class XMlHttpSource extends FalcorModel.DataSource {
        constructor(jsonGraphUrl: string, config?: any);
    }
}

import XMlHttpSource = FalcorHttpDataSource.XMlHttpSource;
export { XMlHttpSource };
export default XMlHttpSource;
