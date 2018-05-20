/// 
export class PrefsControlCtrl {
  private backendSrv;
  private $location;
  prefs: any;
  oldTheme: any;
  prefsForm: any;
  mode: string;
  timezones: any;
  themes: any;
  /** @ngInject **/
  constructor(backendSrv: any, $location: any);
  $onInit(): any;
  updatePrefs(): void;
}
export function prefsControlDirective(): {
  restrict: string;
  controller: typeof PrefsControlCtrl;
  bindToController: boolean;
  controllerAs: string;
  template: string;
  scope: {
    mode: string;
  };
};
