import { Disposable, Tooltip } from '../index';

export type TooltipPlacement =
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'auto'
    | 'auto top'
    | 'auto bottom'
    | 'auto left'
    | 'auto right';

/** Associates tooltips with HTML elements or selectors. */
export interface TooltipManager {
    /** Add a tooltip to the given element. */
    add(
        target: HTMLElement | JQueryCompatible,
        options:
            | {
                  item?: object;
              }
            | ({
                  title?: string | (() => string);
                  html?: boolean;
                  keyBindingCommand?: string;
                  keyBindingTarget?: HTMLElement;
              } & {
                  class?: string;
                  placement?: TooltipPlacement | (() => TooltipPlacement);
                  trigger?: 'click' | 'hover' | 'focus' | 'manual';
                  delay?: { show: number; hide: number };
              }),
    ): Disposable;

    /** Find the tooltips that have been applied to the given element. */
    findTooltips(target: HTMLElement): Tooltip[];
}

export interface JQueryCompatible<Element extends Node = HTMLElement> extends Iterable<Element> {
    jquery: string;
}
