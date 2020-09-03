// Type definitions for draftjs-to-html 0.8
// Project: https://github.com/jpuri/draftjs-to-html#readme
// Definitions by: Ivan Zverev <https://github.com/1cheese>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { RawDraftContentState } from 'draft-js';

interface HashtagConfig {
    trigger?: string;
    separator?: string;
}

declare function draftToHtml(
    editorContent: RawDraftContentState,
    hashtagConfig?: HashtagConfig,
    directional?: boolean,
    customEntityTransform?: (...args: any[]) => any,
): string;

export = draftToHtml;
