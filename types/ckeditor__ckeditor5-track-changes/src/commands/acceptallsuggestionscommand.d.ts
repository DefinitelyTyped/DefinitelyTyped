import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';

export default class AcceptAllSuggestionsCommand extends Command {
    constructor(editor: Editor, acceptSuggestionCommand: AcceptSuggestionCommand, suggestions: Map<string, Suggestion>);
}
