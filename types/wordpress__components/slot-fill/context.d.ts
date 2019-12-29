import { Component, ComponentType, Consumer as ContextConsumer } from '@wordpress/element';

export interface SlotFillContext {
    registerSlot(name: string, instance: Component): void;
    unregisterSlot(name: string, instance: Component): void;
    // FIXME: instance is not correctly typed. but there's a bug in the code that assumes this type.
    registerFill(name: string, instance: Component): void;
    // FIXME: instance is not correctly typed. but there's a bug in the code that assumes this type.
    unregisterFill(name: string, instance: Component): void;
    getSlot(name: string): Component;
    getFills(name: string, instance: Component): ReadonlyArray<Component & { occurrence?: number }>;
}

declare const SlotFillProvider: ComponentType;

export const Consumer: ContextConsumer<SlotFillContext>;

export default SlotFillProvider;
