import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';
import AcceptSuggestionCommand from './acceptsuggestioncommand';

export default class AcceptAllSuggestionsCommand extends Command {
    constructor(editor: Editor, acceptSuggestionCommand: AcceptSuggestionCommand, suggestions: Map<string, Suggestion>);
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        AcceptAllSuggestionsCommand: AcceptAllSuggestionsCommand;
    }
}
