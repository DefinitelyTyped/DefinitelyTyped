export declare class WizardSrv {
  /** @ngInject */
  constructor();
}
export interface WizardStep {
  name: string;
  type: string;
  process: any;
}
export declare class SelectOptionStep {
  type: string;
  name: string;
  fulfill: any;
  constructor();
  process(): Promise<{}>;
}
export declare class WizardFlow {
  name: string;
  steps: WizardStep[];
  constructor(name: any);
  addStep(step: any): void;
  next(index: any): any;
  start(): any;
}
