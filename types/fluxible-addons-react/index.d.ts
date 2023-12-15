/// <reference types="node" />
import * as React from "react";
import BaseStore = require("fluxible/addons/BaseStore");
import { ComponentContext } from "fluxible";

export type ConnectableComponent = typeof React.Component | React.ComponentType<any>;

/**
 * Registers change listeners and retrieves state from stores using the `getStateFromStores`
 * method
 * @param Component component to pass state as props to.
 * @param stores List of stores to listen for changes
 * @param getStateFromStores function that receives all stores and should return
 *      the full state object. Receives `stores` hash and component `props` as arguments
 * @param customContextTypes additional `contextTypes` that could be accessed from your `getStateFromStores`
 *      function
 * @returns React.Component
 */
export function connectToStores(
    Component: ConnectableComponent,
    stores: Array<typeof BaseStore> | string[],
    getStateFromStores: (context: ComponentContext, props: any) => any,
    customContextTypes?: any,
): typeof React.Component;

/**
 * Provides context prop to all children as React context
 * @param  component to wrap
 * @param customContextTypes Custom contextTypes to add
 * @returns React.Component
 */
export function provideContext(Component: ConnectableComponent, customContextTypes?: any): typeof React.Component;
