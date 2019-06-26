import { ReactElement } from 'react';

export interface ShallowRenderer {
    /**
     * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
     */
    getRenderOutput<E extends ReactElement>(): E;
    /**
     * After `shallowRenderer.render()` has been called, returns shallowly rendered output.
     */
    getRenderOutput(): ReactElement;
    /**
     * Similar to `ReactDOM.render` but it doesn't require DOM and only renders a single level deep.
     * It usually returns shallowly rendered output and return void when rendering.
     */
    render(element: ReactElement, context?: any): void | ReactElement;
    unmount(): void;
}

/**
 * Call this in your tests to create a shallow renderer.
 */
export function createRenderer(): ShallowRenderer;
