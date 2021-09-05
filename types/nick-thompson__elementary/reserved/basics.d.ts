import { core } from '../core';


// TODO: document

export declare interface InProps extends core.Props
{
    channel: number;
}

export declare interface ReservedBasics
{
    /**
     * Used for accepting an input signal from the audio driver,
     * whereupon the channel prop will be used to decide which
     * incoming signal channel will be passed forward.
     *
     * @param {InProps} props
     * prop object
     * @returns {core.Node}
     * a node that returns a stream of the input
     */
    in(
        props: InProps): core.Node;
}


// TODO: document

export declare interface ConstProps extends core.Props
{
    value: number;
}

export declare interface ReservedBasics
{
    /**
     * A constant value node whose value is set by the value prop.
     * Commonly, you'll see the const node expressed as a numeric literal.
     *
     * In the following example, the two expressions are equivalent.
     * @example
     *     el.cycle(440)
     *     el.cycle(el.const({value: 440}))
     *
     * @param {ConstProps} props
     * prop object
     * @returns {core.Node}
     * node that returns the given value
     */
    const(
        props: ConstProps): core.Node;
}
