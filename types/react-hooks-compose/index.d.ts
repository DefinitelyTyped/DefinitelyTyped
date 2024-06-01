/// <reference types="react"/>

declare namespace ReactHooksCompose {
    function composeHooks<T extends object>(
        props: {
            [K in keyof T]: () => T[K];
        },
        ): (Component: React.ComponentType<T>) => React.FC<Partial<T>>;
}

export = ReactHooksCompose.composeHooks;
