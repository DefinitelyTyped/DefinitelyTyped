/// 
export class User {
  isGrafanaAdmin: any;
  isSignedIn: any;
  orgRole: any;
  timezone: string;
  helpFlags1: number;
  constructor();
}
export class ContextSrv {
  pinned: any;
  version: any;
  user: User;
  isSignedIn: any;
  isGrafanaAdmin: any;
  isEditor: any;
  sidemenu: any;
  constructor();
  hasRole(role: any): boolean;
  setPinnedState(val: any): void;
  toggleSideMenu(): void;
}
declare var contextSrv: ContextSrv;
export { contextSrv };
