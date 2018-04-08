// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Add {
    /**
     * Adds two numbers.
     *
     * @param augend The first number to add.
     * @param addend The second number to add.
     * @return Returns the sum.
     */
    (): Add;
    /**
     * Adds two numbers.
     *
     * @param augend The first number to add.
     * @param addend The second number to add.
     * @return Returns the sum.
     */
    (augend: number): Add1x1;
    /**
     * Adds two numbers.
     *
     * @param augend The first number to add.
     * @param addend The second number to add.
     * @return Returns the sum.
     */
    (augend: number, addend: number): number;
}
interface Add1x1 {
    /**
     * Adds two numbers.
     *
     * @param augend The first number to add.
     * @param addend The second number to add.
     * @return Returns the sum.
     */
    (): Add1x1;
    /**
     * Adds two numbers.
     *
     * @param augend The first number to add.
     * @param addend The second number to add.
     * @return Returns the sum.
     */
    (addend: number): number;
}

declare const add: Add;
export = add;
