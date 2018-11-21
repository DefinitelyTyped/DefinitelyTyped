// Type definitions for react-native-safe-area 0.5
// Project: https://github.com/miyabi/react-native-safe-area#readme
// Definitions by: Pavlos Vinieratos <https://github.com/pvinis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="react" />

declare module 'react-native-safe-area' {
    type Direction =
        | 'top'
        | 'bottom'
        | 'left'
        | 'right'
        | 'topLeft' // DEPRECATED
        | 'topAndLeft'
        | 'topRight' // DEPRECATED
        | 'topAndRight'
        | 'bottomLeft' // DEPRECATED
        | 'bottomAndLeft'
        | 'bottomRight' // DEPRECATED
        | 'bottomAndRight'
        | 'vertical'
        | 'horizontal'
        | 'verticalAndLeft'
        | 'verticalAndRight'
        | 'horizontalAndTop'
        | 'horizontalAndBottom'
        | 'all';

    export function withSafeArea(
        WrappedComponent: React.ComponentType<any>,
        applyTo: 'margin' | 'padding' | 'absolutePosition' | 'contentInset' = 'margin',
        direction: Direction = 'all',
    ): React.ComponentType<any>;
}
