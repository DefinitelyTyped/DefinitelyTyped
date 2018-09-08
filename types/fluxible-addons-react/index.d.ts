// Type definitions for fluxible-addons-react 0.2
// Project: https://github.com/yahoo/fluxible#readme
// Definitions by: xbim <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
/// <reference types="node" />
import * as React from 'react';
import BaseStore = require('fluxible/addons/BaseStore');
import {ComponentContext} from "fluxible";


export function connectToStores
(Component: typeof React.Component,
 stores: Array<typeof BaseStore> | Array<string>,
 getStateFromStores: (context: ComponentContext, props: any) => any): typeof React.Component;

/**
 * Provides context prop to all children as React context
 * @param  component to wrap
 * @param customContextTypes Custom contextTypes to add
 * @returns React.Component
 */
export function provideContext(Component: typeof React.Component, customContextTypes?: any): typeof React.Component



