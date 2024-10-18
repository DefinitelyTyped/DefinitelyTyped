import { ContentBlock, RawDraftEntity } from "draft-js";

export default function htmlToDraft(
    text: string,
    customChunkRenderer?: (
        nodeName: string,
        node: HTMLElement,
    ) => RawDraftEntity | undefined,
): {
    contentBlocks: ContentBlock[];
    entityMap?: any;
};
