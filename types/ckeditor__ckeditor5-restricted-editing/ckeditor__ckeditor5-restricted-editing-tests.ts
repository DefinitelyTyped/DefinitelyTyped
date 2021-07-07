import { Editor } from '@ckeditor/ckeditor5-core';
import { Element, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import {
    RestrictedEditingMode,
    RestrictedEditingModeEditing,
    RestrictedEditingModeUI,
    StandardEditingMode,
    StandardEditingModeEditing,
    StandardEditingModeUI,
} from '@ckeditor/ckeditor5-restricted-editing';
import RestrictedEditingExceptionCommand from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingexceptioncommand';
import * as converters from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode/converters';
import * as utils from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode/utils';
import RestrictedEditingModeNavigationCommand from '@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmodenavigationcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

RestrictedEditingMode.requires.forEach(Plugin => new Plugin(editor).init());
new RestrictedEditingMode(editor);

new RestrictedEditingModeUI(editor).init();

new RestrictedEditingModeEditing(editor).init();

StandardEditingMode.requires.forEach(Plugin => new Plugin(editor).init());
new StandardEditingMode(editor);

new StandardEditingModeUI(editor).init();

new StandardEditingModeEditing(editor).init();

new RestrictedEditingExceptionCommand(editor).execute({ forceValue: true });
new RestrictedEditingExceptionCommand(editor).execute();
new RestrictedEditingExceptionCommand(editor).refresh();

new RestrictedEditingModeNavigationCommand(editor, 'forward').execute();
new RestrictedEditingModeNavigationCommand(editor, 'backward').refresh();

converters.upcastHighlightToMarker({ converterPriority: 'low', view: '', model: new Element('div') });
converters.setupExceptionHighlighting(editor);
converters.extendMarkerOnTypingPostFixer(editor);
converters.resurrectCollapsedMarkerPostFixer(editor);

const marker = utils.getMarkerAtPosition(editor, new Position(new Element('div'), [0]));
if (marker) {
    marker.is('foo');
    utils.isSelectionInMarker(new Selection(new Position(new Element('div'), [0])), marker);
}
utils.isPositionInRangeBoundaries(
    new Range(new Position(new Element('div'), [0])),
    new Position(new Element('div'), [0]),
);
