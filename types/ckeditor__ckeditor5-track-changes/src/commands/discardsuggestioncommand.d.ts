import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';

export default class DiscardSuggestionCommand extends Command {
    constructor(editor: Editor, suggestions: Map<string, Suggestion>);
}

declare module '@ckeditor/ckeditor5-core/src/commandcollection' {
    interface Commands {
        DiscardSuggestionCommand: DiscardSuggestionCommand;
    }
}
