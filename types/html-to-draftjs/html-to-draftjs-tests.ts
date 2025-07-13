import { RawDraftEntity } from "draft-js";
import htmlToDraft from "html-to-draftjs";

htmlToDraft("<p>test</p>");

declare const entity: RawDraftEntity;
htmlToDraft("<p>test</p>", (nodeName, node) => {
    // $ExpectType string
    nodeName;

    // $ExpectType HTMLElement
    node;

    return entity;
});

const blocksFromHtml = htmlToDraft("<p>test</p>");

// $ExpectType ContentBlock[]
blocksFromHtml.contentBlocks;

// $ExpectType any
blocksFromHtml.entityMap;
