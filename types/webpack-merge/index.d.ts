// Type definitions for webpack-merge 4.1
// Project: https://github.com/survivejs/webpack-merge
// Definitions by: Simon Hartcher <https://github.com/deevus>, Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Configuration } from 'webpack';

export = webpackMerge;

declare const webpackMerge: webpackMerge.WebpackMerge;

declare namespace webpackMerge {
    type CustomizeArrayFunction = (a: any[], b: any[], key: string) => any[] | null | undefined;
    type CustomizeObjectFunction = (a: {}, b: {}, key: string) => {} | null | undefined;
    type UniqueFunction = (field: string, fields: string[], keyFn: (field: any) => string) => CustomizeArrayFunction;
    interface CustomizeOptions {
        customizeArray?: CustomizeArrayFunction | UniqueFunction;
        customizeObject?: CustomizeObjectFunction;
    }
    interface MultipleConfiguration {
        [name: string]: Configuration;
    }
    type ConfigurationMergeFunction = (...configs: Configuration[]) => Configuration;
    type MultipleConfigurationMergeFunction = (...configs: MultipleConfiguration[]) => Configuration[];
    type ConfigurationMergeConfigFunction = (customizeOptions: CustomizeOptions) => ConfigurationMergeFunction;
    type MergeFunction = ConfigurationMergeFunction | ConfigurationMergeConfigFunction;
    type MergeStrategy = 'prepend' | 'append' | 'replace';

    interface WebpackMerge {
        (...configs: Configuration[]): Configuration;
        (customizeOptions: CustomizeOptions): ConfigurationMergeFunction;
        unique: UniqueFunction;
        smart: ConfigurationMergeFunction;
        multiple: MultipleConfigurationMergeFunction;
        strategy(options: { [field: string]: MergeStrategy }): ConfigurationMergeFunction;
        smartStrategy(options: { [key: string]: MergeStrategy }): ConfigurationMergeFunction;
    }
}
