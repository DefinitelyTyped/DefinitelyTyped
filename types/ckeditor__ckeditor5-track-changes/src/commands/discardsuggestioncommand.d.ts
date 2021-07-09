import { Command, Editor } from '@ckeditor/ckeditor5-core';
import Suggestion from '../suggestion';

export default class DiscardSuggestionCommand extends Command {
    constructor(editor: Editor, suggestions: Map<string, Suggestion>);
}
