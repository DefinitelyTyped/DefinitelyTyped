import { core } from '../core';


export declare interface ReservedMath
{
    /**
     * Identity export declare function, f(x) = x.
     *
     * @param {core.Node} operand
     * child to return the result of
     * @returns {core.Node}
     * a node that returns the result of the child
     */
    in(
        operand: core.Node): core.Node;
}
