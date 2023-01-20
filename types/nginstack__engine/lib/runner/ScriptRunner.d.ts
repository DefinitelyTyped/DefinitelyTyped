export = ScriptRunner;
declare function ScriptRunner(
    fileId: string | number,
    options?: {
        runtime?: string;
        realm?: string;
        sessionId?: string;
        waitTimeout?: number;
    }
): void;
declare class ScriptRunner {
    constructor(
        fileId: string | number,
        options?: {
            runtime?: string;
            realm?: string;
            sessionId?: string;
            waitTimeout?: number;
        }
    );
    sessionId: string;
    trackingId: string;
    login(userId: string, password: string): boolean;
    loginBySession(session: Session): void;
    loginByAuthToken(id: any): void;
    run(): any;
    applyFunction(functionName: string, args?: any[]): DataSet | number | Date | string | boolean;
    callFunction(functionName: string, params?: any[]): DataSet | number | Date | string | boolean;
    evaluate(expr: any): DataSet | number | Date | string | boolean;
    publishGlobalProperty(name: string, value: DataSet | number | Date | string | boolean): void;
    readGlobalProperty(name: string): DataSet | number | Date | string | boolean;
    clear(): void;
    dispose(): void;
}
declare namespace ScriptRunner {
    export { DataSet, Session };
}
type Session = import('../session/Session');
type DataSet = import('../dataset/DataSet');
