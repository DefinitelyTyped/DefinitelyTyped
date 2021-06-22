import { SourceLike } from '.';
import Source = require('./Source');

declare class CompatSource extends Source {
    constructor(sourceLike: SourceLike);
    static from(sourceLike: SourceLike): Source | CompatSource;
}

export = CompatSource;
