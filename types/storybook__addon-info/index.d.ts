// Type definitions for @storybook/addon-info 5.2
// Project: https://github.com/storybookjs/storybook
// Definitions by: Mark Kornblum <https://github.com/mkornblum>
//                 Mattias Wikstrom <https://github.com/fyrkant>
//                 Kevin Lee <https://github.com/RunningCoderLee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ComponentType, ReactElement } from 'react';
import { DecoratorFunction, StoryFn, Parameters, StoryApi } from '@storybook/addons';
import { StoryContext } from '@storybook/csf/dist/story';

export interface WrapStoryProps {
    storyFn?: StoryFn | undefined;
    context?: object | undefined;
    options?: object | undefined;
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
    text?: string | undefined;
    header?: boolean | undefined;
    inline?: boolean | undefined;
    source?: boolean | undefined;
    propTables?: Array<ComponentType<any>> | false | undefined;
    propTablesExclude?: Array<ComponentType<any>> | undefined;
    styles?: object | undefined;
    components?: {
        [key: string]: ComponentType<any>
    } | undefined;
    /**
     * @deprecated "marksyConf" option has been renamed to "components"
     */
    marksyConf?: object | undefined;
    maxPropsIntoLine?: number | undefined;
    maxPropObjectKeys?: number | undefined;
    maxPropArrayLength?: number | undefined;
    maxPropStringLength?: number | undefined;
    TableComponent?: ComponentType<TableComponentOptionProps> | undefined;
    excludedPropTypes?: string[] | undefined;
}

export function withInfo<A = unknown>(
    story: StoryFn<A>,
    context: StoryContext<{ component: any; storyResult: A; }>
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
