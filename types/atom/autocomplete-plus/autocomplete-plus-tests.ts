import {
    SuggestionsRequestedEvent,
    Suggestion,
    Suggestions,
    SuggestionInsertedEvent,
    AutocompleteProvider,
} from './index.d';
import { TextEditor, Point } from '../index.d';

// https://github.com/atom/autocomplete-plus/wiki/Provider-API#suggestions
const suggestion: Suggestion = {
    text: 'someText',
    snippet: 'someText(${1:myArg})',
    displayText: 'someText',
    replacementPrefix: 'so',
    type: 'function',
    leftLabel: '',
    leftLabelHTML: '',
    rightLabel: '',
    rightLabelHTML: '',
    className: '',
    iconHTML: '',
    description: '',
    descriptionMoreURL: '',
    // characterMatchIndices: [0, 1, 2], // TODO missing in the types
};

const suggestionsRequestedEvent: SuggestionsRequestedEvent = {
    editor: new TextEditor(),

    bufferPosition: new Point(),

    scopeDescriptor: {
        getScopesArray() {
            return ['source.js'];
        },
    },

    prefix: '',

    activatedManually: false,
};

// https://github.com/atom/autocomplete-plus/wiki/Provider-API#defining-a-provider
const provider: AutocompleteProvider = {
    selector: '.source.js, .source.coffee',
    disableForSelector: '.source.js .comment',

    inclusionPriority: 1,
    excludeLowerPriority: true,

    suggestionPriority: 2,

    filterSuggestions: true,

    getSuggestions({
        editor,
        bufferPosition,
        scopeDescriptor,
        prefix,
        activatedManually,
    }: SuggestionsRequestedEvent): Promise<Suggestions> {
        return new Promise(resolve => resolve([{ text: 'something' }]));
    },

    getSuggestionDetailsOnSelect(suggestion) {
        return new Promise(resolve => resolve(suggestion));
    },

    onDidInsertSuggestion({ editor, triggerPosition, suggestion }: SuggestionInsertedEvent) {},

    dispose() {},
};

async function testFun() {
    const suggestions = await provider.getSuggestions(suggestionsRequestedEvent);

    const suggestionInsertedEvent: SuggestionInsertedEvent = {
        editor: new TextEditor(),
        triggerPosition: new Point(),
        suggestion: suggestions[0],
    };
}
