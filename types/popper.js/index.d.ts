// Type definitions for popper.js 1.10
// Project: https://github.com/FezVrasta/popper.js/
// Definitions by: rhysd <https://rhysd.github.io>, joscha <https://github.com/joscha>, seckardt <https://github.com/seckardt>, marcfallows <https://github.com/marcfallows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Popper {
  type Position = 'top' | 'right' | 'bottom' | 'left';
  type Placement = 'auto-start'
      | 'auto'
      | 'auto-end'
      | 'top-start'
      | 'top'
      | 'top-end'
      | 'right-start'
      | 'right'
      | 'right-end'
      | 'bottom-end'
      | 'bottom'
      | 'bottom-start'
      | 'left-end'
      | 'left'
      | 'left-start';
  interface PopperOptions {
    placement?: Placement;
    eventsEnabled?: boolean;
    modifiers?: Modifiers;
    removeOnDestroy?: boolean;
    onCreate?(data: Data): void;
    onUpdate?(data: Data): void;
  }
  type ModifierFn = (data: Data, options: Object) => Data;
  interface BaseModifier {
    order?: number;
    enabled?: boolean;
    fn?: ModifierFn;
  }
  class Modifiers {
    shift?: BaseModifier;
    offset?: BaseModifier & {
      offset?: number | string,
    };
    preventOverflow?: BaseModifier & {
      priority?: Position[],
      padding?: number,
      boundariesElement?: string | Element,
    };
    keepTogether?: BaseModifier;
    arrow?: BaseModifier & {
      element?: string | Element,
    };
    flip?: BaseModifier & {
      behavior?: 'flip' | 'clockwise' | 'counterclockwise' | Position[],
      padding?: number,
      boundariesElement?: string | Element,
    };
    inner?: BaseModifier;
    hide?: BaseModifier;
    applyStyle?: BaseModifier & {
      onLoad?: Function,
      gpuAcceleration?: boolean,
    };
  }
  interface Offset {
    top: number;
    left: number;
    width: number;
    height: number;
  }
  interface Data {
    instance: Popper;
    placement: Placement;
    originalPlacement: Placement;
    flipped: boolean;
    hide: boolean;
    arrowElement: Element;
    styles: Object;
    boundaries: Object;
    offsets: {
      popper: Offset,
      reference: Offset,
      arrow: {
        top: number,
        left: number,
      },
    };
  }
}

declare class Popper {
  static modifiers: Object[];
  static placements: Popper.Placement[];
  static Defaults: Popper.PopperOptions;

  constructor(reference: Element, popper: Element | Object, options?: Popper.PopperOptions);

  destroy(): void;
  update(): void;
  scheduleUpdate(): void;
  enableEventListeners(): void;
  disableEventListeners(): void;
}

declare module 'popper.js' {
  export default Popper;
}
