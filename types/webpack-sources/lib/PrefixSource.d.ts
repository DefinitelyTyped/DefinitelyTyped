import { SourceAndMapMixin } from ".";
import Source = require("./Source");

/**
 * Prefix every line of the decorated Source with a provided string.
 */
declare class PrefixSource extends Source implements SourceAndMapMixin {
    constructor(prefix: string, source: string | Source);
    source(): string;
    original(): Source;
	getPrefix(): string;
}

export = PrefixSource;
