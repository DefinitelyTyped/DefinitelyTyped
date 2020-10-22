// Type definitions for overload-protection 1.2
// Project: https://github.com/davidmarkclements/overload-protection
// Definitions by: Daniel Hirth <https://github.com/dornfeder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace protect {
    type KoaFrameworkSelection = 'koa';
    type HttpFrameworkSelection = 'express' | 'http' | 'restify';

    interface ProtectionConfig {
        production?: boolean;
        clientRetrySecs?: number;
        sampleInterval?: number;
        maxEventLoopDelay?: number;
        maxHeapUsedBytes?: number;
        maxRssBytes?: number;
        errorPropagationMode?: boolean;
        logging?: boolean | string | ((msg: string) => void);
        logStatsOnReq?: false;
    }

    interface ProtectionInstance {
        overload: boolean;
        eventLoopOverload: boolean;
        heapUsedOverload: boolean;
        rssOverload: boolean;
        eventLoopDelay: number;
        maxEventLoopDelay: number;
        maxHeapUsedBytes: number;
        maxRssBytes: number;
    }

    interface KoaProtectionInstance extends ProtectionInstance {
        (ctx: object, next: () => any): any;
    }

    interface HttpProtectionInstance extends ProtectionInstance {
        (req: object, res: object, next: () => any): any;
    }
}

declare function protect(
    framework: protect.KoaFrameworkSelection,
    config?: protect.ProtectionConfig,
): protect.KoaProtectionInstance;
declare function protect(
    framework: protect.HttpFrameworkSelection,
    config?: protect.ProtectionConfig,
): protect.HttpProtectionInstance;

export = protect;
