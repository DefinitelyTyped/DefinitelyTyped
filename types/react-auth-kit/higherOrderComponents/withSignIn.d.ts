import * as React from 'react';
import { signInFunctionParams } from "../types";
interface withSignInProps {
    signIn(params: signInFunctionParams): boolean;
}
declare function withSignIn<P extends object>(Component: React.ComponentType<P>): {
    new (props: Readonly<P & withSignInProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withSignInProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withSignInProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withSignInProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withSignInProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withSignInProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withSignInProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & withSignInProps, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withSignInProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withSignInProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withSignInProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withSignInProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withSignInProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withSignInProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withSignInProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withSignIn;
