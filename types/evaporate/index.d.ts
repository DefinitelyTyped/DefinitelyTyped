// Type definitions for EvaporateJS 2.1
// Project: https://github.com/TTLabs/EvaporateJS
// Definitions by: Andrew Kuklewicz <https://github.com/kookster>
//                 Chris Rhoden <https://github.com/chrisrhoden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = Evaporate;

declare class Evaporate {
    constructor(config: Evaporate.CreateConfig);
    supported: boolean;
    add(config: Evaporate.AddConfig, options?: Evaporate.AddOverrideOptions): Promise<string>;
    pause(file_key?: string, options?: object): Promise<undefined[]>;
    resume(file_key?: string): Promise<undefined[]>;
    cancel(file_key?: string): Promise<undefined[]>;
}

declare namespace Evaporate {
    function create(config: CreateConfig): Promise<Evaporate>;

    interface CreateConfig {
        readableStreams?: boolean;
        readableStreamPartMethod?: null | ((file: File, start: number, end: number) => ReadableStream);
        bucket: string;
        logging?: boolean;
        maxConcurrentParts?: number;
        partSize?: number;
        retryBackoffPower?: number;
        maxRetryBackoffSecs?: number;
        progressIntervalMS?: number;
        cloudfront?: boolean;
        s3Acceleration?: boolean;
        mockLocalStorage?: boolean;
        encodeFilename?: boolean;
        computeContentMd5?: boolean;
        allowS3ExistenceOptimization?: boolean;
        onlyRetryForSameFileName?: boolean;
        timeUrl?: string;
        cryptoMd5Method?: null | ((data: ArrayBuffer) => string);
        cryptoHexEncodedHash256?: null | ((data: string | ArrayBuffer | null) => string);
        aws_url?: string;
        aws_key?: string;
        awsRegion?: string;
        awsSignatureVersion?: '2' | '4';
        signerUrl?: string;
        sendCanonicalRequestToSignerUrl?: boolean;
        s3FileCacheHoursAgo?: null | number;
        signParams?: object;
        signHeaders?: object;
        customAuthMethod?: null | ((
            signParams: object,
            signHeaders: object,
            stringToSign: string,
            signatureDateTime: string,
            canonicalRequest: string
        ) => Promise<string>);
        maxFileSize?: number;
        signResponseHandler?: null | ((response: any, stringToSign: string, signatureDateTime: string) => Promise<string>);
        xhrWithCredentials?: boolean;
        localTimeOffset?: number;
        evaporateChanged?: (evaporate: Evaporate, evaporatingCount: number) => void;
        abortCompletionThrottlingMs?: number;
    }

    interface TransferStats {
        speed: number;
        readableSpeed: string;
        loaded: number;
        totalUploaded: number;
        remainingSize: number;
        secondsLeft: number;
        fileSize: number;
    }

    interface AddConfig {
        name: string;
        file: File;
        xAmzHeadersAtInitiate?: { [key: string]: string };
        notSignedHeadersAtInitiate?: { [key: string]: string };
        xAmzHeadersAtUpload?: { [key: string]: string };
        xAmzHeadersAtComplete?: { [key: string]: string };
        xAmzHeadersCommon?: { [key: string]: string };
        started?: (file_key: string) => void;
        uploadInitiated?: (s3UploadId?: string) => void;
        paused?: (file_key: string) => void;
        resumed?: (file_key: string) => void;
        pausing?: (file_key: string) => void;
        cancelled?: () => void;
        complete?: (xhr: XMLHttpRequest, awsObjectKey: string, stats: TransferStats) => void;
        nameChanged?: (awsObjectKey: string) => void;
        info?: (msg: string) => void;
        warn?: (msg: string) => void;
        error?: (msg: string) => void;
        progress?: (p: number, stats: TransferStats) => void;
        contentType?: string;
        beforeSigner?: (xhr: XMLHttpRequest, url: string) => void;
    }

    type ImmutableOptionKeys =
        | 'maxConcurrentParts' | 'logging' | 'cloudfront' | 'encodeFilename'
        | 'computeContentMd5' | 'allowS3ExistenceOptimization' | 'onlyRetryForSameFileName'
        | 'timeUrl' | 'cryptoMd5Method' | 'cryptoHexEncodedHash256' | 'awsRegion' | 'awsSignatureVersion'
        | 'evaporateChanged';
    type AddOverrideOptionKeys = Exclude<keyof CreateConfig, ImmutableOptionKeys>;
    interface AddOverrideOptions extends Pick<CreateConfig, AddOverrideOptionKeys> {}

    interface PauseConfig {
        force?: boolean;
    }
}
