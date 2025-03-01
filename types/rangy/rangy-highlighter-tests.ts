import rangy = require('rangy');
import 'rangy/lib/rangy-highlighter';
import { assertAny, assertBoolean, assertString, assertRangyRange } from './test-utils';

function testRangyHighlighter() {
    let highlighter: RangyHighlighter = rangy.createHighlighter();
    highlighter = rangy.createHighlighter(document);
    highlighter = rangy.createHighlighter(window);
    highlighter = rangy.createHighlighter(new HTMLIFrameElement());
    highlighter = rangy.createHighlighter(document, 'textContent');
    highlighter = rangy.createHighlighter(document, 'textRange');

    const classApplier: RangyClassApplier = rangy.createClassApplier('highlight');
    highlighter.addClassApplier(classApplier);
    highlighter.addClassApplier(classApplier, { priority: 10, exclusive: true });

    let highlightIds: string[] = highlighter.highlightSelection('highlight');
    assertAny(highlightIds.length);
    highlightIds = highlighter.highlightSelection('highlight', { exclusive: true });
    assertAny(highlightIds[0]);
    highlightIds = highlighter.highlightSelection('highlight', { containerElementId: 'container' });
    assertAny(highlightIds.join(','));
    highlightIds = highlighter.highlightSelection('highlight', {
        selection: rangy.getSelection(),
        exclusive: true,
        containerElementId: 'container'
    });
    assertString(highlightIds[0]);

    const unhighlighted: boolean = highlighter.unhighlightSelection();
    assertBoolean(unhighlighted);
    const unhighlightedWithSelection: boolean = highlighter.unhighlightSelection(rangy.getSelection());
    assertBoolean(unhighlightedWithSelection);

    highlighter.removeAllHighlights();

    const serialized: string = highlighter.serialize();
    assertString(serialized);
    const specificSerialized: string = highlighter.serialize([]);
    assertString(specificSerialized);

    const highlights: RangyHighlight[] = highlighter.deserialize(serialized);
    assertAny(highlights.length);

    const element = document.createElement('span');
    const highlight: RangyHighlight | null = highlighter.getHighlightForElement(element);
    if (highlight) {
        const id: string = highlight.id;
        assertString(id);
        const applier: RangyClassApplier = highlight.classApplier;
        assertAny(applier);
        const charRange = highlight.characterRange;
        assertAny(charRange.start);
        assertAny(charRange.end);
        assertAny(charRange.containerElement);
        const containsEl: boolean = highlight.containsElement(document.body);
        assertBoolean(containsEl);
        const containsRange: boolean = highlight.containsRange(rangy.createRange());
        assertBoolean(containsRange);
        const intersectsRange: boolean = highlight.intersectsRange(rangy.createRange());
        assertBoolean(intersectsRange);
        const isCharRange: boolean = highlight.isCharacterRange(document.body);
        assertBoolean(isCharRange);
        const range: RangyRange = highlight.getRange();
        assertRangyRange(range);
        const rangeWithContainer: RangyRange = highlight.getRange(document.body);
        assertRangyRange(rangeWithContainer);
    }
}