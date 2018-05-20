/// 
export function inputDateDirective(): {
  restrict: string;
  require: string;
  link: ($scope: any, $elem: any, attrs: any, ngModel: any) => void;
};
