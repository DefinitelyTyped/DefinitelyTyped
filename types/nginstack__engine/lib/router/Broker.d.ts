export = Broker;
declare function Broker(): void;
declare class Broker {
    private controllerCache_;
    private realmConfigCache_;
    private vfsForCheckChange_;
    private logger_;
    private errorLoadingConfig_;
    private serverId_;
    runStartupScripts(): void;
    private userCanAccessRemotely_;
    private resolveType_;
    private resolveParameters_;
    private getControllerInstance_;
    private getRealmConfig_;
    private authorizationHandlers_;
    authorizeUser(
        request: Request,
        route: {
            scope: string;
            path: string;
        }
    ): void;
    private validateAcceptHeader_;
    private configureAllowOriginHeader_;
    private validateScope_;
    handleRequest(
        route: {
            path: string;
            controller: string;
            action: string;
            requiresAuth: boolean;
            allowedOrigins: string[];
            realm: string;
            debug: boolean;
        },
        pathParameters: any,
        opt_options?: {
            request?: Request;
            response?: Response;
        }
    ): void;
    clear(): void;
    clearIncludeCaches(): void;
    getModuleVersion_(path: any): any;
}
declare namespace Broker {
    export { getInstance, runStartupScripts, Request, Response };
}
type Request = import('../http/Request');
type Response = import('../http/Response');
declare function getInstance(): Broker;
declare function runStartupScripts(): void;
