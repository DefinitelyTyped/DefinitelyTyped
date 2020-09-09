import * as React from 'react';
interface withAuthHeaderProps {
    authHeader: string;
}
declare function withAuthHeader<P extends object>(Component: React.ComponentType<P>): {
    new (props: Readonly<P & withAuthHeaderProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withAuthHeaderProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withAuthHeaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withAuthHeaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withAuthHeaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withAuthHeaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withAuthHeaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & withAuthHeaderProps, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & withAuthHeaderProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & withAuthHeaderProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & withAuthHeaderProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & withAuthHeaderProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & withAuthHeaderProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & withAuthHeaderProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & withAuthHeaderProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withAuthHeader;
