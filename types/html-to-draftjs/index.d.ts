import { ContentBlock, RawDraftEntity } from "draft-js";

declare function htmlToDraft(
    text: string,
    customChunkRenderer?: (
        nodeName: string,
        node: HTMLElement,
    ) => RawDraftEntity | undefined,
): {
    contentBlocks: ContentBlock[];
    entityMap?: any;
};

export = htmlToDraft;
