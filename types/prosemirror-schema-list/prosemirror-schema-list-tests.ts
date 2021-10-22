import { schema } from 'prosemirror-schema-basic';
import {
    orderedList,
    bulletList,
    listItem,
    addListNodes,
    wrapInList,
    splitListItem,
    liftListItem,
    sinkListItem,
} from 'prosemirror-schema-list';

// Add the listNodes to the schema from prosemirror-schema-basic
const listNodes = addListNodes(schema.spec.nodes, "paragraph block*", "block");
