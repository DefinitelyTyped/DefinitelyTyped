import htmlToDraft from 'html-to-draftjs';
import { ContentBlock } from 'draft-js';

const blocksFromHtml = htmlToDraft('<p>test</p>');

// $ExpectType ContentBlock[]
const contentBlocks = blocksFromHtml.contentBlocks;
// $ExpectType any
const entityMap = blocksFromHtml.entityMap;
