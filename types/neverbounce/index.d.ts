export = NeverBounce;

declare class NeverBounce {
    constructor(config: Config);

    getConfig(): Config;

    getRequestOpts(opts: ConfigOptions): ConfigOptions;

    setApiKey(key: string): void;

    setHost(host: string): void;

    errors: Errors;

    account: Account;

    jobs: Jobs;

    poe: Poe;

    single: Single;

    static defaultConfig: Config;

    static job: {
        inputType: {
            remote: string;
            supplied: string;
        };
        status: {
            complete: string;
            failed: string;
            parsing: string;
            queued: string;
            running: string;
            under_review: string;
            uploading: string;
            waiting: string;
            waiting_analyzed: string;
        };
    };

    static result: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        catchall: number;
        disposable: number;
        flags: {
            academic_host: string;
            accepts_all: string;
            bad_dns: string;
            bad_syntax: string;
            connect_fails: string;
            contains_alias: string;
            contains_subdomain: string;
            disposable_email: string;
            free_email_host: string;
            government_host: string;
            has_dns: string;
            has_dns_mx: string;
            international_host: string;
            military_host: string;
            profanity: string;
            role_account: string;
            smtp_connectable: string;
            spamtrap_network: string;
            spelling_mistake: string;
            squatter_host: string;
            temporary_dns_error: string;
        };
        invalid: number;
        unknown: number;
        valid: number;
    };
}

declare class Errors extends Error {
    constructor(type: string, message: string);

    static _lut: {
        general_failure: string;
        auth_failure: string;
        bad_referrer: string;
        throttle_triggered: string;
    };

    static AuthError: string;
    static BadReferrerError: string;
    static GeneralError: string;
    static ThrottleError: string;
}

declare class Account {
    info(): Promise<Response>;
}

declare class Jobs {
    search(query: any): Promise<Response>;

    create(
        input: any,
        inputLocation: any,
        fileName: any,
        runSample?: any,
        autoParse?: any,
        autoStart?: any,
    ): Promise<Response>;

    parse(jobId: number, autoStart?: any): Promise<Response>;

    start(jobId: number, runSample?: any): Promise<Response>;

    status(jobId: number): Promise<Response>;

    results(jobId: number, query: any): Promise<Response>;

    download(jobId: number): Promise<Response>;
}

declare class Poe {
    confirm(email: string, result: string, confirmationToken: string, transactionId: string): Promise<Response>;
}

declare class Single {
    check(email: string, addressInfo?: boolean, creditsInfo?: boolean, timeout?: any): Promise<Response>;
}

interface Config {
    apiKey?: any;
    opts?: ConfigOptions | undefined;
    timeout?: number | undefined;
}

interface ConfigOptions {
    acceptedType?: string | undefined;
    headers?: {
        "Content-Type"?: string | undefined;
        "User-Agent"?: string | undefined;
    } | undefined;
    host?: string | undefined;
    port?: number | undefined;
}

type Response = object;
