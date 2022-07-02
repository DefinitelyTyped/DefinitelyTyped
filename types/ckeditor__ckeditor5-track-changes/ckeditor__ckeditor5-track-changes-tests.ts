import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Model, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import AcceptAllSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptallsuggestionscommand';
import AcceptSelectedSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptselectedsuggestionsinselection';
import AcceptSuggestionCommand from '@ckeditor/ckeditor5-track-changes/src/commands/acceptsuggestioncommand';
import DiscardAllSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardallsuggestionscommand';
import DiscardSuggestionCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardsuggestioncommand';
import DiscardSelectedSuggestionsCommand from '@ckeditor/ckeditor5-track-changes/src/commands/discardsuggestionsinselection';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges';
import TrackChangesCommand from '@ckeditor/ckeditor5-track-changes/src/trackchangescommand';
import TrackChangesData from '@ckeditor/ckeditor5-track-changes/src/trackchangesdata';
import SuggestionThreadView from '@ckeditor/ckeditor5-track-changes/src/ui/view/suggestionthreadview';
import { Locale } from '@ckeditor/ckeditor5-utils';
import Suggestion from '@ckeditor/ckeditor5-track-changes/src/suggestion';
import SuggestionDescriptionFactory from '@ckeditor/ckeditor5-track-changes/src/suggestiondescriptionfactory';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';

class MyEditor extends Editor {}
const editor = new MyEditor();

const trackChanges = new TrackChanges(editor);
// $ExpectType Suggestion
trackChanges.getSuggestion('foo');
// $ExpectType Suggestion
trackChanges.getSuggestions()[0];
// $ExpectType Suggestion
trackChanges.getSuggestions({ skipNotAttached: true, toJSON: true })[0];

trackChanges.addSuggestion({
    attributes: {},
    authorId: '',
    createdAt: new Date(),
    data: {},
    hasComments: true,
    id: '',
    type: '',
});

const suggestion = new Suggestion(new Model());
suggestion.accept();
suggestion.addRange(new Range(new Position(suggestion.getContainedElement()!, [5])));
// $ExpectType Suggestion
suggestion.getAllAdjacentSuggestions()[0];
// $ExpectType Range
suggestion.getRanges()[0];

const data = new TrackChangesData(editor);
data.getDataWithAcceptedSuggestions({ rootName: '' });
data.getDataWithDiscardedSuggestions({ rootName: '', trim: 'empty' }).then(str => str.startsWith(''));

new TrackChangesCommand(editor, new Set()).execute();
const suggestionsMap = new Map([['', new Suggestion(new Model())]]);
const discardSuggestionCommand = new DiscardSuggestionCommand(editor, suggestionsMap);
discardSuggestionCommand.execute();
new DiscardAllSuggestionsCommand(editor, discardSuggestionCommand, suggestionsMap).execute();

new AcceptSuggestionCommand(editor, suggestionsMap).execute();

new AcceptAllSuggestionsCommand(editor, new AcceptSuggestionCommand(editor, suggestionsMap), suggestionsMap);

new DiscardSelectedSuggestionsCommand(editor, discardSuggestionCommand, suggestionsMap);

new AcceptSelectedSuggestionsCommand(editor, new AcceptSuggestionCommand(editor, suggestionsMap), suggestionsMap);

// $ExpectType TemplateDefinition
new SuggestionThreadView(new Locale(), new Suggestion(new Model()), new User()).getTemplate();

const factory = new SuggestionDescriptionFactory(new Schema(), new Locale());
// $ExpectType Description[]
factory.getDescriptions(Array.from(suggestionsMap.values()));
factory.registerDescriptionCallback(s => factory.getDescriptions([s])[0]);
// $ExpectType string
factory.getItemLabel('', 0);
factory.registerElementLabel('', (q: number) => `${q}`);

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
