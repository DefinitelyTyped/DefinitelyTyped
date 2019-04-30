// Type definitions for @storybook/addons 4.1
// Project: https://github.com/storybooks/storybook/tree/master/lib/addons
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import Channel = require("@storybook/channels");
import { RenderFunction, StoryDecorator } from "@storybook/react";

export const mockChannel: Channel;

export interface Context {
    kind: string;
    story: string;
}

export type GetStoryFunc = (context: Context) => ReturnType<StoryDecorator>;

export interface Wrapper<Options, Parameters> {
    (getStory: GetStoryFunc, context: Context, optsAndParams: { options: Options, parameters: Parameters }):
        ReturnType<StoryDecorator>;
}

export interface MakeDecoratorOptions<ParameterName extends string, Options, Parameters> {
    name: string;
    parameterName: ParameterName;
    wrapper: Wrapper<Options, Parameters>;
    skipIfNoParametersOrOptions?: boolean;
    allowDeprecatedUsage?: boolean;
}

export interface DecoratorContext<ParameterName extends string, T> extends Context {
    parameters?: Record<ParameterName, T>;
}

export interface DecoratorWithOptions<ParameterName extends string, T> {
    // Support for older, but not deprecated style:
    //   .addDecorator(decorator(options))
    (story: RenderFunction, context: DecoratorContext<ParameterName, T>): ReturnType<StoryDecorator>;

    // Support for the deprecated style:
    //   .add(decorator(options)(() => <Story />)
    (story: RenderFunction): (context: DecoratorContext<ParameterName, T>) => ReturnType<StoryDecorator>;
}

export interface Decorator<ParameterName extends string, Options, Parameters> {
    // Supports newer style:
    //   .addDecorator(decorator)
    //   .add('story', () => <Story />)
    (story: RenderFunction, context: DecoratorContext<ParameterName, Parameters>): ReturnType<StoryDecorator>;

    // Support for older styles which pass options.
    // See DecoratorWithOptions above.
    (options: Options): DecoratorWithOptions<ParameterName, Parameters>;
    (...options: Options[]): DecoratorWithOptions<ParameterName, Parameters>;
}

// If you manually specify the type parameters, the first type (ParameterName)
// must match the "parameterName" option, ie:
//
//   makeDecorator<"myParam", ..., ...>({ parameterName: "myParam", ... })
//
// TypeScript is pretty good about inferring all of the type generics if you
// include the type declarations on the options/parameters in your wrapper
// function.
export function makeDecorator<ParameterName extends string, Options = any, Parameters = any>(
    options: MakeDecoratorOptions<ParameterName, Options, Parameters>):
        Decorator<ParameterName, Options, Parameters>;

export class AddonStore {
    constructor();
    getChannel(): Channel;
    hasChannel(): boolean;
    setChannel(channel: any): void;
    getPreview(): any;
    getDatabase(): any;
    setDatabase(database: any): void;
    getPanels(): any;
    addPanel(name: any, panel: any): void;
    register(name: any, loader: any): any;
    loadAddons(api: any): any;
}

declare const DefaultAddonStore: AddonStore;
export default DefaultAddonStore;
