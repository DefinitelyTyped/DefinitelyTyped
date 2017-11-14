// Type definitions for next-redux-wrapper 1.3
// Project: https://github.com/kirill-konshin/next-redux-wrapper
// Definitions by: Steve <https://github.com/stevegeek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />
/*~ Note that ES6 modules cannot directly export callable functions.
 *~ This file should be imported using the CommonJS-style:
 *~   import x = require('next-redux-wrapper');
 *~
 *~ Refer to the documentation to understand common
 *~ workarounds for this limitation of ES6 modules.
 */

import * as React from 'react';
import { IncomingMessage, ServerResponse } from 'http';
import {
    Store, Component,
    MapDispatchToPropsParam, MapStateToPropsParam,
    MergeProps, Options as ConnectOptions
} from 'react-redux';

export = nextReduxWrapper;

declare function nextReduxWrapper<TInitialState = any, TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any>(
    options: nextReduxWrapper.Options<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>
): (Component: Component<TOwnProps & TMergedProps>) => nextReduxWrapper.NextReduxWrappedComponent;
declare function nextReduxWrapper<TInitialState = any, TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any>(
    createStore: nextReduxWrapper.NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    options?: ConnectOptions
): (Component: Component<TOwnProps & TMergedProps>) => nextReduxWrapper.NextReduxWrappedComponent;

declare namespace nextReduxWrapper {
    interface NextPageComponentMethods {
        getInitialProps(props: any): Promise<any>;
    }
    type NextReduxWrappedComponent = React.Component & NextPageComponentMethods;

    type NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (
        initialState: TInitialState,
        options: StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>
    ) => Store<TInitialState>;

    interface Options<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
        createStore: NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>;
        debug?: boolean;
        storeKey?: string;
        mapStateToProps?: MapStateToPropsParam<TStateProps, TOwnProps>;
        mapDispatchToProps?: MapDispatchToPropsParam<TDispatchProps, TOwnProps>;
        mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>;
        connectOptions?: ConnectOptions;
    }
    interface StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> extends Options<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
        isServer: boolean;
        req?: IncomingMessage;
        res?: ServerResponse;
        query?: any;
    }

    function setPromise(Promise: any): void;
    function setDebug(debug: boolean): void;
}
