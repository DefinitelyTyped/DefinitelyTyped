declare namespace Catchpoint {
    function username(username?: string): Promise<string | null>;
    function password(password?: string): Promise<string | null>;
    function startStep(stepName: string, opt_disableAutoMatchRequests?: Array<boolean>): Promise<void>;
    function storeGlobalVariable(value: string, name: string): Promise<void>;
    function setTracepoint(insightToken: string, insightValue: string): Promise<void>;
    function setIndicator(insightToken: string, insightValue: string): Promise<void>;
}
