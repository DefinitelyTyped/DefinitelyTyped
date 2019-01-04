// Type definitions for @storybook/addon-viewport 4.1
// Project: https://github.com/storybooks/storybook/tree/master/addons/viewport
// Definitions by: Vincent Tunru <https://github.com/Vinnl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { StoryDecorator } from '@storybook/react';

export type ViewportName = string;

export interface ViewportProperties {
    name: ViewportName;
    styles: {
        width?: string,
        height?: string,
        [styleName: string]: any,
    };
    type?: 'desktop' | 'tablet' | 'mobile' | string;
}
export interface ViewportDecoratorOptions {
    /**
     * Default viewport
     */
    name?: ViewportName;
    /**
     * Called whenever different viewport is selected from the dropdown
     */
    onViewportChange: (change: { viewport: ViewportProperties }) => void;
}
export interface ViewportDefinitions {
    [viewportKey: string]: ViewportProperties;
}
export type Viewport = ViewportName | ViewportDecoratorOptions;

export interface ViewportConfiguration {
    viewports?: ViewportDefinitions;
    defaultViewport?: ViewportName;
}

export const INITIAL_VIEWPORTS: ViewportDefinitions;
export function configureViewport(configuration: ViewportConfiguration): void;
export function withViewport(viewport?: Viewport): StoryDecorator;
