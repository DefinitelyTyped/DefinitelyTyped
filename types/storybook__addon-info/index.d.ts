// Type definitions for @storybook/addon-info 5.2
// Project: https://github.com/storybookjs/storybook
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
//                 Mattias Wikstrom <https://github.com/fyrkant>
//                 Kevin Lee <https://github.com/RunningCoderLee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ComponentType, ReactElement } from 'react';
import { DecoratorFunction, StoryFn, StoryContext, Parameters, StoryApi } from '@storybook/addons';

export interface WrapStoryProps {
    storyFn?: StoryFn;
    context?: object;
    options?: object;
}

export interface TableComponentOptionProps {
    propDefinitions: Array<{
        property: string;
        propType: object | string; // TODO: info about what this object is...
        required: boolean;
        description: string;
        defaultValue: any;
    }>;
}

export interface Options {
    text?: string;
    header?: boolean;
    inline?: boolean;
    source?: boolean;
    propTables?: Array<ComponentType<any>> | false;
    propTablesExclude?: Array<ComponentType<any>>;
    styles?: object;
    components?: {
        [key: string]: ComponentType<any>
    };
    /**
     * @deprecated "marksyConf" option has been renamed to "components"
     */
    marksyConf?: object;
    maxPropsIntoLine?: number;
    maxPropObjectKeys?: number;
    maxPropArrayLength?: number;
    maxPropStringLength?: number;
    TableComponent?: ComponentType<TableComponentOptionProps>;
    excludedPropTypes?: string[];
}

export function withInfo<A = unknown>(
    story: StoryFn<A>,
    context: StoryContext
): ReturnType<DecoratorFunction<A>>;

// Legacy, but supported
/**
 * @deprecated withInfo wrapper is deprecated, use the info parameter globally or on each story
 */
export function withInfo(
    textOrOptions?: string | Options,
): (storyFn: StoryFn) => (context?: object) => ReactElement<WrapStoryProps>;

/**
 * @deprecated setDefaults is deprecated. Instead, you can pass options into withInfo(options) directly, or use the info parameter.
 */
export function setDefaults(newDefaults: Options): Options;

declare module '@storybook/addons' {
    interface ClientStoryApi<StoryFnReturnType = unknown> {
        storiesOf(kind: string, module: NodeModule): StoryApi<StoryFnReturnType>;
        addParameters(parameter: Parameters & { info: Options }): StoryApi<StoryFnReturnType>;
        addDecorator(decorator: DecoratorFunction<StoryFnReturnType>): StoryApi<StoryFnReturnType>;
    }
}
