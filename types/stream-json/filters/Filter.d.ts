import * as Chain from 'stream-chain';
import * as FilterBase from './FilterBase';

export = Filter;

declare class Filter extends FilterBase {
    constructor(options: FilterBase.FilterOptions);
}

declare namespace Filter {
    function make(options: FilterBase.FilterOptions): Filter;

    namespace make {
        type Constructor = Filter;
        const Constructor: typeof Filter;
    }

    function filter(options: FilterBase.FilterOptions): Filter;

    namespace filter {
        type Constructor = Filter;
        const Constructor: typeof Filter;
    }

    function withParser(options: FilterBase.FilterOptions): Chain;
}
