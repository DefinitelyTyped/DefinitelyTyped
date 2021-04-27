import { Passage } from "./passage";

declare global {
    namespace JQuery {
        interface PassageNavigationEvent<TDelegateTarget = any, TData = any, TCurrentTarget = any, TTarget = any>
            extends TriggeredEvent<TDelegateTarget, TData, TCurrentTarget, TTarget> {
            /**
             * The incoming passage object.
             */
            passage: Passage;
        }

        interface PassageRenderingEvent<TDelegateTarget = any, TData = any, TCurrentTarget = any, TTarget = any>
            extends PassageNavigationEvent<TDelegateTarget, TData, TCurrentTarget, TTarget> {
            /**
             * The element which holds (or will be holding in case of the ':passageinit' event) the redered passage.
             */
            content: HTMLElement;
        }

        interface TypeToTriggeredEventMap<TDelegateTarget, TData, TCurrentTarget, TTarget> {
            ':passageinit': PassageNavigationEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
            ':passagestart': PassageRenderingEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
            ':passagerender': PassageRenderingEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
            ':passagedisplay': PassageRenderingEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
            ':passageend': PassageRenderingEvent<TDelegateTarget, TData, TCurrentTarget, TTarget>;
        }
    }
}

export {};
