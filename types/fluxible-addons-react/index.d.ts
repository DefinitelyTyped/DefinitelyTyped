// Type definitions for fluxible-addons-react 0.2
// Project: https://github.com/yahoo/fluxible#readme
// Definitions by: xbim <https://github.com/xbim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
/// <reference types="node" />
import * as React from 'react';
import BaseStore = require('fluxible/addons/BaseStore');
import { ComponentContext } from "fluxible";

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
 Component: typeof React.Component,
 stores: Array<typeof BaseStore> | string[],
 getStateFromStores: (context: ComponentContext, props: any) => any,
 customContextTypes?: any): typeof React.Component;

/**
 * Provides context prop to all children as React context
 * @param  component to wrap
 * @param customContextTypes Custom contextTypes to add
 * @returns React.Component
 */
export function provideContext(Component: typeof React.Component, customContextTypes?: any): typeof React.Component;
