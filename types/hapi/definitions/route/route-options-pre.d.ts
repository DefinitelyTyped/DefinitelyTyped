import {Lifecycle} from "hapi";

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export type RouteOptionsPreArray = RouteOptionsPreAllOptions[];

/**
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export type RouteOptionsPreAllOptions = RouteOptionsPreObject | RouteOptionsPreObject[] | Lifecycle.Method;

/**
 * An object with:
 * * method - a lifecycle method.
 * * assign - key name used to assign the response of the method to in request.pre and request.preResponses.
 * * failAction - A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspre)
 */
export interface RouteOptionsPreObject {
    /**
     * a lifecycle method.
     */
    method: Lifecycle.Method;
    /**
     * key name used to assign the response of the method to in request.pre and request.preResponses.
     */
    assign: string;
    /**
     * A failAction value which determine what to do when a pre-handler method throws an error. If assign is specified and the failAction setting is not 'error', the error will be assigned.
     */
    failAction?: Lifecycle.FailAction;
}
