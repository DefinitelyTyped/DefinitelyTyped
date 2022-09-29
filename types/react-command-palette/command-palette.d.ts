import * as React from 'react';

export interface Command {
    id: number;
    color: string;
    name: string;
    command(this: Command): void;
}

export interface Props {
    /**
     * alwaysRenderCommands a boolean, Set it to true if you'd like to render suggestions
     * even when the input is not focused.
     *
     * @default true
     */
    alwaysRenderCommands?: boolean;

    /**
     * commands appears in the command palette. For each command in the array the object
     * must have a _name_ and a _command_. The _name_ is a user friendly string that will
     * be display to the user. The command is a function that will be executed when the
     * user clicks or presses the enter key. Commands may also include custom properties
     * this" will be bound to the command
     */
    commands: Command[];

    /**
     * maxDisplayed a number between 1 and 500 that determines the maximum number of
     * commands that will be rendered on screen.
     *
     * @default 7
     */
    maxDisplayed?: (props: { maxDisplayed: number }, propName: string, componentName: string) => Error | null;

    /**
     * placeholder a string that contains a short text description which is displayed
     * inside the the input field until the user provides input.
     *
     * @default 'Type a command'
     */
    placeholder?: string;

    /**
     * hotKeys a string or array of strings that contain a keyboard shortcut for
     * opening/closing the palette.
     *
     * @default 'command+shift+p'
     */
    hotKeys?: string[] | string;

    /**
     * defaultInputValue a string that determines the value of the text in the input field.
     *
     * @default ''
     */
    defaultInputValue?: string;

    /**
     * When highlightFirstSuggestion={true}, Autosuggest will automatically highlight the
     *  first suggestion.
     *
     * @default true
     */
    highlightFirstSuggestion?: boolean;

    /**
     * When suggestion is clicked, react-autosuggest needs to populate the input element
     * based on the clicked suggestion. Teach react-autosuggest how to calculate the
     * input value for every given suggestion. By default the highlighed suggestion will be
     * displayed
     */
    getSuggestionValue?: (suggestion: Command) => string;

    /**
     * options controls how fuzzy search is configured see [fuzzysort options]
     *
     * @default
     * @see {@link https://github.com/farzher/fuzzysort#options}
     */
    options?: Record<string, unknown>;

    /**
     * a function that filters the search query. If this prop is not used the default
     * behavior will search the input exactly entered
     */
    filterSearchQuery?: (inputValue: string) => string;

    /**
     * open a boolean, when set to true it forces the command palette to be displayed.
     *
     * @default false.
     */
    open?: boolean;

    /**
     * onHighlight a function that's called when the highlighted suggestion changes.
     */
    onHighlight?: (suggestion: Record<string, unknown>) => void;

    /**
     * onSelect a function that's called when the selected suggestion changes, given the
     * user selects an item or the user clears the selection. It's called with the item that
     * was selected or null
     */
    onSelect?: (command: Record<string, unknown>) => void;

    /**
     * onChange a function that's called when the input value changes.
     */
    onChange?: (inputValue: string, userQuery: string) => void;

    /**
     * onAfterOpen a function that fires after the command palette modal is opened
     */
    onAfterOpen?: () => void;

    /**
     * onRequestClose a function that fires after the command palette modal is closed
     */
    onRequestClose?: () => void;

    /**
     * display one of "modal" or "inline", when set to "modal" the command palette is
     * rendered centered inside a modal. When set to "inline", it is render inline with
     * other page content.
     *
     * @default 'modal'
     */
    display?: 'modal' | 'inline';

    /**
     * header a string or a React.ComponentType which provides a helpful description for
     * the usage of the command palette. The component is displayed at the top of the
     * command palette. header are not displayed by default. see: examples
     * sampleInstruction.js for reference
     *
     * @default null
     */
    header?: React.ReactNode | null;

    /**
     * trigger a string or a React.ComponentType that opens the command palette when
     * clicked. If a custom trigger is not set, then by default a button will be used. If a
     * custom component or string is provided then it will automatically be wrapped inside
     * an accessible div which will allow it be keyboard accessible, clickable and focusable
     * for assistive technologies.
     */
    trigger?: React.ReactNode;

    /**
     * spinner a string or a React.ComponentType that is displayed when the user selects
     * an item. If a custom spinner is not set then the default spinner will be used. If
     * custom component or string is provided then it will automatically be wrapped inside
     * a div with a role="status" attribute. If a component is provided then it will be be
     * wrapped in a div that also contains a sibling node with a div contain "Loading..."
     * visible only to screen readers.
     */
    spinner?: React.ReactNode;

    /**
     * showSpinnerOnSelect a boolean which displays a loading indicator immediately after
     * a command has been selected. When true the spinner is enabled when false the spinner
     * is disabled.
     *
     * @default true
     */
    showSpinnerOnSelect?: boolean;

    /**
     * shouldReturnFocusAfterClose a boolean indicate if the modal should restore focus to
     * the element that had focus prior to its display.
     *
     * @default true
     */
    shouldReturnFocusAfterClose?: boolean;

    /**
     * closeOnSelect a boolean, when true selecting an item will immediately close the
     * command-palette
     *
     * @default false
     */
    closeOnSelect?: boolean;

    /**
     * resetInputOnOpen a boolean which indicates whether to reset the user's query
     * to `defaultInputValue` when the command palette opens.
     *
     * @default false
     */
    resetInputOnOpen?: boolean;

    /**
     * a selector compatible with querySelector. By default, the modal portal will be
     * appended to the document's body. You can choose a different parent element by
     * selector. If you do this, please ensure that your app element is set correctly. The
     * app element should not be a parent of the modal, to prevent modal content from being
     * hidden to screenreaders while it is open.
     *
     * @default 'body'
     */
    reactModalParentSelector?: string;

    /**
     * a React.func that defines the layout and contents of the commands in the
     * command list. For complete documentation see the storybook notes.
     *
     * @default null
     */
    renderCommand?: ((command: Command) => React.ReactNode) | null;

    /**
     * Styles and object that contains a list of key value pairs where the keys map the
     * command palette components to their CSS class names.
     *
     * @default
     * @see {@link https://github.com/asabaylus/react-command-palette/blob/main/src/themes/theme.js}
     */
    theme?: Record<string, string>;
}

export default class CommandPalette extends React.Component<Props> {}
