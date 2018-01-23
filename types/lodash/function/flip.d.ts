declare namespace _ {
    interface LoDashStatic {
       /**
        * Creates a function that invokes `func` with arguments reversed.
        *
        * @category Function
        * @param func The function to flip arguments for.
        * @returns Returns the new function.
        * @example
        *
        * var flipped = _.flip(function() {
        *   return _.toArray(arguments);
        * });
        *
        * flipped('a', 'b', 'c', 'd');
        * // => ['d', 'c', 'b', 'a']
        */
       flip<T extends (...args: any[]) => any>(func: T): T;
   }

   interface LoDashWrapper<TValue> {
       /**
        * @see _.flip
        */
       flip(): this;
   }
}