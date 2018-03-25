// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Defaults {
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    (): Defaults;
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    <TSource>(source: TSource): Defaults1x1<TSource>;
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    <TObject, TSource>(source: TSource, object: TObject): TSource & TObject;
}
interface Defaults1x1<TSource> {
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    (): Defaults1x1<TSource>;
    /**
     * Assigns own enumerable properties of source object(s) to the destination object for all destination
     * properties that resolve to undefined. Once a property is set, additional values of the same property are
     * ignored.
     *
     * Note: This method mutates object.
     *
     * @param object The destination object.
     * @param sources The source objects.
     * @return The destination object.
     */
    <TObject>(object: TObject): TSource & TObject;
}

declare const defaults: Defaults;
export = defaults;
