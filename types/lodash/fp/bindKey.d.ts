import _ = require("../index");

declare namespace Lodash {
    interface BindKey {
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (): BindKey;
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (key: string): BindKey1x1;
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (key: string, object: object): (...args: any[]) => any;
    }
    interface BindKey1x1 {
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (): BindKey1x1;
        /**
         * Creates a function that invokes the method at object[key] and prepends any additional _.bindKey arguments
         * to those provided to the bound function.
         *
         * This method differs from _.bind by allowing bound functions to reference methods that may be redefined
         * or don’t yet exist. See Peter Michaux’s article for more details.
         *
         * The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
         * for partially applied arguments.
         *
         * @param object The object the method belongs to.
         * @param key The key of the method.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (object: object): (...args: any[]) => any;
    }
}

declare const bindKey: Lodash.BindKey;
export = bindKey;
