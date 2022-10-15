export = JavaServer;
declare function JavaServer(): void;
declare class JavaServer {
    publishService(serviceUrl: string, serviceJavaClass: any): void;
    unpublishService(serviceUrl: string): void;
    listServices(): any[];
    configFileName: string;
}
declare namespace JavaServer {
    export { getInstance, Classes };
}
declare function getInstance(): Classes;
type Classes = import('../database/Classes');
