// Type definitions for Angular Wizard 0.4.2
// Project: https://github.com/mgonto/angular-wizard
// Definitions by: Marko Jurisic <https://github.com/mjurisic>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module angular.mgoAngularWizard {
  interface WizardHandler {
    wizard(name?:string): Wizard;
    addWizard(name:string, wizard:Wizard):void;
    removeWizard(name:string):void;
  }

  interface Wizard {
    next(nextHandler?:Function):void;
    previous():void;
    goTo(step:number):void;
    goTo(step:string):void;
    finish():void;
    currentStepNumber():number;
  }
}
