import '../index';

// NOTE: intentional; needed for config extensibility
// tslint:disable-next-line:no-declare-current-package
declare module 'atom' {
    interface ConfigValues {
        /**
         *  Suggestions will show as you type if this preference is enabled. If it is
         *  disabled, you can still see suggestions by using the keymapping for
         *  'autocomplete-plus:activate' (shown below).
         */
        'autocomplete-plus.enableAutoActivation': boolean;

        /**
         *  If you are experiencing performance issues when typing, you should try
         *  increasing this value to a non-zero number (e.g. 100).
         */
        'autocomplete-plus.autoActivationDelay': number;

        /** The suggestion list will only show this many suggestions. */
        'autocomplete-plus.maxVisibleSuggestions': number;

        /**
         *  You should use the key(s) indicated here to confirm a suggestion from the
         *  suggestion list and have it inserted into the file.
         */
        'autocomplete-plus.confirmCompletion':
            | 'tab'
            | 'enter'
            | 'tab and enter'
            | 'tab always, enter when suggestion explicitly selected';

        /**
         *  Disable this if you want to bind your own keystrokes to move around the
         *  suggestion list. You will also need to add definitions to your keymap.
         */
        'autocomplete-plus.useCoreMovementCommands': boolean;

        /**
         *  Suggestions will not be provided for files matching this list, e.g. *.md
         *  for Markdown files. To blacklist more than one file extension, use comma
         *  as a separator, e.g. ["*.md", "*.txt"] (both Markdown and text files).
         */
        'autocomplete-plus.fileBlacklist': string[];

        /** Suggestions will not be provided for scopes matching this list. */
        'autocomplete-plus.scopeBlacklist': string[];

        /**
         *  For grammars with no registered provider(s), the default provider will
         *  include completions from all buffers, instead of just the buffer you are
         *  currently editing.
         */
        'autocomplete-plus.includeCompletionsFromAllBuffers': boolean;

        /**
         *  Fuzzy searching is performed if this is disabled; if it is enabled, suggestions
         *  must begin with the prefix from the current word.
         */
        'autocomplete-plus.strictMatching': boolean;

        /**
         *  Only autocomplete when you've typed at least this many characters.
         *  Note: May not affect external providers.
         */
        'autocomplete-plus.minimumWordLength': number;

        /**
         *  The package comes with a built-in provider that will provide suggestions
         *  using the words in your current buffer or all open buffers. You will get
         *  better suggestions by installing additional autocomplete+ providers.
         *  To stop using the built-in provider, disable this option.
         */
        'autocomplete-plus.enableBuiltinProvider': boolean;

        /** Don't use the built-in provider for these selector(s). */
        'autocomplete-plus.builtinProviderBlacklist': string;

        /**
         *  If enabled, typing `backspace` will show the suggestion list if suggestions
         *  are available. If disabled, suggestions will not be shown while backspacing.
         */
        'autocomplete-plus.backspaceTriggersAutocomplete': boolean;

        /**
         *  If enabled, automatically insert suggestion on manual activation with
         *  'autocomplete-plus:activate' when there is only one match.
         */
        'autocomplete-plus.enableAutoConfirmSingleSuggestion': boolean;

        /**
         *  With 'Cursor' the suggestion list appears at the cursor's position.
         *  With 'Word' it appears at the beginning of the word that's being completed.
         */
        'autocomplete-plus.suggestionListFollows': 'Word' | 'Cursor';

        /**
         *  If you're having trouble with autocomplete, you may consider falling back
         *  to the Symbol provider and filing an issue.
         */
        'autocomplete-plus.defaultProvider': 'Subsequence' | 'Symbol';

        /** Don't auto-activate when any of these classes are present in the editor. */
        'autocomplete-plus.suppressActivationForEditorClasses': string[];

        /**
         *  Completing a suggestion consumes text following the cursor matching the
         *  suffix of the chosen suggestion.
         */
        'autocomplete-plus.consumeSuffix': boolean;

        /**
         *  -EXPERIMENTAL- Prefers runs of consecutive characters, acronyms and start
         *  of words.
         */
        'autocomplete-plus.useAlternateScoring': boolean;

        /** Gives words near the cursor position a higher score than those far away. */
        'autocomplete-plus.useLocalityBonus': boolean;

        /** Identifies non-latin alphabet characters as letters. */
        'autocomplete-plus.enableExtendedUnicodeSupport': boolean;

        /**
         *  Should similar suggestions be removed from the list? If so how to determine
         *  they are similar.
         */
        'autocomplete-plus.similarSuggestionRemoval': 'none' | 'textOrSnippet';
    }
}
