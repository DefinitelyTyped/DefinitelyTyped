interface HummerComponent {
  style: import("../interface/style").HummerCommonStyle;
  enable: boolean;
  addEventListener<
    K extends keyof import("../interface/event").EventHandlersEventMap
  >(
    type: K,
    listener: (
      ev: import("../interface/event").EventHandlersEventMap[K]
    ) => void
  ): void;
  removeEventListener<K extends import("../interface/event").EventInScroller>(
    type: K,
    listener: (
      ev: import("../interface/event").EventHandlersEventMap[K]
    ) => void
  ): void;
  addAnimation(
    animation: KeyframeAnimation | BasicAnimation,
    key: string
  ): void;
  removeAnimation(key: string): void;
}

interface ContainerComponent {
  appendChild(view: HummerComponent): void;
  removeChild(view: HummerComponent): void;
  removeAll(): void;
  insertBefore(view: HummerComponent, existingChild: HummerComponent): void;
  replaceChild(newView: HummerComponent, oldView: HummerComponent): void;
}
