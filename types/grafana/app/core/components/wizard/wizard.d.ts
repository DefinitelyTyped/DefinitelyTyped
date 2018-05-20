export class WizardSrv {
  constructor();
}
export interface WizardStep {
  name: string;
  type: string;
  process: any;
}
export class SelectOptionStep {
  type: string;
  name: string;
  fulfill: any;
  constructor();
  process(): Promise<{}>;
}
export class WizardFlow {
  name: string;
  steps: WizardStep[];
  constructor(name: any);
  addStep(step: any): void;
  next(index: any): any;
  start(): any;
}
