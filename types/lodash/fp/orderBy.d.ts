import _ = require("../index");

declare namespace Lodash {
    interface OrderBy {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIterator<T, _.NotVoid>>): OrderBy1x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>): OrderBy1x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined): T[];
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIteratee<T>>): OrderBy2x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIteratee<T>>, orders: _.Many<boolean|string>): OrderBy2x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.ListIteratee<T>>, orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined): T[];
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>): OrderBy3x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>): OrderBy3x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>, collection: T | null | undefined): Array<T[keyof T]>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIteratee<T>>): OrderBy4x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIteratee<T>>, orders: _.Many<boolean|string>): OrderBy4x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T extends object>(iteratees: _.Many<_.ObjectIteratee<T>>, orders: _.Many<boolean|string>, collection: T | null | undefined): Array<T[keyof T]>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>): OrderBy5x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>): OrderBy5x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIterator<T, _.NotVoid>>, orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined): T[];
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIteratee<T>>): OrderBy6x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIteratee<T>>, orders: _.Many<boolean|string>): OrderBy6x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        <T>(iteratees: _.Many<_.NumericDictionaryIteratee<T>>, orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined): T[];
    }
    interface OrderBy1x1<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy1x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy1x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined): T[];
    }
    interface OrderBy1x2<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy1x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: _.List<T> | null | undefined): T[];
    }
    interface OrderBy2x1<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy2x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy2x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: _.List<T> | null | undefined): T[];
    }
    interface OrderBy2x2<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy2x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: _.List<T> | null | undefined): T[];
    }
    interface OrderBy3x1<T extends object> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy3x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy3x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface OrderBy3x2<T extends object> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy3x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface OrderBy4x1<T extends object> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy4x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy4x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface OrderBy4x2<T extends object> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy4x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface OrderBy5x1<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy5x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy5x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined): T[];
    }
    interface OrderBy5x2<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy5x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: _.NumericDictionary<T> | null | undefined): T[];
    }
    interface OrderBy6x1<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy6x1<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>): OrderBy6x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (orders: _.Many<boolean|string>, collection: _.NumericDictionary<T> | null | undefined): T[];
    }
    interface OrderBy6x2<T> {
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (): OrderBy6x2<T>;
        /**
         * This method is like `_.sortBy` except that it allows specifying the sort
         * orders of the iteratees to sort by. If `orders` is unspecified, all values
         * are sorted in ascending order. Otherwise, specify an order of "desc" for
         * descending or "asc" for ascending sort order of corresponding values.
         *
         * @category Collection
         * @param collection The collection to iterate over.
         * @param [iteratees=[_.identity]] The iteratees to sort by.
         * @param [orders] The sort orders of `iteratees`.
         * @param- {Object} [guard] Enables use as an iteratee for functions like `_.reduce`.
         * @returns Returns the new sorted array.
         * @example
         *
         * var users = [
         *   { 'user': 'fred',   'age': 48 },
         *   { 'user': 'barney', 'age': 34 },
         *   { 'user': 'fred',   'age': 42 },
         *   { 'user': 'barney', 'age': 36 }
         * ];
         *
         * // sort by `user` in ascending order and by `age` in descending order
         * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
         * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
         */
        (collection: _.NumericDictionary<T> | null | undefined): T[];
    }
}

declare const orderBy: Lodash.OrderBy;
export = orderBy;
