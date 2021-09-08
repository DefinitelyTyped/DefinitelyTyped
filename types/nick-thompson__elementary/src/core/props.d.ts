import { NativeNodeType, NodeType } from './types';
import { Node } from './node';

// TODO: document


// Base

/**
 * Base props object for {@link Node}.
 *
 * Unlike {@link KeyProps}, this type allows any key and any prop value.
 * Useful in some situations.
 *
 * @typedef {{[key: string]: any}} Props
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
 * @typedef {{key?: string}} KeyProps
 */
export declare interface KeyProps
{
    key?: string;
}


// Basics

/**
 *
 */
export declare interface InProps extends KeyProps
{
    channel: number;
}

/**
 *
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
 * @typedef {{size: number}} DelayProps
 */
export declare interface DelayProps extends KeyProps
{
    size: number;
}


// Filters

/**
 *
 */
export declare interface ConvolveProps extends KeyProps
{
    path: string;
}


// Signals

/**
 *
 */
export declare interface SeqProps extends KeyProps
{
    seq: Array<number>,
    hold?: boolean,
    loop?: boolean
}


// Samples

/**
 *
 */
export declare interface SampleProps extends KeyProps
{
    path: string,
    channel?: number,
    mode?: 'trigger' | 'gate' | 'loop',
    startOffset?: number,
    stopOffset?: number
}


/**
 *
 */
export declare type TableProps =
    KeyProps &
    ({
         path: string
     } | {
         data: Float32Array
     }) &
    {
        channel?: number
    };


// Generic

/**
 * Given a {@link NativeNodeType} returns a type of props appropriate for the
 * type.
 *
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
 * } NativeNodeProps
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
 * Type of props of any composite {@link Node}.
 *
 * @typedef {{Props}} CompositeNodeProps
 */
export type CompositeNodeProps =
    Props;

/**
 * Given a {@link NodeType} returns a type of props appropriate for the type.
 *
 * @template T
 *
 * @typedef {
 *   T extends NativeNodeType ? NativeNodeProps<T> :
 *   CompositeNodeProps;
 * } NodeProps
 */
export type NodeProps<T extends NodeType> =
    T extends NativeNodeType ? NativeNodeProps<T> :
    CompositeNodeProps;
