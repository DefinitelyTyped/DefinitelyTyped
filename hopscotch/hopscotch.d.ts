// Type definitions for Hopscotch v0.2.5
// Project: http://linkedin.github.io/hopscotch/
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface TourDefinition {
  id: string;
  steps: StepDefinition[];

  skipIfNoElement: boolean;

  onEnd: () => void;
  onClose: () => void;
}

interface StepDefinition {
  placement: string;
  target: string | HTMLElement | Array<string | HTMLElement>

  title?: string;
  content?: string;

  xOffset?: number;
  yOffset?: number;
  arrowOffset?: number;

  height?: number;
  width?: number;

  multipage?: boolean;
  showNextButton?: boolean;
  nextOnTargetClick?: boolean;

  onShow?: () => void;
}

interface HopscotchStatic {
  startTour(tour: TourDefinition, stepNum?: number): void;
}

declare var hopscotch: HopscotchStatic;

declare module "hopscotch" {
  export = hopscotch;
}
