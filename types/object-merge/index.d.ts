// TypeScript Version: 2.2

interface ObjectMergeOptions {
    depth: number | boolean;
    throwOnCircularRef: boolean;
}

interface ObjectMerge {
    /**
     * Merges JavaScript objects recursively without altering the objects merged.
     * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
     * @param [opts] An options object created by
     *  objectMerge.createOptions. Options must be specified as the first argument
     *  and must be an object created with createOptions or else the object will
     *  not be recognized as an options object and will be merged instead.
     * @param shadows [[shadows]...] One or more objects to merge. Each
     *  argument given will be treated as an object to merge. Each object
     *  overwrites the previous objects descendant properties if the property name
     *  matches. If objects properties are objects they will be merged recursively
     *  as well.
     * @returns Returns a single merged object composed from clones of the
     *  input objects.
     * @example
     *  var objectMerge = require('object-merge');
     *  var x = {
     *      a : 'a',
     *      b : 'b',
     *      c : {
     *          d : 'd',
     *          e : 'e',
     *          f : {
     *              g : 'g'
     *          }
     *      }
     *  };
     *  var y = {
     *      a : '`a',
     *      b : '`b',
     *      c : {
     *          d : '`d'
     *      }
     *  };
     *  var z = {
     *      a : {
     *          b : '``b'
     *      },
     *      fun : function foo () {
     *          return 'foo';
     *      },
     *      aps : Array.prototype.slice
     *  };
     *  var out = objectMerge(x, y, z);
     *  // out.a will be {
     *  //         b : '``b'
     *  //     }
     *  // out.b will be '`b'
     *  // out.c will be {
     *  //         d : '`d',
     *  //         e : 'e',
     *  //         f : {
     *  //             g : 'g'
     *  //         }
     *  //     }
     *  // out.fun will be a clone of z.fun
     *  // out.aps will be equal to z.aps
     */
    (opts: ObjectMergeOptions, ...shadows: object[]): object;
    /**
     * Merges JavaScript objects recursively without altering the objects merged.
     * @author <a href="mailto:matthewkastor@gmail.com">Matthew Kastor</a>
     * @param shadows [[shadows]...] One or more objects to merge. Each
     *  argument given will be treated as an object to merge. Each object
     *  overwrites the previous objects descendant properties if the property name
     *  matches. If objects properties are objects they will be merged recursively
     *  as well.
     * @returns Returns a single merged object composed from clones of the
     *  input objects.
     * @example
     *  var objectMerge = require('object-merge');
     *  var x = {
     *      a : 'a',
     *      b : 'b',
     *      c : {
     *          d : 'd',
     *          e : 'e',
     *          f : {
     *              g : 'g'
     *          }
     *      }
     *  };
     *  var y = {
     *      a : '`a',
     *      b : '`b',
     *      c : {
     *          d : '`d'
     *      }
     *  };
     *  var z = {
     *      a : {
     *          b : '``b'
     *      },
     *      fun : function foo () {
     *          return 'foo';
     *      },
     *      aps : Array.prototype.slice
     *  };
     *  var out = objectMerge(x, y, z);
     *  // out.a will be {
     *  //         b : '``b'
     *  //     }
     *  // out.b will be '`b'
     *  // out.c will be {
     *  //         d : '`d',
     *  //         e : 'e',
     *  //         f : {
     *  //             g : 'g'
     *  //         }
     *  //     }
     *  // out.fun will be a clone of z.fun
     *  // out.aps will be equal to z.aps
     */
    (...shadows: object[]): object;
    /**
     * Creates a new options object suitable for use with objectMerge.
     * @param [opts] An object specifying the options.
     * @param [opts.depth = false] Specifies the depth to traverse objects
     *  during merging. If this is set to false then there will be no depth limit.
     * @param [opts.throwOnCircularRef = true] Set to false to suppress
     *  errors on circular references.
     * @returns Returns an instance of ObjectMergeOptions
     *  to be used with objectMerge.
     * @example
     *  var opts = objectMerge.createOptions({
     *      depth : 2,
     *      throwOnCircularRef : false
     *  });
     *  var obj1 = {
     *      a1 : {
     *          a2 : {
     *              a3 : {}
     *          }
     *      }
     *  };
     *  var obj2 = {
     *      a1 : {
     *          a2 : {
     *              a3 : 'will not be in output'
     *          },
     *          a22 : {}
     *      }
     *  };
     *  objectMerge(opts, obj1, obj2);
     */
    createOptions: (options: object) => ObjectMergeOptions;
}

declare const objectMerge: ObjectMerge;

export = objectMerge;
