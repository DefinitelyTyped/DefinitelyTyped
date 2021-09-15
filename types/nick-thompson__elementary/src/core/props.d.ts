import { NativeNodeType, CompositeNodeType, NodeType } from './types';
import { Node } from './node';
import { Child } from './children';

// for docs
// noinspection ES6UnusedImports
import { core } from './';
// noinspection ES6UnusedImports
import * as el from '../../';

// Base

/**
 * Base props object for {@link Node}.
 *
 * Unlike {@link KeyProps}, this type allows for any prop value with a
 * string key.
 * Useful in some situations.
 *
 * @see core
 * @see KeyProps
 */
export interface Props {
    [key: string]: any;
}

/**
 * Base props object for {@link Node}.
 *
 * Key determines whether props changed or the whole node changed upon
 * re-render.
 *
 * @see core
 * @see Props
 */
export interface KeyProps {
    /**
     * Key of the node being created.
     */
    key?: string;
}

// Basics

/**
 * Props for el.in.
 *
 * @see core
 * @see el.in
 * @see KeyProps
 */
export interface InProps extends KeyProps {
    /**
     * Input channel of the el.in node.
     *
     * @see InProps
     * @see el.in
     */
    channel?: number;
}

/**
 * Props for el.const.
 *
 * @see core
 * @see el.const
 * @see KeyProps
 */
export interface ConstProps extends KeyProps {
    /**
     * Value of the el.const node.
     *
     * @see ConstProps
     * @see el.const
     */
    value: number;
}

// Delays

/**
 * Props for el.delay.
 *
 * @see core
 * @see KeyProps
 */
export interface DelayProps extends KeyProps {
    /**
     * Maximum delay line in samples.
     *
     * @see el.delay
     * @see DelayProps
     */
    size?: number;
}

// Filters

/**
 * Props for el.convolve.
 *
 * @see core
 * @see KeyProps
 */
export interface ConvolveProps extends KeyProps {
    /**
     * Path to the file of the impulse response on disk.
     *
     * @see ConvolveProps
     * @see el.convolve
     */
    path?: string;
}

// Samples

/**
 * Props for el.sample.
 *
 * @see core
 * @see KeyProps
 */
export interface SampleProps extends KeyProps {
    /**
     * Path to the file of the sample.
     *
     * @see SampleProps
     * @see el.sample
     */
    path?: string;

    /**
     * Nodes can output only one channel so you have to select the channel
     * to read from the sample.
     *
     * @see SampleProps
     * @see el.sample
     */
    channel?: number;

    /**
     * - trigger: plays the sample once fully on a rising edge of the pulse
     *   train
     * - gate: resumes playing the sample on a rising edge and pauses on a
     *   falling edge of the pulse train until the end of the sample
     * - loop: same as gate but it doesn't stop at the end of the sample,
     *   instead it continues playing it back from the start in a loop
     *
     * @see SampleProps
     * @see el.sample
     */
    mode?: 'trigger' | 'gate' | 'loop';

    /**
     * Offset in samples from the start of the sample where playback starts.
     *
     * @see SampleProps
     * @see el.sample
     */
    startOffset?: number;

    /**
     * Offset in samples from the end of the sample where playback ends.
     *
     * @see SampleProps
     * @see el.sample
     */
    stopOffset?: number;
}

/**
 * Props for el.table.
 * Properties 'path' and 'data' are mutually exclusive.
 *
 * @see core
 * @see KeyProps
 */
export type TableProps =
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
 * @see core
 * @see KeyProps
 */
export interface SeqProps extends KeyProps {
    /**
     * Sequence of values to generate.
     *
     * @see SeqProps
     * @see el.seq
     */
    seq?: number[];

    /**
     * When true, continues to output the sequence value until the next trigger.
     *
     * @see SeqProps
     * @see el.seq
     */
    hold?: boolean;

    /**
     * When true, sequence repeats, looping from start to end, indefinitely.
     *
     * @see SeqProps
     * @see el.seq
     */
    loop?: boolean;
}

// Generic

/**
 * Type of props of any given {@link NodeType}.
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
export type NativeNodeProps<T extends NativeNodeType> =
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
 * @see core
 * @see Props
 */
export type CompositeNodeProps<T extends CompositeNodeType> =
    Parameters<T> extends [] ? KeyProps :
    Parameters<T> extends [infer IProps, ...any] ?
    IProps extends Child ? KeyProps : IProps & KeyProps :
    never;

/**
 * Type of props of any {@link NodeType}.
 *
 * @see core
 * @see NodeType
 * @see NativeNodeType
 * @see NativeNodeProps
 * @see CompositeNodeProps
 */
export type NodeProps<T extends NodeType> =
    NodeType extends T ? Props :
    T extends NativeNodeType ? NativeNodeProps<T> :
    T extends CompositeNodeType ? CompositeNodeProps<T> :
    never;
