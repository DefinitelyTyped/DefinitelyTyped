import _ = require("../index");

declare namespace Lodash {
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
        <T>(arrays2: _.List<T> | null | undefined): UnionBy1x1<T>;
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>): UnionBy1x2<T>;
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        <T>(arrays2: _.List<T> | null | undefined, iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined): T[];
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
        (iteratee: _.ValueIteratee<T>): UnionBy1x2<T>;
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        (iteratee: _.ValueIteratee<T>, arrays1: _.List<T> | null | undefined): T[];
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
        (arrays1: _.List<T> | null | undefined): T[];
    }
}

declare const unionBy: Lodash.UnionBy;
export = unionBy;
