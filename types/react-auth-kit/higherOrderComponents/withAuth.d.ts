import * as React from 'react';
interface withAuthProps {
    authState: object | null;
}
declare function withAuth<T extends withAuthProps>(Component: React.ComponentType<T>): {
    new (props: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Pick<T, import("utility-types").SetDifference<keyof T, "authState">>, context?: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<T, import("utility-types").SetDifference<keyof T, "authState">>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withAuth;
