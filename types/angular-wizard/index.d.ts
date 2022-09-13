// Type definitions for Angular Wizard 1.1.1
// Project: https://github.com/mgonto/angular-wizard
// Definitions by: Marko Jurisic <https://github.com/mjurisic>, Ronald Wildenberg <https://github.com/rwwilden>, Rannie Peralta <https://github.com/ranndev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as angular from 'angular';

declare module 'angular' {
  export namespace mgoAngularWizard {
    interface WizardHandler {
      wizard(name?: string): Wizard;
      addWizard(name: string, wizard: Wizard): void;
      removeWizard(name: string): void;
    }

    interface Wizard {
      next(nextHandler?: () => boolean): void;
      previous(): void;
      cancel: () => void;
      goTo(step: number | string): void;
      finish(): void;
      reset: () => void;

      addStep: (step: WzStep) => void;
      currentStep: () => WzStep;
      currentStepNumber(): number;
      currentStepDescription: () => string;
      currentStepTitle: () => string;
      getEnabledSteps(): WzStep[];
      totalStepCount(): number;
      /** Set the edit mode of the wizard.
       * Setting editMode to `true` will make ALL steps accessible,
       * setting edit mode to `false` will make all steps with an index lower than
       * the latest "completed" step accessible.
       */
      setEditMode(editMode: boolean): void;
    }

    interface WzStep {
      canenter: (...args: any[]) => boolean;
      canexit: (...args: any[]) => boolean;
      description: string;
      selected: boolean;
      title: string;
      wzData: any;
      wzTitle: string;
    }
  }
}
