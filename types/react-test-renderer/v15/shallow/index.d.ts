import { ReactElement } from 'react';

export interface ShallowRenderer {
    /**
     * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
     */
    getRenderOutput<E extends ReactElement>(): E;
    /**
     * Similar to `ReactDOM.render` but it doesn't require DOM and only renders a single level deep.
     */
    render(element: ReactElement, context?: any): void;
    unmount(): void;
}

/**
 * Call this in your tests to create a shallow renderer.
 */
export function createRenderer(): ShallowRenderer;
