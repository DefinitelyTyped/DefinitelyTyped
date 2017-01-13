// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dojox {

    namespace lang {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/observable.html
         *
         * Creates a wrapper object, which can be observed. The wrapper object
         * is a proxy to the wrapped object. If you will be making multiple wrapper
         * objects with the same set of listeners, it is recommended that you
         * use makeObservable, as it is more memory efficient.
         *
         * @param wrapped The object to be wrapped and monitored for property access and modification
         * @param onRead See dojox.lang.makeObservable.onRead
         * @param onWrite See dojox.lang.makeObservable.onWrite
         * @param onInvoke See dojox.lang.makeObservable.onInvoke
         */
        interface observable{(wrapped: Object, onRead: Function, onWrite: Function, onInvoke: Function): void}
        namespace oo {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/Decorator.html
             *
             * The base class for all decorators.
             * This object holds an original function or another decorator
             * object, and implements a special mixin algorithm to be used
             * by dojox.lang.oo.mixin.
             *
             * @param value a payload to be processed by the decorator.
             * @param decorator a function to handle the custom assignment, or an object with exec()method. The signature is:decorator(/String/ name, /Function/ newValue, /Function/ oldValue).
             */
            interface Decorator{(value: Object, decorator?: Function): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/Decorator.html
             *
             * The base class for all decorators.
             * This object holds an original function or another decorator
             * object, and implements a special mixin algorithm to be used
             * by dojox.lang.oo.mixin.
             *
             * @param value a payload to be processed by the decorator.
             * @param decorator a function to handle the custom assignment, or an object with exec()method. The signature is:decorator(/String/ name, /Function/ newValue, /Function/ oldValue).
             */
            interface Decorator{(value: Object, decorator?: Object): void}
            namespace Decorator {
                /**
                 * a function to handle the custom assignment, or an object with exec()
                 * method. The signature is:
                 * decorator(/String/ name, /Function/ newValue, /Function/ oldValue).
                 *
                 */
                var decorator: Function
                /**
                 * a payload to be processed by the decorator.
                 *
                 */
                var value: Object
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/Filter.html
             *
             * Filter to control mixing in objects by skipping
             * properties and renaming them.
             * This object is used as a holder of an original object
             * (whose properties are to be copied), and a filter
             * function used while copying by dojox.lang.oo.mixin.
             *
             * @param bag object to be filtered
             * @param filter a function to handle the name filtering,or an object with exec() method
             */
            interface Filter{(bag: Object, filter: Function): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/Filter.html
             *
             * Filter to control mixing in objects by skipping
             * properties and renaming them.
             * This object is used as a holder of an original object
             * (whose properties are to be copied), and a filter
             * function used while copying by dojox.lang.oo.mixin.
             *
             * @param bag object to be filtered
             * @param filter a function to handle the name filtering,or an object with exec() method
             */
            interface Filter{(bag: Object, filter: Object): void}
            namespace Filter {
                /**
                 * object to be filtered
                 *
                 */
                var bag: Object
                /**
                 * a function to handle the name filtering,
                 * or an object with exec() method
                 *
                 */
                var filter: Function
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/mixin.html
             *
             * mixes in two or more objects processing decorators and filters
             * using defaults as a fallback
             *
             * @param target target to receive new/updated properties
             * @param source source of properties, more than one source is allowed
             */
            interface mixin{(target: Object, source: Object[]): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/rearrange.html
             *
             * Process properties in place by removing and renaming them.
             * Properties of an object are to be renamed or removed specified
             * by "map" argument. Only own properties of "map" are processed.
             *
             * @param bag the object to be processed
             * @param map the dictionary for renaming (false value indicates removal of the named property)
             */
            interface rearrange{(bag: Object, map: Object): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/aop.html
             *
             *
             */
            interface aop {
                /**
                 *
                 */
                after: Object;
                /**
                 *
                 */
                afterReturning: Object;
                /**
                 *
                 */
                afterThrowing: Object;
                /**
                 *
                 */
                around: Object;
                /**
                 *
                 */
                before: Object;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/oo/general.html
             *
             *
             */
            interface general {
                /**
                 *
                 */
                after: Object;
                /**
                 *
                 */
                augment: Object;
                /**
                 *
                 */
                before: Object;
                /**
                 *
                 */
                override: Object;
                /**
                 *
                 */
                shuffle: Object;
                /**
                 *
                 */
                tap: Object;
                /**
                 *
                 */
                wrap: Object;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect.html
         *
         *
         */
        interface aspect {
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: String, advice: Object): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: RegExp, advice: Object): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: any[], advice: Object): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: String, advice: Function): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: RegExp, advice: Function): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: any[], advice: Function): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: String, advice: any[]): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: RegExp, advice: any[]): void;
            /**
             * Attach AOP-style advices to a method.
             * Attaches AOP-style advices to a method. Can attach several
             * advices at once and operate on several methods of an object.
             * The latter is achieved when a RegExp is specified as
             * a method name, or an array of strings and regular expressions
             * is used. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * This function is a convenience wrapper for
             * dojox.lang.aspect.adviseRaw().
             *
             * @param obj A source object for the advised function. Cannot be a DOM node.If this object is a constructor, its prototype is advised.
             * @param method A string name of the function in obj. In case of RegExp allmethods of obj matching the regular expression are advised.
             * @param advice An object, which defines advises, or a function, whichreturns such object, or an array of previous items.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            advise(obj: Object, method: any[], advice: any[]): void;
            /**
             * Attach AOP-style advices to methods.
             * Attaches AOP-style advices to object's methods. Can attach several
             * advices at once and operate on several methods of the object.
             * The latter is achieved when a RegExp is specified as
             * a method name. In this case all functional methods that
             * satisfy the RegExp condition are processed. This function
             * returns a handle, which can be used to unadvise, or null,
             * if advising has failed.
             *
             * @param obj A source object for the advised function.Cannot be a DOM node.
             * @param methods An array of method names (strings) to be advised.
             * @param advices An array of advices represented by objects or functions thatreturn such objects on demand during the event processing.The advice object can define following member functions:before, around, afterReturning, afterThrowing, after.If the function is supplied, it is called with a contextobject once per call to create a temporary advice object, whichis destroyed after the processing. The temporary advice objectcan implement a destroy() method, if it wants to be called whennot needed.
             */
            adviseRaw(obj: Object, methods: any[], advices: any[]): void;
            /**
             * Returns the context information for the advice in effect.
             *
             */
            getContext(): void;
            /**
             * Returns the context stack, which reflects executing advices
             * up to this point. The array is ordered from oldest to newest.
             * In order to get the active context use dojox.lang.aspect.getContext().
             *
             */
            getContextStack(): void;
            /**
             * Call the original function (or the next level around advice) in an around advice code.
             * Calls the original function (or the next level around advice).
             * Accepts and passes on any number of arguments, and returns a value.
             * This function is valid only in the content of around calls.
             *
             */
            proceed(): void;
            /**
             * Detach previously attached AOP-style advices.
             *
             * @param handle The object returned by dojox.lang.aspect.advise().
             */
            unadvise(handle: Object): void;
        }
        namespace aspect {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/counter.html
             *
             * Returns an object, which can be used to count calls to methods.
             *
             */
            interface counter{(): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/cflow.html
             *
             * Returns true if the context stack contains a context for a given
             * instance that satisfies a given method name criteria.
             *
             * @param instance An instance to be matched. If null, any context will be examined.Otherwise the context should belong to this instance.
             * @param method       OptionalAn optional pattern to be matched against a method name. Can be a string,a RegExp object or an array of strings and RegExp objects.If it is omitted, any name will satisfy the criteria.
             */
            interface cflow{(instance: Object, method?: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/cflow.html
             *
             * Returns true if the context stack contains a context for a given
             * instance that satisfies a given method name criteria.
             *
             * @param instance An instance to be matched. If null, any context will be examined.Otherwise the context should belong to this instance.
             * @param method       OptionalAn optional pattern to be matched against a method name. Can be a string,a RegExp object or an array of strings and RegExp objects.If it is omitted, any name will satisfy the criteria.
             */
            interface cflow{(instance: Object, method?: RegExp): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/cflow.html
             *
             * Returns true if the context stack contains a context for a given
             * instance that satisfies a given method name criteria.
             *
             * @param instance An instance to be matched. If null, any context will be examined.Otherwise the context should belong to this instance.
             * @param method       OptionalAn optional pattern to be matched against a method name. Can be a string,a RegExp object or an array of strings and RegExp objects.If it is omitted, any name will satisfy the criteria.
             */
            interface cflow{(instance: Object, method?: any[]): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/memoizer.html
             *
             * Returns an object, which can be used to count calls to methods.
             *
             * @param keyMaker       Optionalthe function, which takes method's arguments and returns a key,which can be used to index the result.
             */
            interface memoizer{(keyMaker?: Function): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/memoizerGuard.html
             *
             * Invalidates the memoizer's cache (see dojox.lang.aspect.memoizer)
             * after calling certain methods.
             *
             * @param method       OptionalOptional method's name to be guarded: only cache forthis method will be invalidated on call. Can be a stringor an array of method names. If omitted the whole cachewill be invalidated.
             */
            interface memoizerGuard{(method?: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/memoizerGuard.html
             *
             * Invalidates the memoizer's cache (see dojox.lang.aspect.memoizer)
             * after calling certain methods.
             *
             * @param method       OptionalOptional method's name to be guarded: only cache forthis method will be invalidated on call. Can be a stringor an array of method names. If omitted the whole cachewill be invalidated.
             */
            interface memoizerGuard{(method?: any[]): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/profiler.html
             *
             * Returns an object, which can be used to time calls to methods.
             *
             * @param title       OptionalThe optional name of the profile section.
             */
            interface profiler{(title?: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/timer.html
             *
             * Returns an object, which can be used to time calls to methods.
             *
             * @param name       OptionalThe optional unique name of the timer.
             */
            interface timer{(name?: String): void}
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/aspect/tracer.html
             *
             * Returns an object, which can be used to trace calls with Firebug's console.
             * Prints argument, a return value, or an exception.
             *
             * @param grouping The flag to group output. If true, indents embedded console messages.
             */
            interface tracer{(grouping: boolean): void}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/async.html
         *
         *
         */
        interface async {
            /**
             * Executes functions in parallel. As soon as one of them finishes
             * cancels the rest.
             *
             * @param x
             */
            any(x: any): void;
            /**
             * Executes a condition, waits for it if necessary, and executes
             * one of two functions.
             *
             * @param cond
             * @param ifTrue
             * @param ifFalse
             */
            ifThen(cond: any, ifTrue: any, ifFalse: any): void;
            /**
             * Executes a condition, waits for it if necessary, and executes
             * the body, if truthy value was returned.
             * Then it repeats the cycle until the condition function returns
             * a falsy value.
             *
             * @param cond
             * @param body
             */
            loop(cond: any, body: any): void;
            /**
             * Executes functions in parallel. Waits for all of them to finish.
             *
             * @param x
             */
            par(x: any): void;
            /**
             * Executes a condition, waits for it if necessary, and executes
             * Nth function from list.
             *
             * @param cond
             * @param x
             */
            select(cond: any, x: any): void;
            /**
             * Executes functions sequentially. Waits if any of them returns Deferred.
             *
             * @param x
             */
            seq(x: any): void;
        }
        namespace async {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/async/timeout.html
             *
             *
             */
            interface timeout {
                /**
                 *
                 * @param ms
                 */
                failOn(ms: any): void;
                /**
                 *
                 * @param ms
                 */
                from(ms: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/async/event.html
             *
             *
             */
            interface event {
                /**
                 *
                 * @param src
                 * @param name
                 */
                failOn(src: any, name: any): void;
                /**
                 *
                 * @param src
                 * @param name
                 */
                from(src: any, name: any): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/async/topic.html
             *
             *
             */
            interface topic {
                /**
                 *
                 * @param topic
                 */
                failOn(topic: any): void;
                /**
                 *
                 * @param topic
                 */
                from(topic: any): void;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional.html
         *
         *
         */
        interface functional {
            /**
             * builds a function from a snippet, returns a string, which
             * represents the function.
             * This method returns a textual representation of a function
             * built from the snippet. It is meant to be evaled in the
             * proper context, so local variables can be pulled from the
             * environment.
             *
             * @param s
             */
            buildLambda(s: String): String;
            /**
             * clears internal cache of lambdas
             *
             */
            clearLambdaCache(): void;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: Object, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: String, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: Object, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: String, f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            every(a: Object, f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: String, f: String, o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether all elements in the array pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            everyRev(a: String, f: any[], o: Object): boolean;
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: Object, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: Object, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: String, f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filter(a: Object, f: any[], o: Object): any[];
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            filterIn(obj: Object, f: Function, o: Object): Object;
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            filterIn(obj: Object, f: String, o: Object): Object;
            /**
             * creates new object with all attributes that pass the test
             * implemented by the provided function.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            filterIn(obj: Object, f: any[], o: Object): Object;
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with all elements that pass the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            filterRev(a: String, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldl(a: any[], f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldl(a: String, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldl(a: Object, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: Object, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: Object, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: String, f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldl1(a: Object, f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: any[], f: Function, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: String, f: Function, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: any[], f: String, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: String, f: String, z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: any[], f: any[], z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns the final
             * value.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            foldr(a: String, f: any[], z: Object, o: Object): Object;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns the final value.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            foldr1(a: String, f: any[], o: Object): any;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: any[], f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: String, f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: Object, f: Function, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: any[], f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: String, f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: Object, f: String, o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: any[], f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: String, f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEach(a: Object, f: any[], o: Object): String;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: any[], f: Function, o: Object): void;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: String, f: Function, o: Object): void;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: any[], f: String, o: Object): void;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: String, f: String, o: Object): void;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: any[], f: any[], o: Object): void;
            /**
             * executes a provided function once per array element.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            forEachRev(a: String, f: any[], o: Object): void;
            /**
             * iterates over all object attributes.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            forIn(obj: Object, f: Function, o: Object): String;
            /**
             * iterates over all object attributes.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            forIn(obj: Object, f: String, o: Object): String;
            /**
             * iterates over all object attributes.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            forIn(obj: Object, f: any[], o: Object): String;
            /**
             * returns an array of all keys in the object
             *
             * @param obj
             */
            keys(obj: Object): any[];
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             *
             * @param s
             */
            lambda(s: Function): Function;
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             *
             * @param s
             */
            lambda(s: String): Function;
            /**
             * builds a function from a snippet, or array (composing),
             * returns a function object; functions are passed through
             * unmodified.
             * This method is used to normalize a functional
             * representation (a text snippet, an array, or a function) to
             * a function object.
             *
             * @param s
             */
            lambda(s: any[]): Function;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: any[], f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: String, f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: Object, f: Function, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: any[], f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: String, f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: Object, f: String, o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: any[], f: any[], o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: String, f: any[], o: Object): any[];
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            map(a: Object, f: any[], o: Object): any[];
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            mapIn(obj: Object, f: Function, o: Object): Object;
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            mapIn(obj: Object, f: String, o: Object): Object;
            /**
             * creates new object with the results of calling
             * a provided function on every attribute in this object.
             *
             * @param obj
             * @param f
             * @param o               Optional
             */
            mapIn(obj: Object, f: any[], o: Object): Object;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: any[], f: Function, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: String, f: Function, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: any[], f: String, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: String, f: String, o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: any[], f: any[], o: Object): any;
            /**
             * creates a new array with the results of calling
             * a provided function on every element in this array.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            mapRev(a: String, f: any[], o: Object): any;
            /**
             * builds a function from a snippet, or array (composing),
             * returns an object describing the function; functions are
             * passed through unmodified.
             * This method is to normalize a functional representation (a
             * text snippet) to an object that contains an array of
             * arguments, and a body , which is used to calculate the
             * returning value.
             *
             * @param s
             */
            rawLambda(s: String): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: any[], f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: String, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: Object, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: any[], f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: String, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: Object, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: any[], f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: String, f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from left-to-right) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduce(a: Object, f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: any[], f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: String, f: Function, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: any[], f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: String, f: String, z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: any[], f: any[], z: Object): any;
            /**
             * apply a function simultaneously against two values of the array
             * (from right-to-left) as to reduce it to a single value.
             *
             * @param a
             * @param f
             * @param z               Optional
             */
            reduceRight(a: String, f: any[], z: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             *
             * @param n
             * @param f
             * @param z
             * @param o               Optional
             */
            repeat(n: number, f: Function, z: Object, o: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             *
             * @param n
             * @param f
             * @param z
             * @param o               Optional
             */
            repeat(n: number, f: String, z: Object, o: Object): any;
            /**
             * builds an array by repeatedly applying a unary function N times
             * with a seed value Z. N should be greater than 0.
             *
             * @param n
             * @param f
             * @param z
             * @param o               Optional
             */
            repeat(n: number, f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: any[], f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: String, f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: Object, f: Function, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: any[], f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: String, f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: Object, f: String, z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: any[], f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: String, f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right using a seed value as a starting point; returns an array
             * of values produced by foldl() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanl(a: Object, f: any[], z: Object, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: any[], f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: String, f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: Object, f: Function, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: any[], f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: String, f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: Object, f: String, o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: any[], f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: String, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from left
             * to right; returns an array of values produced by foldl1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanl1(a: Object, f: any[], o: Object): any[];
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: any[], f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: String, f: Function, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: any[], f: String, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: String, f: String, z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: any[], f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left using a seed value as a starting point; returns an array
             * of values produced by foldr() at that point.
             *
             * @param a
             * @param f
             * @param z
             * @param o               Optional
             */
            scanr(a: String, f: any[], z: Object, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: any[], f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: String, f: Function, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: any[], f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: String, f: String, o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: any[], f: any[], o: Object): any;
            /**
             * repeatedly applies a binary function to an array from right
             * to left; returns an array of values produced by foldr1() at that
             * point.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            scanr1(a: String, f: any[], o: Object): any;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: Object, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: String, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: Object, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: String, f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            some(a: Object, f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: any[], f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: String, f: Function, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: any[], f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: String, f: String, o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: any[], f: any[], o: Object): boolean;
            /**
             * tests whether some element in the array passes the test
             * implemented by the provided function.
             *
             * @param a
             * @param f
             * @param o               Optional
             */
            someRev(a: String, f: any[], o: Object): boolean;
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by unfolding a value
             *
             * @param pr
             * @param f
             * @param g
             * @param z
             * @param o               Optional
             */
            unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: Function, f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: String, f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: any[], f: Function, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: Function, f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: String, f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: any[], f: String, z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: Function, f: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: String, f: any[], z: Object, o: Object): any[];
            /**
             * builds an array by repeatedly applying a unary function with
             * a seed value Z until the predicate is satisfied.
             *
             * @param pr
             * @param f
             * @param z
             * @param o               Optional
             */
            until(pr: any[], f: any[], z: Object, o: Object): any[];
            /**
             * returns an array of all values in the object
             *
             * @param obj
             */
            values(obj: Object): any[];
        }
        namespace functional {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/array.html
             *
             *
             */
            interface array {
                /**
                 * builds a function from a snippet, returns a string, which
                 * represents the function.
                 * This method returns a textual representation of a function
                 * built from the snippet. It is meant to be evaled in the
                 * proper context, so local variables can be pulled from the
                 * environment.
                 *
                 * @param s
                 */
                buildLambda(s: String): String;
                /**
                 * clears internal cache of lambdas
                 *
                 */
                clearLambdaCache(): void;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: any[], o: Object): boolean;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: Object, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: any[], o: Object): any;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: any[], o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: any[], o: Object): void;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: Function, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: String, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: any[], o: Object): String;
                /**
                 * returns an array of all keys in the object
                 *
                 * @param obj
                 */
                keys(obj: Object): any[];
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: Function): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: String): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: any[]): Function;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: any[], o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: any[], o: Object): any;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns an object describing the function; functions are
                 * passed through unmodified.
                 * This method is to normalize a functional representation (a
                 * text snippet) to an object that contains an array of
                 * arguments, and a body , which is used to calculate the
                 * returning value.
                 *
                 * @param s
                 */
                rawLambda(s: String): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: any[], z: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: Function, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: String, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: any[], o: Object): any;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: any[], o: Object): boolean;
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * returns an array of all values in the object
                 *
                 * @param obj
                 */
                values(obj: Object): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/lambda.html
             *
             *
             */
            interface lambda {
                /**
                 * builds a function from a snippet, returns a string, which
                 * represents the function.
                 * This method returns a textual representation of a function
                 * built from the snippet. It is meant to be evaled in the
                 * proper context, so local variables can be pulled from the
                 * environment.
                 *
                 * @param s
                 */
                buildLambda(s: String): String;
                /**
                 * clears internal cache of lambdas
                 *
                 */
                clearLambdaCache(): void;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: any[], o: Object): boolean;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: Object, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: any[], o: Object): any;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: any[], o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: any[], o: Object): void;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: Function, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: String, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: any[], o: Object): String;
                /**
                 * returns an array of all keys in the object
                 *
                 * @param obj
                 */
                keys(obj: Object): any[];
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: Function): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: String): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: any[]): Function;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: any[], o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: any[], o: Object): any;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns an object describing the function; functions are
                 * passed through unmodified.
                 * This method is to normalize a functional representation (a
                 * text snippet) to an object that contains an array of
                 * arguments, and a body , which is used to calculate the
                 * returning value.
                 *
                 * @param s
                 */
                rawLambda(s: String): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: any[], z: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: Function, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: String, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: any[], o: Object): any;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: any[], o: Object): boolean;
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * returns an array of all values in the object
                 *
                 * @param obj
                 */
                values(obj: Object): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/listcomp.html
             *
             *
             */
            interface listcomp {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/object.html
             *
             *
             */
            interface object {
                /**
                 * builds a function from a snippet, returns a string, which
                 * represents the function.
                 * This method returns a textual representation of a function
                 * built from the snippet. It is meant to be evaled in the
                 * proper context, so local variables can be pulled from the
                 * environment.
                 *
                 * @param s
                 */
                buildLambda(s: String): String;
                /**
                 * clears internal cache of lambdas
                 *
                 */
                clearLambdaCache(): void;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: any[], o: Object): boolean;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: Object, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: any[], o: Object): any;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: any[], o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: any[], o: Object): void;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: Function, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: String, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: any[], o: Object): String;
                /**
                 * returns an array of all keys in the object
                 *
                 * @param obj
                 */
                keys(obj: Object): any[];
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: Function): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: String): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: any[]): Function;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: any[], o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: any[], o: Object): any;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns an object describing the function; functions are
                 * passed through unmodified.
                 * This method is to normalize a functional representation (a
                 * text snippet) to an object that contains an array of
                 * arguments, and a body , which is used to calculate the
                 * returning value.
                 *
                 * @param s
                 */
                rawLambda(s: String): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: any[], z: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: Function, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: String, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: any[], o: Object): any;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: any[], o: Object): boolean;
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * returns an array of all values in the object
                 *
                 * @param obj
                 */
                values(obj: Object): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/reversed.html
             *
             *
             */
            interface reversed {
                /**
                 * builds a function from a snippet, returns a string, which
                 * represents the function.
                 * This method returns a textual representation of a function
                 * built from the snippet. It is meant to be evaled in the
                 * proper context, so local variables can be pulled from the
                 * environment.
                 *
                 * @param s
                 */
                buildLambda(s: String): String;
                /**
                 * clears internal cache of lambdas
                 *
                 */
                clearLambdaCache(): void;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: any[], o: Object): boolean;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: Object, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: any[], o: Object): any;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: any[], o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: any[], o: Object): void;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: Function, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: String, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: any[], o: Object): String;
                /**
                 * returns an array of all keys in the object
                 *
                 * @param obj
                 */
                keys(obj: Object): any[];
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: Function): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: String): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: any[]): Function;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: any[], o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: any[], o: Object): any;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns an object describing the function; functions are
                 * passed through unmodified.
                 * This method is to normalize a functional representation (a
                 * text snippet) to an object that contains an array of
                 * arguments, and a body , which is used to calculate the
                 * returning value.
                 *
                 * @param s
                 */
                rawLambda(s: String): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: any[], z: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: Function, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: String, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: any[], o: Object): any;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: any[], o: Object): boolean;
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * returns an array of all values in the object
                 *
                 * @param obj
                 */
                values(obj: Object): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/sequence.html
             *
             *
             */
            interface sequence {
                /**
                 * builds a function from a snippet, returns a string, which
                 * represents the function.
                 * This method returns a textual representation of a function
                 * built from the snippet. It is meant to be evaled in the
                 * proper context, so local variables can be pulled from the
                 * environment.
                 *
                 * @param s
                 */
                buildLambda(s: String): String;
                /**
                 * clears internal cache of lambdas
                 *
                 */
                clearLambdaCache(): void;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                every(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether all elements in the array pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                everyRev(a: String, f: any[], o: Object): boolean;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filter(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with all attributes that pass the test
                 * implemented by the provided function.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                filterIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with all elements that pass the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                filterRev(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldl(a: Object, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: String, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldl1(a: Object, f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: Function, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: String, z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: any[], f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns the final
                 * value.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                foldr(a: String, f: any[], z: Object, o: Object): Object;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns the final value.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                foldr1(a: String, f: any[], o: Object): any;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: Function, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: String, o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: any[], f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: String, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEach(a: Object, f: any[], o: Object): String;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: Function, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: String, o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: any[], f: any[], o: Object): void;
                /**
                 * executes a provided function once per array element.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                forEachRev(a: String, f: any[], o: Object): void;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: Function, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: String, o: Object): String;
                /**
                 * iterates over all object attributes.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                forIn(obj: Object, f: any[], o: Object): String;
                /**
                 * returns an array of all keys in the object
                 *
                 * @param obj
                 */
                keys(obj: Object): any[];
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: Function): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: String): Function;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns a function object; functions are passed through
                 * unmodified.
                 * This method is used to normalize a functional
                 * representation (a text snippet, an array, or a function) to
                 * a function object.
                 *
                 * @param s
                 */
                lambda(s: any[]): Function;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: Function, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: String, o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: any[], f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: String, f: any[], o: Object): any[];
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                map(a: Object, f: any[], o: Object): any[];
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: Function, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: String, o: Object): Object;
                /**
                 * creates new object with the results of calling
                 * a provided function on every attribute in this object.
                 *
                 * @param obj
                 * @param f
                 * @param o               Optional
                 */
                mapIn(obj: Object, f: any[], o: Object): Object;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: Function, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: String, o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: any[], f: any[], o: Object): any;
                /**
                 * creates a new array with the results of calling
                 * a provided function on every element in this array.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                mapRev(a: String, f: any[], o: Object): any;
                /**
                 * builds a function from a snippet, or array (composing),
                 * returns an object describing the function; functions are
                 * passed through unmodified.
                 * This method is to normalize a functional representation (a
                 * text snippet) to an object that contains an array of
                 * arguments, and a body , which is used to calculate the
                 * returning value.
                 *
                 * @param s
                 */
                rawLambda(s: String): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: String, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from left-to-right) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduce(a: Object, f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: Function, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: String, z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: any[], f: any[], z: Object): any;
                /**
                 * apply a function simultaneously against two values of the array
                 * (from right-to-left) as to reduce it to a single value.
                 *
                 * @param a
                 * @param f
                 * @param z               Optional
                 */
                reduceRight(a: String, f: any[], z: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: Function, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: String, z: Object, o: Object): any;
                /**
                 * builds an array by repeatedly applying a unary function N times
                 * with a seed value Z. N should be greater than 0.
                 *
                 * @param n
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                repeat(n: number, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: Function, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: String, z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: String, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right using a seed value as a starting point; returns an array
                 * of values produced by foldl() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanl(a: Object, f: any[], z: Object, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: Function, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: String, o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: any[], f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: String, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from left
                 * to right; returns an array of values produced by foldl1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanl1(a: Object, f: any[], o: Object): any[];
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: Function, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: String, z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: any[], f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left using a seed value as a starting point; returns an array
                 * of values produced by foldr() at that point.
                 *
                 * @param a
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                scanr(a: String, f: any[], z: Object, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: Function, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: String, o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: any[], f: any[], o: Object): any;
                /**
                 * repeatedly applies a binary function to an array from right
                 * to left; returns an array of values produced by foldr1() at that
                 * point.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                scanr1(a: String, f: any[], o: Object): any;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: String, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                some(a: Object, f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: Function, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: String, o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: any[], f: any[], o: Object): boolean;
                /**
                 * tests whether some element in the array passes the test
                 * implemented by the provided function.
                 *
                 * @param a
                 * @param f
                 * @param o               Optional
                 */
                someRev(a: String, f: any[], o: Object): boolean;
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: String, z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: Function, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: String, g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: Function, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: String, f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by unfolding a value
                 *
                 * @param pr
                 * @param f
                 * @param g
                 * @param z
                 * @param o               Optional
                 */
                unfold(pr: any[], f: any[], g: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: Function, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: String, z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: Function, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: String, f: any[], z: Object, o: Object): any[];
                /**
                 * builds an array by repeatedly applying a unary function with
                 * a seed value Z until the predicate is satisfied.
                 *
                 * @param pr
                 * @param f
                 * @param z
                 * @param o               Optional
                 */
                until(pr: any[], f: any[], z: Object, o: Object): any[];
                /**
                 * returns an array of all values in the object
                 *
                 * @param obj
                 */
                values(obj: Object): any[];
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/functional/zip.html
             *
             *
             */
            interface zip {
            }
            namespace fold {
            }

            namespace scan {
            }

        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/lang/utils.html
         *
         *
         */
        interface utils {
            /**
             * Coerces one object to the type of another.
             *
             * @param target object, which typeof result is used to coerce "source" object.
             * @param source object, which will be forced to change type.
             */
            coerceType(target: Object, source: Object): any;
            /**
             * Merge two objects structurally, mixin properties will override object's properties.
             *
             * @param object original object.
             * @param mixin additional object, which properties will override object's properties.
             */
            merge(object: Object, mixin: Object): any;
            /**
             * Updates an existing object in place with properties from an "source" object.
             *
             * @param target the "target" object to be updated
             * @param source the "source" object, whose properties will be used to source the existed object.
             * @param conv               Optionalforce conversion to the original type
             */
            updateWithObject(target: Object, source: Object, conv: boolean): Object;
            /**
             * Updates an existing object in place with properties from an "source" object.
             *
             * @param target the "target" object to be updated
             * @param source the "source" object, whose properties will be used to source the existed object.
             * @param pattern object, whose properties will be used to pull values from the "source"
             * @param conv               Optionalforce conversion to the original type
             */
            updateWithPattern(target: Object, source: Object, pattern: Object, conv: boolean): Object;
        }
    }

}

declare module "dojox/lang/observable" {
    var exp: dojox.lang.observable
    export=exp;
}
declare module "dojox/lang/aspect" {
    var exp: dojox.lang.aspect
    export=exp;
}
declare module "dojox/lang/aspect/memoizerGuard" {
    var exp: dojox.lang.aspect.memoizerGuard
    export=exp;
}
declare module "dojox/lang/aspect/memoizer" {
    var exp: dojox.lang.aspect.memoizer
    export=exp;
}
declare module "dojox/lang/aspect/counter" {
    var exp: dojox.lang.aspect.counter
    export=exp;
}
declare module "dojox/lang/aspect/cflow" {
    var exp: dojox.lang.aspect.cflow
    export=exp;
}
declare module "dojox/lang/aspect/timer" {
    var exp: dojox.lang.aspect.timer
    export=exp;
}
declare module "dojox/lang/aspect/profiler" {
    var exp: dojox.lang.aspect.profiler
    export=exp;
}
declare module "dojox/lang/aspect/tracer" {
    var exp: dojox.lang.aspect.tracer
    export=exp;
}
declare module "dojox/lang/async" {
    var exp: dojox.lang.async
    export=exp;
}
declare module "dojox/lang/async/event" {
    var exp: dojox.lang.async.event
    export=exp;
}
declare module "dojox/lang/async/timeout" {
    var exp: dojox.lang.async.timeout
    export=exp;
}
declare module "dojox/lang/async/topic" {
    var exp: dojox.lang.async.topic
    export=exp;
}
declare module "dojox/lang/functional" {
    var exp: dojox.lang.functional
    export=exp;
}
declare module "dojox/lang/functional/listcomp" {
    var exp: dojox.lang.functional.listcomp
    export=exp;
}
declare module "dojox/lang/functional/object" {
    var exp: dojox.lang.functional.object
    export=exp;
}
declare module "dojox/lang/functional/zip" {
    var exp: dojox.lang.functional.zip
    export=exp;
}
declare module "dojox/lang/functional/array" {
    var exp: dojox.lang.functional.array
    export=exp;
}
declare module "dojox/lang/functional/lambda" {
    var exp: dojox.lang.functional.lambda
    export=exp;
}
declare module "dojox/lang/functional/reversed" {
    var exp: dojox.lang.functional.reversed
    export=exp;
}
declare module "dojox/lang/functional/sequence" {
    var exp: dojox.lang.functional.sequence
    export=exp;
}
declare module "dojox/lang/utils" {
    var exp: dojox.lang.utils
    export=exp;
}
declare module "dojox/lang/oo/mixin" {
    var exp: dojox.lang.oo.mixin
    export=exp;
}
declare module "dojox/lang/oo/Filter" {
    var exp: dojox.lang.oo.Filter
    export=exp;
}
declare module "dojox/lang/oo/Decorator" {
    var exp: dojox.lang.oo.Decorator
    export=exp;
}
declare module "dojox/lang/oo/rearrange" {
    var exp: dojox.lang.oo.rearrange
    export=exp;
}
declare module "dojox/lang/oo/aop" {
    var exp: dojox.lang.oo.aop
    export=exp;
}
declare module "dojox/lang/oo/general" {
    var exp: dojox.lang.oo.general
    export=exp;
}
