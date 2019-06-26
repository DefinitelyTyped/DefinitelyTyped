import inquirer = require("..");
import { DynamicQuestionProperty } from "./DynamicQuestionProperty";

/**
 * Represents a list-based question.
 */
export interface ListQuestion<T> extends inquirer.poll.Question<T> {
    /**
     * Choices array or a function returning a choices array. If defined as a function,
     * the first parameter will be the current inquirer session answers. Array values can
     * be simple `numbers`, `strings`, or `objects` containing a `name` (to display in list),
     * a `value` (to save in the answers hash) and a `short` (to display after selection)
     * properties. The choices array can also contain
     * [a Separator](https://github.com/SBoudrias/Inquirer.js#separator).
     */
    choices?: DynamicQuestionProperty<T, ReadonlyArray<inquirer.poll.DistinctChoice>>;
    /**
     * Change the number of lines that will be rendered when using `list`, `rawList`,
     * `expand` or `checkbox`.
     */
    pageSize?: number;
}