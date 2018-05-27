/// 
export class OrgUsersCtrl {
    private $scope;
    private $http;
    private backendSrv;
    user: any;
    users: any;
    pendingInvites: any;
    editor: any;
    /** @ngInject */
    constructor($scope: any, $http: any, backendSrv: any);
    get(): void;
    updateOrgUser(user: any): void;
    removeUser(user: any): void;
    removeUserConfirmed(user: any): void;
    revokeInvite(invite: any, evt: any): void;
    copyInviteToClipboard(evt: any): void;
    openInviteModal(): void;
}
