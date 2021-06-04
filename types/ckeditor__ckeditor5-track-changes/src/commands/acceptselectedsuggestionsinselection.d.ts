import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';
import AcceptSuggestionCommand from './acceptsuggestioncommand';

export default class AcceptSelectedSuggestionsCommand extends Command {
    constructor(editor: Editor, acceptSuggestionCommand: AcceptSuggestionCommand, suggestions: Map<string, Suggestion>);
}
