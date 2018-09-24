/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**Utility to check arguments. */
export declare class ArgumentUtil {
    /**
     * Checks that argument is not null.
     * @param obj Argument to check.
     * @param paramName Argument name.
     */
    static CheckArgumentNotNull(obj: Object, paramName: string): void;
    /**
     * Checks argument for certain condition.
     * @param b Condition result.
     * @param s Argument name.
     */
    static CheckArgument(b: boolean, s: string): void;
}
