import { DecoratorFunction, Parameters, StoryApi } from "@storybook/addons";
import { ReactElement, ReactNode } from "react";

export type displayNameFunc = (element: ReactElement) => string;

export interface AddonParameters {
    skip?: number | undefined;
    enableBeautify?: boolean | undefined;
    onBeforeRender?: ((domString: string) => string) | undefined;
    displayName?: string | displayNameFunc | undefined;
}

export type AddWithJSXFunc<StoryFnReturnType> = (
    kind: string,
    fn: () => ReactNode,
    options?: AddonParameters,
) => StoryApi<StoryFnReturnType>;

declare module "@storybook/addons" {
    interface ClientStoryApi<StoryFnReturnType = unknown> {
        storiesOf(kind: string, module: NodeModule):
            & StoryApi<StoryFnReturnType>
            & { addWithJSX: AddWithJSXFunc<StoryFnReturnType> };
        addDecorator(decorator: DecoratorFunction<StoryFnReturnType>): StoryApi<StoryFnReturnType>;
        addParameters(parameter: Parameters & { jsx: AddonParameters }): StoryApi<StoryFnReturnType>;
    }
}

export const jsxDecorator: DecoratorFunction<ReactElement<unknown>>;
