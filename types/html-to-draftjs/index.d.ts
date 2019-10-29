// Type definitions for html-to-draftjs 1.4
// Project: https://github.com/jpuri/html-to-draftjs#readme
// Definitions by: Ivan Zverev <https://github.com/1cheese>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { ContentBlock, RawDraftEntity } from 'draft-js';

export default function htmlToDraft(
    text: string,
    customChunkRenderer?: (
        nodeName: string, node: HTMLElement
    ) => RawDraftEntity | undefined,
): {
    contentBlocks: ContentBlock[];
    entityMap?: any;
};
