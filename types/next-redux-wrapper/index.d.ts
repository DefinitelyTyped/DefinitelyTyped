// Type definitions for next-redux-wrapper 2.0
// Project: https://github.com/kirill-konshin/next-redux-wrapper
// Definitions by: Steve <https://github.com/stevegeek>
//                 Jungwoo-An <https://github.com/Jungwoo-An>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from 'http';
import { ComponentType } from 'react';
import {
    MapDispatchToPropsParam, MapStateToPropsParam,
    MergeProps, Options as ConnectOptions
} from 'react-redux';
import { Store } from 'redux';

declare namespace nextReduxWrapper {
    interface Options {
        storeKey?: string;
        debug?: boolean;
    }

    interface StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> extends Options {
        isServer: boolean;
        req?: IncomingMessage;
        res?: ServerResponse;
        query?: any;
    }

    interface NextPageComponentMethods {
        getInitialProps(props: any): Promise<any>;
    }

    type NextReduxWrappedComponent<P> = ComponentType<P> & NextPageComponentMethods;

    type NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (
        initialState: TInitialState,
        options: StoreCreatorOptions<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>
    ) => Store<TInitialState>;
}

declare function nextReduxWrapper<TInitialState = any, TStateProps = any, TDispatchProps = any, TOwnProps = any, TMergedProps = any>(
    makeStore: nextReduxWrapper.NextStoreCreator<TInitialState, TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    config?: nextReduxWrapper.Options
): (ComponentType: ComponentType<TOwnProps & TMergedProps>) => nextReduxWrapper.NextReduxWrappedComponent<TOwnProps>;

export default nextReduxWrapper;
