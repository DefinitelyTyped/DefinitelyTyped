declare module 'react-native/Libraries/Utilities/codegenNativeCommands' {
    export interface Options<T extends string> {
        readonly supportedCommands: ReadonlyArray<T>;
    }

    function codegenNativeCommands<T extends object>(
        options: Options<keyof T extends string ? keyof T : never>,
    ): T;

    export default codegenNativeCommands;
}

declare module 'react-native/Libraries/Utilities/codegenNativeComponent' {
    import type { HostComponent } from 'react-native';

    export interface Options {
        readonly interfaceOnly?: boolean;
        readonly paperComponentName?: string;
        readonly paperComponentNameDeprecated?: string;
        readonly excludedPlatforms?: ReadonlyArray<'iOS' | 'android'>;
    }

    export type NativeComponentType<T> = HostComponent<T>;

    function codegenNativeComponent<Props extends object>(
        componentName: string,
        options?: Options,
    ): NativeComponentType<Props>;

    export default codegenNativeComponent;
}
