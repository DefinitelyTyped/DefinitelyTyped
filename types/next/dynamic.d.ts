import * as React from "react";

export interface DynamicOptions<TCProps, TLProps> {
    loading?: React.ComponentType<TLProps>;
    ssr?: boolean;
    modules?(
        props: TCProps & TLProps,
    ): { [key: string]: Promise<React.ComponentType<any>> };
    render?(
        props: TCProps & TLProps,
        modules: { [key: string]: React.ComponentType<any> },
    ): void;
}

export class SameLoopPromise<T> extends Promise<T> {
    constructor(
        executor: (
            resolve: (value?: T) => void,
            reject: (reason?: any) => void,
        ) => void,
    );
    setResult(value: T): void;
    setError(value: any): void;
    runIfNeeded(): void;
}
export default function<TCProps, TLProps>(
    componentPromise: Promise<React.ComponentType<TCProps>>,
    options?: DynamicOptions<TCProps, TLProps>,
): React.ComponentType<TCProps & TLProps>;
