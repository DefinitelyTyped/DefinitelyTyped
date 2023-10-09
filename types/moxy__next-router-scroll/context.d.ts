import { Context } from "react";
import { ShouldUpdateScroll } from "scroll-behavior";
import { NextScrollBehaviorContext } from "./scroll-behavior";

export default RouterScrollProvider;

declare const RouterScrollProvider: Context<RouterScrollContext>;

export interface RouterScrollContext {
    updateScroll: (prevContext?: NextScrollBehaviorContext | null, context?: NextScrollBehaviorContext | null) => void;
    registerElement: (
        key: string,
        element: HTMLElement,
        shouldUpdateScroll?: ShouldUpdateScroll<NextScrollBehaviorContext> | null,
        context?: NextScrollBehaviorContext,
    ) => void;
    unregisterElement: (key: string) => void;
}
