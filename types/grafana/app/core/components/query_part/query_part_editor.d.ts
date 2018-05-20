/** @ngInject */
export declare function queryPartEditorDirective($compile: any, templateSrv: any): {
  restrict: string;
  template: string;
  scope: {
    part: string;
    handleEvent: string;
  };
  link: ($scope: any, elem: any) => void;
};
