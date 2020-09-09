import * as React from 'react';
interface withAuthProps {
    authState: object | null;
}
declare function withAuth<T extends withAuthProps>(Component: React.ComponentType<T>): {
    new (props: Readonly<T & withAuthProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T & withAuthProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & withAuthProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & withAuthProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T & withAuthProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & withAuthProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & withAuthProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: T & withAuthProps, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T & withAuthProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T & withAuthProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T & withAuthProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T & withAuthProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T & withAuthProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T & withAuthProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T & withAuthProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withAuth;
