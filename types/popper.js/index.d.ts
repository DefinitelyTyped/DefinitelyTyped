// Type definitions for popper.js v1.8.5
// Project: https://github.com/FezVrasta/popper.js/
// Definitions by: rhysd <https://rhysd.github.io>, joscha <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Popper {
  export interface PopperOptions {
    placement?: string;
    boundariesPadding?: number;
    modifiers?: {
      order?: number,
      enabled?: boolean,
      fn?: Function,
      'function'?: Function,
      onLoad?: Function,
      applyStyle?: {
        gpuAcceleration?: boolean,
      },
      preventOverflow?: {
        boundariesElement?: string | Element,
        priority?: ('left' | 'right' | 'top' | 'bottom')[],
      },
      offset?: {
        offset?: number,
      },
      flip?: {
        behavior?: string | string[],
        boundariesElement?: string | Element,
      },
    };
    modifiersIgnored?: string[];
    removeOnDestroy?: boolean;
    arrowElement?: string | Element;
    onCreate?(data: Popper.Data): void;
    onUpdate?(data: Popper.Data): void;
  }
  export class Modifiers {
    applyStyle(data: Object): Object;
    shift(data: Object): Object;
    preventOverflow(data: Object): Object;
    keepTogether(data: Object): Object;
    flip(data: Object): Object;
    offset(data: Object): Object;
    arrow(data: Object): Object;
  }
  export interface Data {
    placement: string;
    offsets: {
      popper: {
        position: string;
        top: number;
        left: number;
      };
    };
  }
}

declare class Popper {
  public modifiers: Popper.Modifiers;
  public placement: string;

  constructor(reference: Element, popper: Element | Object, options?: Popper.PopperOptions);

  destroy(): void;
  update(): void;
  parse(config: Object): Element;
  runModifiers(data: Object, modifiers: string[], ends: Function): void;
  isModifierRequired(): boolean;
}

declare module 'popper.js' {
  export default Popper;
}
