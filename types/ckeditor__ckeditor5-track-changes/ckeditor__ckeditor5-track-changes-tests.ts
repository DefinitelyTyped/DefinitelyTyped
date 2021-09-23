import { Editor } from '@ckeditor/ckeditor5-core';
import { Model, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import * as TrackChanges from '@ckeditor/ckeditor5-track-changes';
import TrackChangesCommand from '@ckeditor/ckeditor5-track-changes/src/trackchangescommand';
import DiscardSuggestionCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardsuggestioncommand';
import DiscardAllSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardallsuggestionscommand';
import AcceptSuggestionCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptsuggestioncommand';
import AcceptAllSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptallsuggestionscommand';
import DiscardSelectedSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardsuggestionsinselection';
import AcceptSelectedSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptselectedsuggestionsinselection';

class MyEditor extends Editor {}
const editor = new MyEditor();

const trackChanges = new TrackChanges.TrackChanges(editor);
let suggestion: TrackChanges.Suggestion = trackChanges.getSuggestion('foo');
suggestion = trackChanges.getSuggestions()[0];
suggestion = trackChanges.getSuggestions({ skipNotAttached: true, toJSON: true })[0];
trackChanges.addSuggestion({
    attributes: {},
    authorId: '',
    createdAt: new Date(),
    data: {},
    hasComments: true,
    id: '',
    type: '',
});

suggestion = new TrackChanges.Suggestion(new Model());
suggestion.accept();
suggestion.addRange(new Range(new Position(suggestion.getContainedElement()!, [5])));
suggestion = suggestion.getAllAdjacentSuggestions()[0];
// $ExpectType Range
suggestion.getRanges()[0];

const data = new TrackChanges.TrackChangesData(editor);
data.getDataWithAcceptedSuggestions({ rootName: '' });
data.getDataWithDiscardedSuggestions({ rootName: '', trim: 'empty' }).then(str => str.startsWith(''));

new TrackChangesCommand(editor, new Set()).execute();
const suggestionsMap = new Map([['', new TrackChanges.Suggestion(new Model())]]);
new DiscardSuggestionCommand(editor, suggestionsMap).execute();

// $ExpectType TrackChanges
editor.plugins.get('TrackChanges');

// $ExpectType TrackChangesData
editor.plugins.get('TrackChangesData');

// $ExpectType TrackChangesEditing
editor.plugins.get('TrackChangesEditing');

// $ExpectType TrackChangesCommand | undefined
editor.commands.get('TrackChangesCommand');

// $ExpectType DiscardSuggestionCommand | undefined
editor.commands.get('DiscardSuggestionCommand');

// $ExpectType AcceptSuggestionCommand | undefined
editor.commands.get('AcceptSuggestionCommand');

// $ExpectType DiscardAllSuggestionsCommand | undefined
editor.commands.get('DiscardAllSuggestionsCommand');

// $ExpectType AcceptAllSuggestionsCommand | undefined
editor.commands.get('AcceptAllSuggestionsCommand');

// $ExpectType DiscardSelectedSuggestionsCommand | undefined
editor.commands.get('DiscardSelectedSuggestionsCommand');

// $ExpectType AcceptSelectedSuggestionsCommand | undefined
editor.commands.get('AcceptSelectedSuggestionsCommand');
