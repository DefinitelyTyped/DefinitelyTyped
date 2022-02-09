// Type definitions for react-wait 0.3
// Project: https://github.com/f/react-wait#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
//                 Paweł Maciejewski <https://github.com/pwlmaciejewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType, FunctionComponent, ReactNode } from 'react';

export const Waiter: FunctionComponent<{ children?: ReactNode }>;

export interface WaitingContextWaitProps {
    children?: ReactNode;
    fallback: JSX.Element;
}

export interface WaitProps extends WaitingContextWaitProps {
    on: string;
}

export interface WaitingContext {
    isWaiting(): boolean;
    startWaiting(): void;
    endWaiting(): void;
    Wait: ComponentType<WaitingContextWaitProps>;
}

export interface UseWaitAPI {
    /**
     * Returns an array of waiters.
     */
    waiters: string[];
    /**
     * Using Wait Component
     *
     * ```tsx
     * function Component() {
     *   const { Wait } = useWait();
     *   return (
     *     <Wait on="the waiting message" fallback={<div>Waiting...</div>}>
     *       The content after waiting done
     *     </Wait>
     *   );
     * }
     * ```
     *
     * Better example for a button with loading state:
     * ```tsx
     * <button disabled={isWaiting("creating user")}>
     *   <Wait on="creating user" fallback={<div>Creating User...</div>}>
     *     Create User
     *   </Wait>
     * </button>
     * ```
     */
    Wait: ComponentType<WaitProps>;
    /**
     * Returns boolean value if any loader exists in context.
     *
     * ```tsx
     * const { anyWaiting } = useWait();
     * return <button disabled={anyWaiting()}>Disabled while waiting</button>;
     * ```
     */
    anyWaiting(): boolean;
    /**
     * Returns boolean value if given loader exists in context.
     *
     * ```tsx
     * const { isWaiting } = useWait();
     * return (
     *   <button disabled={isWaiting("creating user")}>
     *     Disabled while creating user
     *   </button>
     * );
     * ```
     */
    isWaiting(waiter: string): boolean;
    /**
     * Starts the given waiter.
     *
     * ```tsx
     * const { startWaiting } = useWait();
     * return <button onClick={() => startWaiting("message")}>Start</button>;
     * ```
     */
    startWaiting(waiter: string): void;

    /**
     * Stops the given waiter.
     *
     * ```tsx
     * const { end } = useWait();
     * return <button onClick={() => endWaiting("message")}>Stop</button>;
     * ```
     */
    endWaiting(waiter: string): void;
    /**
     * Creates a waiting context.
     *
     * ```tsx
     * const { startWaiting, endWaiting, isWaiting, Wait } = createWaitingContext("creating user");
     *  return (
     *   <button disabled={isWaiting()}>
     *     Disabled while creating user
     *   </button>
     * );
     * ```
     */
    createWaitingContext(waiter: string): WaitingContext;
}

export function useWait(): UseWaitAPI;
