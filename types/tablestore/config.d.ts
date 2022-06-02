declare namespace TableStore {
    class Config {
        constructor(options: ConfigOptions);
    }
    type ConfigOptions = Partial<{
        accessKeyId: string;
        secretAccessKey: string;
        accessKeySecret: string;
        stsToken: string;
        securityToken: string;
        logger: unknown;
        endpoint: string;
        httpOptions: {
            timeout: number;
            maxSockets: number;
        };
        maxRetries: number;
        instancename: string;
        computeChecksums: boolean;
    }>;
}
