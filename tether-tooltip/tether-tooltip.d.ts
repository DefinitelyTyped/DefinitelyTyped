// Type definitions for Tether-Tooltip v0.6
// Project: http://github.hubspot.com/tooltip/
// Definitions by: Trevor Fountain <https://github.com/doches>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module tether {

    interface Tooltip {
      new(options: TooltipOptions): Tooltip;
    }

    interface TooltipOptions {
      target: HTMLElement,
      position?: string;
      content?: HTMLElement | string;
      classes?: string;
      constrainToWindow?: boolean;
      constrainToScrollParent?: boolean;
    }
}

declare module "tether" {
    export = tether;
}

declare var tooltip: tether.Tooltip;
