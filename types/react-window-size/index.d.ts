// Type definitions for react-window-size 1.2
// Project: https://github.com/finnfiddle/react-window-size
// Definitions by: Jake Richards <https://github.com/jakejrichards>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType } from 'react';

export interface WindowSizeProps {
    windowHeight: number;
    windowWidth: number;
}

export default function<T>(
    ComposedComponent: ComponentType<T & WindowSizeProps>,
): ComponentType<T>;
