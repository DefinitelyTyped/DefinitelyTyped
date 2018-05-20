export class SwitchCtrl {
  private $timeout;
  onChange: any;
  checked: any;
  show: any;
  id: any;
  /** @ngInject */
  constructor($scope: any, $timeout: any);
  internalOnChange(): any;
}
export function switchDirective(): {
  restrict: string;
  controller: typeof SwitchCtrl;
  controllerAs: string;
  bindToController: boolean;
  scope: {
    checked: string;
    label: string;
    labelClass: string;
    tooltip: string;
    switchClass: string;
    onChange: string;
  };
  template: string;
};
