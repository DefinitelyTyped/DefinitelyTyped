import rangy = require('rangy');
import 'rangy/lib/rangy-selectionsaverestore';
import { assertAny, assertBoolean, assertRangyRange } from './test-utils';

function testSelectionSaveRestore() {
    const savedSelection: object | null = rangy.saveSelection();
    assertAny(savedSelection);
    const restored: boolean = rangy.restoreSelection(savedSelection, true);
    assertBoolean(restored);
    rangy.restoreSelection(savedSelection); // No preserveDirection

    const range: Range = rangy.createNativeRange();
    const savedRange: object = rangy.saveRange(range);
    assertAny(savedRange);
    const restoredRange: Range = rangy.restoreRange(savedRange);
    assertAny(restoredRange);
    rangy.restoreRange(savedRange, true); // With normalize

    const ranges: Range[] = [range];
    const savedRanges: object[] = rangy.saveRanges(ranges);
    assertAny(savedRanges.length);
    rangy.saveRanges(ranges, 'forward');
    rangy.saveRanges(ranges, true); // Direction as boolean
    const restoredRanges: Range[] = rangy.restoreRanges(savedRanges);
    assertAny(restoredRanges.length);

    rangy.removeMarkers(savedSelection);
}