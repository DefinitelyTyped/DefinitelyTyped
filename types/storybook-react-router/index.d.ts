import { DecoratorFunction, StoryApi } from "@storybook/addons";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import { ComponentType } from "react";
import { MemoryRouterProps } from "react-router";

export const StoryRouter: ComponentType<{
    story: StoryApi;
    links: object;
    routerProps: MemoryRouterProps;
}>;

declare function storyRouterDecorator(
    links?: object,
    routerProps?: MemoryRouterProps,
): DecoratorFunction<StoryFnReactReturnType>;

export default storyRouterDecorator;
