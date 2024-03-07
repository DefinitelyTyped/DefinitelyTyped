declare class CliRunner {
    static get CONFIG_FILE_JS(): string;
    static get CONFIG_FILE_CJS(): string;
    static createDefaultConfig(destFileName: string): boolean;

    constructor(argv?: any);

    initTestSettings(userSettings?: any, baseSettings?: any, argv?: any, testEnv?: string): this;
    setupGlobalHooks(): this;
    setCurrentTestEnv(): this;
    setLoggingOptions(): this;
    setupAsync(settings: any): Promise<this>;
    setup(settings: any): this;
    commonSetup(settings: any): this;
    isConfigDefault(configFile: string, localJsValue?: string): boolean;
    getLocalConfigFileName(): string;
    loadConfig(): any;
    validateConfig(): this;
    parseTestSettings(settings?: any): this;
    runGlobalHook(key: any): Promise<void>;
    validateTestEnvironments(): this;
    get testWorkersMode(): boolean;
    isTestWorkersEnabled(): boolean;
    parallelMode(modules?: any): boolean;
    setupConcurrency(): this;
    isConcurrencyEnabled(): boolean;
    executeTestRunner(modules: any): any;
    createTestRunner(): this;
    getTestsFiles(): string[];
    runTests(done?: any): Promise<any>;
}

export = CliRunner;
