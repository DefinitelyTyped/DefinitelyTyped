/// 
import './options';
import './add_panel';
export class DashRowCtrl {
  private $scope;
  private $rootScope;
  private $timeout;
  dashboard: any;
  row: any;
  dropView: number;
  /** @ngInject */
  constructor($scope: any, $rootScope: any, $timeout: any);
  onDrop(panelId: any, dropTarget: any): void;
  setHeight(height: any): void;
  moveRow(direction: any): void;
  toggleCollapse(): void;
  onMenuAddPanel(): void;
  onMenuRowOptions(): void;
  closeDropView(): void;
  onMenuDeleteRow(): void;
}
