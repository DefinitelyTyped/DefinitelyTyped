/// 
export class UtilSrv {
  private $rootScope;
  private $modal;
  modalScope: any;
  /** @ngInject */
  constructor($rootScope: any, $modal: any);
  init(): void;
  hideModal(): void;
  showModal(options: any): void;
}
