import { Editor } from '@ckeditor/ckeditor5-core';
import { Model, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import * as TrackChanges from '@ckeditor/ckeditor5-track-changes';

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
const range: Range = suggestion.getRanges()[0];

const data = new TrackChanges.TrackChangesData(editor);
data.getDataWithAcceptedSuggestions({ rootName: '' });
data.getDataWithDiscardedSuggestions({ rootName: '', trim: 'empty' }).then(str => str.startsWith(''));
