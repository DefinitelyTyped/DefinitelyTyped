/// 
export class AlertNotificationEditCtrl {
    private $routeParams;
    private backendSrv;
    private $scope;
    private $location;
    model: any;
    theForm: any;
    testSeverity: string;
    /** @ngInject */
    constructor($routeParams: any, backendSrv: any, $scope: any, $location: any);
    loadNotification(id: any): void;
    isNew(): boolean;
    save(): void;
    typeChanged(): void;
    testNotification(): void;
}
