import { Component } from '@wordpress/element';
import { ComponentType, Consumer as ContextConsumer, ReactNode } from 'react';

export interface SlotFillContext {
    registerSlot(name: string, instance: Component): void;
    unregisterSlot(name: string, instance: Component): void;
    // FIXME: instance is not correctly typed. but there's a bug in the code that assumes this type.
    registerFill(name: string, instance: Component): void;
    // FIXME: instance is not correctly typed. but there's a bug in the code that assumes this type.
    unregisterFill(name: string, instance: Component): void;
    getSlot(name: string): Component;
    getFills(name: string, instance: Component): ReadonlyArray<Component & { occurrence?: number | undefined }>;
}

declare const SlotFillProvider: ComponentType<{ children?: ReactNode }>;

export const Consumer: ContextConsumer<SlotFillContext>;

export default SlotFillProvider;
