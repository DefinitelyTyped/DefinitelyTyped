// Type definitions for valine 0.1.2
// Project: https://github.com/hharnisc/storybook-figma#readme
// Definitions by: Oliver Alonso <https://github.com/boxgames1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactElement } from 'react';
import { DecoratorFunction } from '@storybook/addons'

type FigmaParams = {
    url: string,
    allowFullScreen?: boolean,
    embedHost?: string,
}

type WithFigmaParams = {
    children: ReactElement,
} & FigmaParams

export function WithFigma(params: WithFigmaParams): ReactElement;

declare module 'storybook-figma' {
    export default function figmaDecorator(params: FigmaParams): DecoratorFunction<ReactElement<unknown>>;
}
