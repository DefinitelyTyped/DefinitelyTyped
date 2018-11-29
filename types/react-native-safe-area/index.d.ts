// Type definitions for react-native-safe-area 0.5
// Project: https://github.com/miyabi/react-native-safe-area#readme
// Definitions by: Pavlos Vinieratos <https://github.com/pvinis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

import { EmitterSubscription } from 'react-native';

// from `TypeDefinition.js`
export interface SafeAreaInsets { top: number; left: number; bottom: number; right: number; }

// from `SafeArea.[ios|android].js`
declare namespace SafeArea {
    function getSafeAreaInsetsForRootView(): Promise<{ safeAreaInsets: SafeAreaInsets }>;
    function addEventListener(eventType: string, listener: (...args: any[]) => any, context?: any): EmitterSubscription;
    function removeEventListener(eventType: string, listener: (...args: any[]) => any): void;
}
export default SafeArea;

// from `withSafeArea.js`
export type Direction =
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
    applyTo?: 'margin' | 'padding' | 'absolutePosition' | 'contentInset',
    direction?: Direction,
): React.ComponentType<any>;
