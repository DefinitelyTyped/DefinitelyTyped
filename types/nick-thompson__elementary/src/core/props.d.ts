import { Node } from './nodes';

// TODO: document


/**
 * Base props object for {@link Node}.
 *
 * Key determines whether props changed or the whole node changed upon
 * re-render.
 *
 * @typedef {{key?: string}} Props
 */
export declare interface Props
{
    key?: string;
}


/**
 * Base props object for {@link Node}.
 *
 * Unlike {@link Props}, this type allows any key and any prop value.
 * Useful in some situations.
 *
 * @typedef {Props & {[key: string]: any}} AnyProps
 */
export declare interface AnyProps extends Props
{
    [key: string]: any;
}


// Basics

/**
 *
 */
export declare interface InProps extends Props
{
    channel: number;
}

/**
 *
 */
export declare interface ConstProps extends Props
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
export declare interface DelayProps extends Props
{
    size: number;
}


// Filters

/**
 *
 */
export declare interface ConvolveProps extends Props
{
    path: string;
}


// Signals

/**
 *
 */
export declare interface SeqProps extends Props
{
    seq: Array<number>,
    hold?: boolean,
    loop?: boolean
}


// Samples

/**
 *
 */
export declare interface SampleProps extends Props
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
    Props &
    ({
         path: string
     } | {
         data: Float32Array
     }) &
    {
        channel?: number
    };
