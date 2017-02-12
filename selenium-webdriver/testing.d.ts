declare namespace testing {
    /**
    * Registers a new test suite.
    * @param name The suite name.
    * @param fn The suite function, or {@code undefined} to define a pending test suite.
    */
    function describe(name: string, fn: Function): void;

    /**
     * Defines a suppressed test suite.
     * @param name The suite name.
     * @param fn The suite function, or {@code undefined} to define a pending test suite.
     */
    function xdescribe(name: string, fn: Function): void;

    /**
     * Register a function to call after the current suite finishes.
     * @param fn
     */
    function after(fn: Function): void;

    /**
     * Register a function to call after each test in a suite.
     * @param fn
     */
    function afterEach(fn: Function): void;

    /**
     * Register a function to call before the current suite starts.
     * @param fn
     */
    function before(fn: Function): void;

    /**
     * Register a function to call before each test in a suite.
     * @param fn
     */
    function beforeEach(fn: Function): void;

    /**
     * Add a test to the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function it(name: string, fn: Function): void;

    /**
     * An alias for {@link #it()} that flags the test as the only one that should
     * be run within the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function iit(name: string, fn: Function): void;

    /**
     * Adds a test to the current suite while suppressing it so it is not run.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    function xit(name: string, fn: Function): void;
}

export = testing;