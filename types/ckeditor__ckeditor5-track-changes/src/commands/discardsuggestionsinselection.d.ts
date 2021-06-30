import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';
import DiscardSuggestionCommand from './discardsuggestioncommand';

export default class DiscardSelectedSuggestionsCommand extends Command {
    constructor(
        editor: Editor,
        discardSuggestionCommand: DiscardSuggestionCommand,
        suggestions: Map<string, Suggestion>,
    );
}
