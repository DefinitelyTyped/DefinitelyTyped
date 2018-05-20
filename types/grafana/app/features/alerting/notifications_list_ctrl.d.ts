/// 
export declare class AlertNotificationsListCtrl {
  private backendSrv;
  private $scope;
  notifications: any;
  /** @ngInject */
  constructor(backendSrv: any, $scope: any);
  loadNotifications(): void;
  deleteNotification(id: any): void;
}
