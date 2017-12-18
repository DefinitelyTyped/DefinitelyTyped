// Type definitions for cuid v1.3.8
// Project: https://github.com/ericelliott/cuid
// Definitions by: Dave Keen <http://www.keendevelopment.ch>, João Forja <http://discipliningcode.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CUID {
    (): string;
    slug: () => string;
}
declare var cuid: CUID;

export = cuid;