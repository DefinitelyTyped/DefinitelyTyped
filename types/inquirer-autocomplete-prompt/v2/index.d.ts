import { Answers, KeyUnion, Question, QuestionCollection } from "inquirer";
import Choices = require("inquirer/lib/objects/choices");
import Base = require("inquirer/lib/prompts/base");
import Paginator = require("inquirer/lib/utils/paginator");
import { Interface as ReadlineInterface } from "readline";

export = AutocompletePrompt;

/**
 * Provides the functionality to create a new Inquirer plugin
 */
declare class AutocompletePrompt<T extends Answers> extends Base {
    /**
     * The choices currently available on the prompt
     */
    currentChoices: Choices;

    /**
     * Flag that is true on first render
     */
    firstRender: boolean;

    /**
     * Currently selected choice index
     */
    selected: number;

    /**
     * Initial value of answer
     */
    initialValue: any;

    /**
     * Paginator for choices
     */
    paginator: Paginator;

    /**
     * Questions to prompt
     */
    questions: QuestionCollection<T>;

    /**
     * Create new AutocompletePrompt
     *
     * @param questions
     * The questions to prompt
     * @param rl
     * The readline interface
     * @param answers
     * The currently supplied answers
     */
    constructor(questions: QuestionCollection<T>, rl: ReadlineInterface, answers: Answers);

    /**
     * Render the prompt to screen
     */
    render(error: string | undefined): void;

    /**
     * When user presses `enter` key
     *
     * @param line
     * The input on the line.
     */
    onSubmit(line: string): void;

    /**
     * When user presses `enter` key and validation has passed.
     *
     * @param line
     * The input on the line.
     */
    onSubmitAfterValidation(line: string): void;

    /**
     * Curate list of choices.
     *
     * @param searchTerm
     * The term to search for
     */
    search(searchTerm: string): Promise<void>;

    /**
     * Verify selected range is not out of bounds
     */
    ensureSelectedInRange(): void;

    /**
     * When user types
     *
     * @param e
     * Object containing info on the key pressed and the value of the selected option
     */
    onKeypress(e: { key: { name: string; ctrl: boolean }; value: string }): void;
}

/**
 * Provides inquirer prompt options for type `AutocompletePrompt`.
 */
declare namespace AutocompletePrompt {
    /**
     * Provides options for a question of type `AutocompletePrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface AutocompleteQuestionOptions<T extends Answers = Answers> extends Question<T> {
        /**
         * The key to save the answer to the answers-hash.
         */
        type: "autocomplete";

        /**
         * The key to save the answer to the answers-hash.
         */
        name: KeyUnion<T>;

        /**
         * Function to determine what options to display to user.
         * Called with previous answers object and the current user input each time the user types, it must return a promise.
         */
        source: (answersSoFar: T, input: string | undefined) => Promise<any[]>;

        /**
         * The number of elements to show on each page.
         */
        pageSize?: number | undefined;

        /**
         * default false. Setting it to true turns the input into a normal text input.
         */
        suggestOnly?: boolean | undefined;

        /**
         * Is the text shown when searching. Defaults: Searching...
         */
        searchText?: boolean | undefined;

        /**
         *  Is the text shown if the search returns no results. Defaults: No results...
         */
        emptyText?: boolean | undefined;
    }
}
