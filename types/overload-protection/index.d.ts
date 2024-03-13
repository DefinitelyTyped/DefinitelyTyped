declare namespace protect {
    type KoaFrameworkSelection = "koa";
    type HttpFrameworkSelection = "express" | "http" | "restify";

    interface ProtectionConfig {
        production?: boolean | undefined;
        clientRetrySecs?: number | undefined;
        sampleInterval?: number | undefined;
        maxEventLoopDelay?: number | undefined;
        maxHeapUsedBytes?: number | undefined;
        maxRssBytes?: number | undefined;
        errorPropagationMode?: boolean | undefined;
        logging?: boolean | string | ((msg: string) => void) | undefined;
        logStatsOnReq?: false | undefined;
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
