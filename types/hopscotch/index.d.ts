// Type definitions for Hopscotch v0.2.5
// Project: https://github.com/LinkedInAttic/hopscotch
// Definitions by: Tim Perry <https://github.com/pimterry>, Aurimas <https://github.com/Aurimas1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare type CallbackNameNamesOrDefinition = string | string[] | (() => void);
declare type placementTypes = 'top' | 'bottom' | 'right' | 'left';

interface HopscotchConfiguration {
  bubbleWidth?: number;
  buddleHeight?: number;

  smoothScroll?: boolean;
  scrollDuration?: number;
  scrollTopMargin?: number;

  showCloseButton?: boolean;
  showNextButton?: boolean;
  showPrevButton?: boolean;

  arrowWidth?: number;
  skipIfNoElement?: boolean;
  nextOnTargetClick?: boolean;

  onNext?:  CallbackNameNamesOrDefinition;
  onPrev?:  CallbackNameNamesOrDefinition;
  onStart?: CallbackNameNamesOrDefinition;
  onEnd?:   CallbackNameNamesOrDefinition;
  onClose?: CallbackNameNamesOrDefinition;
  onError?: CallbackNameNamesOrDefinition;
  onShow?:  CallbackNameNamesOrDefinition;
               
  i18n?: {
    nextBtn?: string;
    prevBtn?: string;
    doneBtn?: string;
    skipBtn?: string;
    closeTooltip?: string;
    stepNums?: string[];
  }
}

interface TourDefinition extends HopscotchConfiguration {
  id: string;
  steps: StepDefinition[];
}

interface StepDefinition {
  placement: placementTypes;
  target: string | HTMLElement | Array<string | HTMLElement>

  title?: string;
  content?: string;

  width?: number;
  padding?: number;

  xOffset?: number | 'center';
  yOffset?: number | 'center';
  arrowOffset?: number | 'center';

  delay?: number;
  zIndex?: number;

  showNextButton?: boolean;
  showPrevButton?: boolean;
  showCTAButton?: boolean;

  ctaLabel?: string;
  multipage?: boolean;
  showSkip?: boolean;
  fixedElement?: boolean;
  nextOnTargetClick?: boolean;

  onPrev?: CallbackNameNamesOrDefinition;
  onNext?: CallbackNameNamesOrDefinition;
  onShow?: CallbackNameNamesOrDefinition;
  onCTA?:  CallbackNameNamesOrDefinition;
}

interface HopscotchStatic {
  /**
   * Actually starts the tour. Optional stepNum argument specifies what step to start at.
   */
  startTour(tour: TourDefinition, stepNum?: number): void;
  
  /**
   * Skips to a given step in the tour
   */
  showStep(id: number): void;

  /**
   * Goes back one step in the tour
   */
  prevStep(): void;

  /**
   * Goes forward one step in the tour
   */
  nextStep(): void;

  /**
   * Ends the current tour. If clearCookie is set to false, the tour state is preserved.
   * Otherwise, if clearCookie is set to true or is not provided, the tour state is cleared.
   */
  endTour(clearCookie: boolean): void;

  /**
   * Sets options for running the tour.
   */
  configure(options: HopscotchConfiguration): void;

  /**
   * Returns the currently running tour.
   */
  getCurrTour(): TourDefinition;

  /**
   * Returns the currently running tour.
   */
  getCurrStepNum(): number;

  /**
   * Checks for tour state saved in sessionStorage/cookies and returns the state if
   * it exists. Use this method to determine whether or not you should resume a tour.
   */
  getState(): string;

  /**
   * Adds a callback for one of the event types. Valid event types are:
   * *start*, *end*, *next*, *prev*, *show*, *close*, *error*
   */
  listen(eventName: string, callback: () => void): void; 

  /**
   * Removes a callback for one of the event types.
   */
  unlisten(eventName: string, callback: () => void): void; 

  /**
   * Remove callbacks for hopscotch events. If tourOnly is set to true, only removes
   * callbacks specified by a tour (callbacks set by hopscotch.configure or hopscotch.listen
   * will remain). If eventName is null or undefined, callbacks for all events will be removed.
   */
  removeCallbacks(eventName?: string, tourOnly?: boolean): void;

  /**
   * Registers a callback helper. See the section about Helpers below.
   */
  registerHelper(id: string, helper: (...args: any[]) => void): void;

  /**
   * Resets i18n strings to original default values.
   */
  resetDefaultI18N(): void;

  /**
   * Resets all config options to original values.
   */
  resetDefaultOptions(): void;
}

declare var hopscotch: HopscotchStatic;

declare module "hopscotch" {
  export = hopscotch;
}
