import * as Chain from 'stream-chain';
import * as FilterBase from './FilterBase';

export = Replace;

declare class Replace extends FilterBase {
    constructor(options: FilterBase.FilterOptions);
}

declare namespace Replace {
    function make(options: FilterBase.FilterOptions): Replace;

    namespace make {
        type Constructor = Replace;
        const Constructor: typeof Replace;
    }

    function replace(options: FilterBase.FilterOptions): Replace;

    namespace replace {
        type Constructor = Replace;
        const Constructor: typeof Replace;
    }

    function withParser(options: FilterBase.FilterOptions): Chain;
}
