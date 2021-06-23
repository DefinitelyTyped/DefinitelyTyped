// Type definitions for inquirer-fuzzy-path 2.3
// Project: https://github.com/adelsz/inquirer-fuzzy-path
// Definitions by: 迷子 (Maiko Tan) <https://github.com/MaikoTan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Answers, KeyUnion, QuestionCollection } from 'inquirer';
import { AutocompleteQuestionOptions } from 'inquirer-autocomplete-prompt';
import InquirerAutocomplete = require('inquirer-autocomplete-prompt');
import { Interface as ReadlineInterface } from 'readline';

export = InquirerFuzzyPath;

/**
 * Provides the functionality to create a new Inquirer plugin
 */
declare class InquirerFuzzyPath<T> extends InquirerAutocomplete<T> {
    /**
     * Create new InquirerFuzzyPath
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
     * Curate list of choices.
     *
     * @param searchTerm
     * The term to search for
     */
    search(searchTerm: string): Promise<void>;

    /**
     * When user presses `enter` key
     *
     * @param line
     * The input on the line.
     */
    onSubmit(line: string): void;
}

/**
 * Provides inquirer prompt options for type `InquirerFuzzyPath`.
 */
declare namespace InquirerFuzzyPath {
    /**
     * Provides options for a question of type `InquirerFuzzyPath`.
     *
     * @template T
     * The type of the answers.
     */
    interface FuzzyPathQuestionOptions<T extends Answers = Answers>
        extends Omit<AutocompleteQuestionOptions<T>, 'type'> {
        /**
         * The key to save the answer to the answers-hash.
         */
        type: 'fuzzypath';

        /**
         * The key to save the answer to the answers-hash.
         */
        name: KeyUnion<T>;

        /**
         * The root search directory, default to ".".
         */
        rootPath?: string;

        /**
         * A function to exclude some paths from the file-system scan.
         */
        excludePath?: (path: string) => boolean;

        /**
         * A function to exclude some paths from the final list.
         */
        excludeFilter?: (path: string) => boolean;

        /**
         * A string to specify the type of nodes to display, default to "any".
         */
        itemType?: 'any' | 'directory' | 'file';

        /**
         * An integer (>= 0) to limit the depth of sub-folders to scan,
         * undefined means infinite.
         */
        depthLimit?: number;
    }
}
