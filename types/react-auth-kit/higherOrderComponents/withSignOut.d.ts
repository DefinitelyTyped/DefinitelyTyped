import * as React from 'react';
interface withSignOutProps {
    signOut(): boolean;
}
declare function withSignOut<P extends object>(Component: React.ComponentType<P>): {
    new (props: Readonly<P & withSignOutProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withSignOutProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withSignOutProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withSignOutProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withSignOutProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withSignOutProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withSignOutProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & withSignOutProps, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withSignOutProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withSignOutProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withSignOutProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withSignOutProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withSignOutProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withSignOutProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withSignOutProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withSignOut;
