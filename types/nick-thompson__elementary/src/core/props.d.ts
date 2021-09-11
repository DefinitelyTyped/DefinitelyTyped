import { NativeNodeType, CompositeNodeType, NodeType } from './types';
import { Node } from './node';
import { Child } from './children';

// for docs
// noinspection ES6UnusedImports
import { core } from './';


// Base

/**
 * Base props object for {@link Node}.
 *
 * Unlike {@link KeyProps}, this type allows for any prop value with a
 * string key.
 * Useful in some situations.
 *
 * @memberOf core
 * @interface Props
 *
 * @see core
 * @see KeyProps
 */
export declare interface Props
{
    [key: string]: any;
}

/**
 * Base props object for {@link Node}.
 *
 * Key determines whether props changed or the whole node changed upon
 * re-render.
 *
 * @memberOf core
 * @interface KeyProps
 *
 * @property {string?} [key = '']
 * key of the node being created
 *
 * @see core
 * @see Props
 */
export declare interface KeyProps
{
    key?: string;
}


// Basics

/**
 * Props for el.in.
 *
 * @memberOf core
 * @interface InProps
 * @extends KeyProps
 *
 * @property {number} [channel = 0]
 * input channel of the el.in node
 *
 * @see core
 * @see KeyProps
 */
export declare interface InProps extends KeyProps
{
    channel?: number;
}

/**
 * Props for el.const.
 *
 * @memberOf core
 * @interface ConstProps
 * @extends KeyProps
 *
 * @property {number} [value = 0]
 * value of the el.const node
 *
 * @see core
 * @see KeyProps
 */
export declare interface ConstProps extends KeyProps
{
    value: number;
}


// Delays

/**
 * Props for el.delay.
 *
 * Size determines the delay time.
 *
 * @memberOf core
 * @interface DelayProps
 * @extends KeyProps
 *
 * @property {number} [size = 0]
 * maximum delay line in samples
 *
 * @see core
 * @see KeyProps
 */
export declare interface DelayProps extends KeyProps
{
    size?: number;
}


// Filters

/**
 * Props for el.convolve.
 *
 * @memberOf core
 * @interface ConvolveProps
 * @extends KeyProps
 *
 * @property {string} [path = '']
 * path to the file of the impulse response on disk
 *
 * @see core
 * @see KeyProps
 */
export declare interface ConvolveProps extends KeyProps
{
    path?: string;
}


// Samples

/**
 * Props for el.sample.
 *
 * @memberOf core
 * @interface SampleProps
 * @extends KeyProps
 *
 * @property {string=0} [path = '']
 * path to the file of the sample
 *
 * @property {number} [channel = 0]
 * nodes can output only one channel so you have to select the channel to read
 * from the sample
 *
 * @property {('trigger' | 'gate' | 'loop')} [mode = 'trigger']
 * - trigger: plays the sample once fully on a rising edge of the pulse train
 * - gate: resumes playing the sample on a rising edge and pauses on a falling
 *   edge of the pulse train until the end of the sample
 * - loop: same as gate but it doesn't stop at the end of the sample, instead
 *   it continues playing it back from the start in a loop
 *
 * @property {number} [startOffset = 0]
 * offset in samples from the start of the sample where playback starts
 *
 * @property {number} [endOffset = 0]
 * offset in samples from the end of the sample where playback ends
 *
 * @see core
 * @see KeyProps
 */
export declare interface SampleProps extends KeyProps
{
    path?: string,
    channel?: number,
    mode?: 'trigger' | 'gate' | 'loop',
    startOffset?: number,
    stopOffset?: number
}


/**
 * Props for el.table.
 * Properties 'path' and 'data' are mutually exclusive.
 *
 * @memberOf core
 * @interface TableProps
 * @extends KeyProps
 *
 * @property {string} [path = '']
 * the location of the sample file on disk
 *
 * @property {Float32Array} [data = null]
 * manually constructed lookup table data
 *
 * @property {number} [number = 0]
 * the channel to read from the sample
 *
 * @see core
 * @see KeyProps
 */
export declare type TableProps =
    KeyProps &
    ({
         path?: string,
         data?: never
     } | {
         path?: never,
         data?: Float32Array
     }) &
    {
        channel?: number
    };


// Signals

/**
 * Props for el.seq
 *
 * @interface SeqProps
 * @extends KeyProps
 *
 * @property {Array<number>} [seq = []]
 * sequence of values to generate
 *
 * @property {boolean} [hold = false]
 * when true, continues to output the sequence value until the next trigger
 *
 * @property {boolean} [loop = false]
 * when true, sequence repeats, looping from start to end, indefinitely
 *
 * @see core
 * @see KeyProps
 */
export declare interface SeqProps extends KeyProps
{
    seq?: Array<number>,
    hold?: boolean,
    loop?: boolean
}


// Generic

/**
 * Type of props of any given {@link NodeType}.
 *
 * @memberOf core
 * @template T
 *
 * @typedef {
 *   {
 *       in: InProps | KeyProps,
 *       const: ConstProps,
 *       delay: DelayProps,
 *       convolve: ConvolveProps,
 *       sample: SampleProps,
 *       table: TableProps,
 *       seq: SeqProps,
 *       [other: string]: KeyProps
 *   }[T]
 * }
 *
 * @see core
 * @see NativeNodeType
 * @see InProps
 * @see ConstProps
 * @see DelayProps
 * @see ConvolveProps
 * @see SampleProps
 * @see TableProps
 * @see SeqProps
 * @see KeyProps
 */
export declare type NativeNodeProps<T extends NativeNodeType> =
    {
        in: InProps | KeyProps,
        const: ConstProps,
        delay: DelayProps,
        convolve: ConvolveProps,
        sample: SampleProps,
        table: TableProps,
        seq: SeqProps
        [other: string]: KeyProps
    }[T];

/**
 * Type of props of any given {@link CompositeNodeType}.
 *
 * @template T
 * @memberOf core
 *
 * @typedef {Props}
 *
 * @see core
 * @see Props
 */
export declare type CompositeNodeProps<T extends CompositeNodeType> =
    Parameters<T> extends [] ? KeyProps :
    Parameters<T> extends [infer IProps, ...any] ?
    IProps extends Child ? KeyProps : IProps & KeyProps :
    never;


/**
 * Type of props of any {@link NodeType}.
 *
 * @memberOf core
 * @template T
 *
 * @typedef {
 *   T extends NativeNodeType ? NativeNodeProps<T> :
 *   CompositeNodeProps;
 * }
 *
 * @see core
 * @see NodeType
 * @see NativeNodeType
 * @see NativeNodeProps
 * @see CompositeNodeProps
 */
export declare type NodeProps<T extends NodeType> =
    NodeType extends T ? Props :
    T extends NativeNodeType ? NativeNodeProps<T> :
    T extends CompositeNodeType ? CompositeNodeProps<T> :
    never;
