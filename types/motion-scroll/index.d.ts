// Type definitions for motion-scroll 1.0
// Project: https://github.com/ninjabonsai/motion-scroll#readme
// Definitions by: Richard Rogers <https://github.com/ninjabonsai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace MotionScroll;

export function scroll(config: {
  element?: HTMLElement;
  axis?: "x" | "y";
  scrollTo?: number;
  speed?: number;
  easing?: () => void;
  callBack?: () => void;
  delay?: number;
  force?: boolean;
  minScrollTime?: number;
  maxScrollTime?: number;
}): void;
