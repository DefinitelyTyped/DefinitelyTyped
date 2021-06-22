import { SourceListMap } from 'source-list-map';
import { SourceNode } from 'source-map';

import { SourceAndMapMixin } from '.';
import Source = require('./Source');

/**
 * Represents source code, which is a copy of the original file
 */
declare class OriginalSource extends Source implements SourceAndMapMixin {
    /**
     * OriginalSource tries to create column mappings if requested, by splitting the source code at typical statement borders (;, {, }).
     */
    constructor(sourceCode: string | Buffer, name: string);
    source(): string;
}

export = OriginalSource;
