import rangy = require('rangy');
import 'rangy/lib/rangy-serializer';
import { assertAny, assertBoolean, assertString, assertRangyRange } from './test-utils';

function testSerializer() {
    const selection: RangySelection = rangy.getSelection();
    const serializedSel: string = rangy.serializeSelection(selection);
    assertString(serializedSel);
    rangy.serializeSelection(selection, true); // omitChecksum
    rangy.serializeSelection(selection, false, document.body);

    const canDeserializeSel: boolean = rangy.canDeserializeSelection(serializedSel);
    assertBoolean(canDeserializeSel);
    rangy.canDeserializeSelection(serializedSel, document.body);

    const deserializedSel: RangySelection = rangy.deserializeSelection(serializedSel);
    assertAny(deserializedSel);
    rangy.deserializeSelection(serializedSel, document.body, window);

    const range: RangyRange = rangy.createRange();
    const serializedRange: string = rangy.serializeRange(range);
    assertString(serializedRange);
    rangy.serializeRange(range, true, document.body);

    const canDeserializeRange: boolean = rangy.canDeserializeRange(serializedRange);
    assertBoolean(canDeserializeRange);
    rangy.canDeserializeRange(serializedRange, document.body);

    const deserializedRange: RangyRange = rangy.deserializeRange(serializedRange);
    assertRangyRange(deserializedRange);
    rangy.deserializeRange(serializedRange, document.body, document);

    const serializedPos: string = rangy.serializePosition(document.body, 0);
    assertString(serializedPos);
    rangy.serializePosition(document.body, 0, document.body);

    const pos: DomPosition = rangy.deserializePosition(serializedPos);
    assertAny(pos.node);
    assertAny(pos.offset);
    rangy.deserializePosition(serializedPos, document.body, document);

    rangy.saveSelectionCookie(window);
    rangy.saveSelectionCookie(window, { expires: new Date(), path: '/', secure: true });

    const restoredFromCookie: boolean = rangy.restoreSelectionFromCookie(window);
    assertBoolean(restoredFromCookie);
}