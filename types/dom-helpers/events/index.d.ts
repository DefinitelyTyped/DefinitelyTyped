import * as on from './on';
import * as off from './off';
import * as listen from './listen';
import * as filter from './filter';

declare const _default: {
    on: typeof on;
    off: typeof off;
    listen: typeof listen;
    filter: typeof filter;
};

declare const _export: {
    on: typeof on;
    off: typeof off;
    listen: typeof listen;
    filter: typeof filter;

    default: typeof _default;
};

export = _export;
