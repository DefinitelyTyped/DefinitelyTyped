/**
 * The primary purpose of this class is to create hooks that can be implemented
 * by an adapter for various test frameworks.
 */
export default class Adapter {
    /**
     * This callback will be called whenever an async operation is about to start.
     */
    asyncStart(): unknown;
    /**
     * This callback will be called whenever an async operation has completed.
     */
    asyncEnd(): unknown;
    /**
     * Override this method with your testing framework's false assertion.
     * This function is called whenever an exception occurs causing the testing
     * promise to fail.
     */
    exception(error: string): unknown;
}
