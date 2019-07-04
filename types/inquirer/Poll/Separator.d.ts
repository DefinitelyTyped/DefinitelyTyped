import inquirer = require("..");
import { ChoiceBase } from "./ChoiceBase";

/**
 * Represents a choice-item separator.
 */
export class Separator implements ChoiceBase, inquirer.poll.SeparatorOptions {
    /**
     * @inheritdoc
     */
    public readonly type: "separator";

    /**
     * @inheritdoc
     */
    public line: string;

    /**
     * Initializes a new instance of the `Separator` class.
     *
     * @param line
     * The text of the separator.
     */
    public constructor(line?: string);

    /**
     * Checks whether the specified `item` is not a separator.
     *
     * @param item
     * The item to check.
     *
     * @returns
     * A value indicating whether the item is not a separator.
     */
    public static exclude(item: any): boolean;
}