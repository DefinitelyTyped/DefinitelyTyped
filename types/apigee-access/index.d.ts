declare namespace ApigeeAccess {
    function getVariable(request: any, name: string): string | number | boolean;
    function setVariable(request: any, name: string, value: string | number | boolean): void;
    function setIntVariable(request: any, name: string, value: string | number): void;
    function deleteVariable(request: any, name: string): void;
    function getCache(name: string, options?: CacheOptions): any;
    function getVault(name: string, scope?: "organization" | "environment"): SecureVault;
    function getQuota(options?: any): QuotaService;
    function getMode(): "apigee" | "standalone";

    interface CacheOptions {
        resource?: string | undefined;
        scope?: "global" | "application" | "exclusive" | undefined;
        defaultTtl?: number | undefined;
        timeout?: number | undefined;
    }

    interface Cache {
        put(key: string, data: any, ttl?: number, callback?: (err: any) => void): void;
        get(key: string, callback: (err: any, data: any) => void): void;
        remove(key: string, callback?: (err: any) => void): void;
    }

    interface SecureVault {
        getKeys(callback: (err: any, data: any) => void): void;
        get(key: string, callback: (err: any, data: any) => void): void;
    }

    interface QuotaService {
        apply(
            options?: QuotaServiceApplyOptions,
            callback?: (err: any, data: QuotaServiceApplyCallbackData) => void,
        ): void;
    }

    interface QuotaServiceApplyOptions {
        identifier: string;
        timeUnit: "minute" | "hour" | "day" | "week" | "month";
        allow: number;
        interval?: number | undefined;
        weight?: number | undefined;
    }

    interface QuotaServiceApplyCallbackData {
        used: number;
        allowed: number;
        isAllowed: boolean;
        expiryTime: number;
        timestamp: number;
    }
}

export default ApigeeAccess;
