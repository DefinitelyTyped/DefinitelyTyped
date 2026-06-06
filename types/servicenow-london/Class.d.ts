declare const Class: {
    /**
     * `Class.create` creates a class and returns a constructor function for instances of the class.
     * Calling the constructor function (typically as part of a `new` statement) will invoke the
     * class's `initialize` method.
     */
    create: () => () => void;
};
