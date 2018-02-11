// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface ForOwnRight {
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    (): ForOwnRight;
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    <T>(iteratee: (value: T) => any): ForOwnRight1x1<T>;
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    <T>(iteratee: (value: T[keyof T]) => any, object: T): T;
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    <T>(iteratee: (value: T[keyof T]) => any, object: T | null | undefined): T | null | undefined;
}
interface ForOwnRight1x1<T> {
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    (): ForOwnRight1x1<T>;
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    <T1 extends object>(object: T1): T1;
    /**
     * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
     *
     * @param object The object to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     * @return Returns object.
     */
    <T1 extends object>(object: T1 | null | undefined): T1 | null | undefined;
}

declare const forOwnRight: ForOwnRight;
export = forOwnRight;
