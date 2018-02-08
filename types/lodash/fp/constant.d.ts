// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

type Constant = 
    /**
     * Creates a function that returns value.
     *
     * @param value The value to return from the new function.
     * @return Returns the new function.
     */
    <T>(value: T) => () => T;

declare const constant: Constant;
declare namespace constant {}
export = constant;
