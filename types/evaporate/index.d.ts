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
        readableStreams?: boolean | undefined;
        readableStreamPartMethod?: null | ((file: File, start: number, end: number) => ReadableStream) | undefined;
        bucket: string;
        logging?: boolean | undefined;
        maxConcurrentParts?: number | undefined;
        partSize?: number | undefined;
        retryBackoffPower?: number | undefined;
        maxRetryBackoffSecs?: number | undefined;
        progressIntervalMS?: number | undefined;
        cloudfront?: boolean | undefined;
        s3Acceleration?: boolean | undefined;
        mockLocalStorage?: boolean | undefined;
        encodeFilename?: boolean | undefined;
        computeContentMd5?: boolean | undefined;
        allowS3ExistenceOptimization?: boolean | undefined;
        onlyRetryForSameFileName?: boolean | undefined;
        timeUrl?: string | undefined;
        cryptoMd5Method?: null | ((data: ArrayBuffer) => string) | undefined;
        cryptoHexEncodedHash256?: null | ((data: string | ArrayBuffer | null) => string) | undefined;
        aws_url?: string | undefined;
        aws_key?: string | undefined;
        awsRegion?: string | undefined;
        awsSignatureVersion?: "2" | "4" | undefined;
        signerUrl?: string | undefined;
        sendCanonicalRequestToSignerUrl?: boolean | undefined;
        s3FileCacheHoursAgo?: null | number | undefined;
        signParams?: object | undefined;
        signHeaders?: object | undefined;
        customAuthMethod?:
            | null
            | ((
                signParams: object,
                signHeaders: object,
                stringToSign: string,
                signatureDateTime: string,
                canonicalRequest: string,
            ) => Promise<string>)
            | undefined;
        maxFileSize?: number | undefined;
        signResponseHandler?:
            | null
            | ((response: any, stringToSign: string, signatureDateTime: string) => Promise<string>)
            | undefined;
        xhrWithCredentials?: boolean | undefined;
        localTimeOffset?: number | undefined;
        evaporateChanged?: ((evaporate: Evaporate, evaporatingCount: number) => void) | undefined;
        abortCompletionThrottlingMs?: number | undefined;
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
        xAmzHeadersAtInitiate?: { [key: string]: string } | undefined;
        notSignedHeadersAtInitiate?: { [key: string]: string } | undefined;
        xAmzHeadersAtUpload?: { [key: string]: string } | undefined;
        xAmzHeadersAtComplete?: { [key: string]: string } | undefined;
        xAmzHeadersCommon?: { [key: string]: string } | undefined;
        started?: ((file_key: string) => void) | undefined;
        uploadInitiated?: ((s3UploadId?: string) => void) | undefined;
        paused?: ((file_key: string) => void) | undefined;
        resumed?: ((file_key: string) => void) | undefined;
        pausing?: ((file_key: string) => void) | undefined;
        cancelled?: (() => void) | undefined;
        complete?: ((xhr: XMLHttpRequest, awsObjectKey: string, stats: TransferStats) => void) | undefined;
        nameChanged?: ((awsObjectKey: string) => void) | undefined;
        info?: ((msg: string) => void) | undefined;
        warn?: ((msg: string) => void) | undefined;
        error?: ((msg: string) => void) | undefined;
        progress?: ((p: number, stats: TransferStats) => void) | undefined;
        contentType?: string | undefined;
        beforeSigner?: ((xhr: XMLHttpRequest, url: string) => void) | undefined;
    }

    type ImmutableOptionKeys =
        | "maxConcurrentParts"
        | "logging"
        | "cloudfront"
        | "encodeFilename"
        | "computeContentMd5"
        | "allowS3ExistenceOptimization"
        | "onlyRetryForSameFileName"
        | "timeUrl"
        | "cryptoMd5Method"
        | "cryptoHexEncodedHash256"
        | "awsRegion"
        | "awsSignatureVersion"
        | "evaporateChanged";
    type AddOverrideOptionKeys = Exclude<keyof CreateConfig, ImmutableOptionKeys>;
    interface AddOverrideOptions extends Pick<CreateConfig, AddOverrideOptionKeys> {}

    interface PauseConfig {
        force?: boolean | undefined;
    }
}
