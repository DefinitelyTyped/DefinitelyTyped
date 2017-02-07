// Type definitions for striptags
// Project: https://github.com/ericnorris/striptags
// Definitions by: Craig Citro <https://github.com/ccitro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'striptags' {
    export default function strip (html: string, allowedTags?: string | string[]): string;
}
