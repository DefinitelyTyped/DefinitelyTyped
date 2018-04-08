// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface UnionBy {
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (): UnionBy;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    <T>(iteratee: _.ValueIteratee<T>): UnionBy1x1<T>;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    <T>(iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined): UnionBy1x2<T>;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    <T>(iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined, arrays2: _.List<T> | null | undefined): T[];
}
interface UnionBy1x1<T> {
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (): UnionBy1x1<T>;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (arrays1: _.List<T> | null | undefined): UnionBy1x2<T>;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (arrays1: _.List<T> | null | undefined, arrays2: _.List<T> | null | undefined): T[];
}
interface UnionBy1x2<T> {
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (): UnionBy1x2<T>;
    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by which
     * uniqueness is computed. The iteratee is invoked with one argument: (value).
     *
     * @param arrays The arrays to inspect.
     * @param iteratee The iteratee invoked per element.
     * @return Returns the new array of combined values.
     */
    (arrays2: _.List<T> | null | undefined): T[];
}

declare const unionBy: UnionBy;
export = unionBy;
