/**
 * A collection of helper methods designed to orchestrate the client side socket workflow in a standardized way.
 */
declare class SocketInterface {
    /**
     * A generalized socket trigger interface which standardizes the way that information is provided to the server
     *
     * @param eventName	The socket event name to emit
     * @param eventData	Data provided to the server as part of the event
     * @param options	Additional options which contextualize the socket request
     * @param preHook	If an optional preHook is provided, ensure it does not return false before
     * 					proceeding with the socket emission.
     * @param postHook	The name of an optional post-hook event to call with the resolved context and the
     * 					provided event arguments.
     * @param context	The Entity or Object context for the request. Passed as the first argument to the
     *					preHook.
     * @param success	A function to call upon successful receipt of response.
     *
     * @return			A Promise which resolves to the return value of the provided handler function
     */
    static trigger(
        eventName: string,
        eventData: any,
        options: any,
        {
            preHook,
            postHook,
            context,
            success,
        }: {
            preHook: string;
            postHook: string;
            context: any;
            success: Function;
        },
    ): Promise<any>;

    /**
     * Generalized handler for single-target responses
     */
    static handle(
        response: any,
        handler: Function,
        { postHook, context }: { postHook: string; context: any },
    ): Promise<any>;

    /**
     * A generalized socket trigger interface which standardizes the way that information is provided to the server
     * Similar to the basic trigger method, except this method is responsible for triggering multi-object operations
     *
     * @param eventName	The socket event name to emit
     * @param eventData	Data provided to the server as part of the event
     * @param options	Additional options which contextualize the socket request
     * @param targets	An array of target objects which are being updated
     * @param preHook	If an optional preHook is provided, ensure it does not return false before
     * 					proceeding with the socket emission.
     * @param postHook	The name of an optional post-hook event to call with the resolved context and the
     * 					provided event arguments.
     * @param context	The Entity or Object context for the request. Passed as the first argument to the
     * 					preHook.
     * @param success	A function to call upon successful receipt of response.
     *
     * @return			A Promise which resolves to the return value of the provided handler function
     */
    static triggerMany(
        eventName: string,
        eventData: any,
        options: any,
        targets: any[],
        {
            preHook,
            postHook,
            context,
            success,
        }: {
            preHook: string;
            postHook: string;
            context: any;
            success: Function;
        },
    ): Promise<any>;

    /**
     * Generalized handler for multi-target responses
     */

    static handleMany(
        response: any,
        handler: Function,
        { postHook, context }: { postHook: string; context: any },
    ): Promise<any>;
}
