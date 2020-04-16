// Type definitions for @testing-library/react 10.0
// Project: https://github.com/testing-library/react-testing-library
// Definitions by: Alex Krolick <https://github.com/alexkrolick>
//                 Kent C Dodds <https://github.com/kentcdodds>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Weyert de Boer <https://github.com/weyert>
//                 Ifiok Jr. <https://github.com/ifiokjr>
//                 Daniel Afonso <https://github.com/danieljcafonso>
//                 Tim Swalling <https://github.com/timswalling>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { OptionsReceived as PrettyFormatOptions } from 'pretty-format';
import { queries, Queries, BoundFunction } from '@testing-library/dom';
import { act as reactAct } from 'react-dom/test-utils';

export * from '@testing-library/dom';

export type RenderResult<Q extends Queries = typeof queries> = {
    container: HTMLElement;
    baseElement: HTMLElement;
    debug: (
      baseElement?: HTMLElement | DocumentFragment | Array<HTMLElement | DocumentFragment>,
      maxLength?: number,
      options?: PrettyFormatOptions
    ) => void;
    rerender: (ui: React.ReactElement) => void;
    unmount: () => boolean;
    asFragment: () => DocumentFragment;
} & { [P in keyof Q]: BoundFunction<Q[P]> };

export interface RenderOptions<Q extends Queries = typeof queries> {
    container?: HTMLElement;
    baseElement?: HTMLElement;
    hydrate?: boolean;
    queries?: Q;
    wrapper?: React.ComponentType;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Render into a container which is appended to document.body. It should be used with cleanup.
 */
export function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
export function render<Q extends Queries>(ui: React.ReactElement, options: RenderOptions<Q>): RenderResult<Q>;

/**
 * Unmounts React trees that were mounted with render.
 */
export function cleanup(): Promise<void>;

/**
 * Simply calls ReactDOMTestUtils.act(cb)
 * If that's not available (older version of react) then it
 * simply calls the given callback immediately
 */
export const act: typeof reactAct extends undefined ? (callback: () => void) => void : typeof reactAct;
