// Here be dragons!
// This is community-maintained definition file intended to ease the process of developing
// high quality JavaScript interop code to be used in Blazor application from your C# .Net code.
// Could be removed without a notice in case official definition types ships with Blazor itself.

/* eslint-disable @definitelytyped/no-unnecessary-generics */

declare namespace DotNet {
    /**
     * Invokes the specified .NET public method synchronously. Not all hosting scenarios support
     * synchronous invocation, so if possible use invokeMethodAsync instead.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns The result of the operation.
     */
    function invokeMethod<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): T;
    /**
     * Invokes the specified .NET public method asynchronously.
     *
     * @param assemblyName The short name (without key/version or .dll extension) of the .NET assembly containing the method.
     * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
     * @param args Arguments to pass to the method, each of which must be JSON-serializable.
     * @returns A promise representing the result of the operation.
     */
    function invokeMethodAsync<T>(assemblyName: string, methodIdentifier: string, ...args: any[]): Promise<T>;
    /**
     * Creates a JavaScript object reference that can be passed to .NET via interop calls.
     * @param jsObject The JavaScript Object used to create the JavaScript object reference.
     * @returns The JavaScript object reference (this will be the same instance as the given object).
     * @throws Error if the given value is not an Object.
     */
    function createJSObjectReference(jsObject: any): JsObjectReference;
    /**
     * Creates a JavaScript data reference that can be passed to .NET via interop calls.
     * @param streamReference The ArrayBufferView or Blob used to create the JavaScript stream reference.
     * @returns The JavaScript data reference (this will be the same instance as the given object).
     * @throws Error if the given value is not an Object or doesn't have a valid byteLength.
     */
    function createJSStreamReference(streamReference: ArrayBuffer | ArrayBufferView | Blob): JsObjectReference;
    /**
     * Disposes the given JavaScript object reference.
     *
     * @param jsObjectReference The JavaScript Object reference.
     */
    function disposeJSObjectReference(jsObjectReference: JsObjectReference): void;

    /**
     * Represents the Javascript Object reference.
     */
    interface JsObjectReference {
        __jsObjectId: number;
    }

    /**
     * Represents the .NET instance passed by reference to JavaScript.
     */
    interface DotNetObject {
        /**
         * Invokes the specified .NET instance public method synchronously. Not all hosting scenarios support
         * synchronous invocation, so if possible use invokeMethodAsync instead.
         *
         * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
         * @param args Arguments to pass to the method, each of which must be JSON-serializable.
         * @returns The result of the operation.
         */
        invokeMethod<T>(methodIdentifier: string, ...args: any[]): T;
        /**
         * Invokes the specified .NET instance public method asynchronously.
         *
         * @param methodIdentifier The identifier of the method to invoke. The method must have a [JSInvokable] attribute specifying this identifier.
         * @param args Arguments to pass to the method, each of which must be JSON-serializable.
         * @returns A promise representing the result of the operation.
         */
        invokeMethodAsync<T>(methodIdentifier: string, ...args: any[]): Promise<T>;
        /**
         * Dispose the specified .NET instance.
         */
        dispose(): void;
    }
}
