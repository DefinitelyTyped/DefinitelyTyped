import { SourceAndMapMixin } from '.';
import Source = require('./Source');

/**
 * Prefix every line of the decorated Source with a provided string.
 */
declare class PrefixSource extends Source implements SourceAndMapMixin {
    constructor(prefix: Source | string, source: Source | string);
    source(): string;
}

export = PrefixSource;
