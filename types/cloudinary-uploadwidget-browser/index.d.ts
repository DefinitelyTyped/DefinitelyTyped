declare var cloudinary: CloudinaryBase;

interface CloudinaryBase {
    setCloudName(name: string): void;

    createUploadWidget(
        options: CloudinaryUploadWidgetOptions,
        resultCallback?: (error: string | null, result: CloudinaryEvent) => void,
    ): CloudinaryUploadWidget;

    openUploadWidget(
        options: CloudinaryUploadWidgetOptions,
        resultCallback?: (error: string | null, result: CloudinaryEvent) => void,
    ): CloudinaryUploadWidget;

    applyUploadWidget(
        element: HTMLElement,
        options: CloudinaryUploadWidgetOptions,
        resultCallback?: (error: string | null, result: CloudinaryEvent) => void,
    ): CloudinaryUploadWidget;
}

interface CloudinaryUploadWidget {
    open(files?: string): void;
    close(options?: { quiet: boolean }): void;
    update(options: Partial<Omit<CloudinaryUploadWidgetOptions, NotSupportedForUpdates>>): void;
    hide(): void;
    show(): void;
    minimize(): void;
    destroy(options?: { removeThumbnails: boolean }): void;
    isShowing(): boolean;
    isMinimized(): boolean;
    isDestroyed(): boolean;
}

type NotSupportedForUpdates = "secure" | "uploadSignature" | "getTags" | "preBatch" | "inlineContainer" | "fieldName";

type CloudinaryUploadWidgetOptions =
    & RequiredParameters
    & WidgetParameters
    & CroppingParameters
    & SourcesParameters
    & UploadParameters
    & ClientParameters
    & PageParameters
    & CustomizationParameters
    & AdvancedParameters;

interface RequiredParameters {
    cloudName: string;
    uploadPreset?: string | undefined;
}

interface WidgetParameters {
    sources?: Source[] | undefined;
    secure?: boolean | undefined;
    encryption?: { key: string; iv: string } | undefined;
    defaultSource?: Source | undefined;
    multiple?: boolean | undefined;
    maxFiles?: number | undefined;
}

interface CroppingParameters {
    cropping?: boolean | undefined;
    showSkipCropButton?: boolean | undefined;
    croppingAspectRatio?: number | null | undefined;
    croppingDefaultSelectionRatio?: number | undefined;
    croppingShowDimensions?: boolean | undefined;
    croppingCoordinatesMode?: "custom" | "face" | undefined;
    croppingShowBackButton?: boolean | undefined;
}

interface SourcesParameters {
    dropboxAppKey?: string | undefined;
    facebookAppId?: string | undefined;
    googleApiKey?: string | undefined;
    searchBySites?: string[] | undefined;
    searchByRights?: boolean | undefined;
    instagramClientId?: string | undefined;
    googleDriveClientId?: string | undefined;
}

interface UploadParameters {
    publicId?: string | null | undefined;
    folder?: string | null | undefined;
    tags?: string[] | null | undefined;
    resourceType?: "auto" | "image" | "video" | "raw" | undefined;
    context?: Record<string, any> | undefined;
    uploadSignature?:
        | string
        | ((callback: (result: string) => void, params: CloudinaryUploadWidgetOptions) => void)
        | undefined;
    uploadSignatureTimestamp?: number | undefined;
}

interface ClientParameters {
    clientAllowedFormats?: string[] | null | undefined;
    maxFileSize?: number | undefined;
    maxImageFileSize?: number | undefined;
    maxVideoFileSize?: number | undefined;
    maxRawFileSize?: number | undefined;
    maxImageWidth?: number | null | undefined;
    maxImageHeight?: number | null | undefined;
    validateMaxWidthHeight?: boolean | undefined;
    minImageWidth?: number | null | undefined;
    minImageHeight?: number | null | undefined;
    croppingValidateDimensions?: boolean | undefined;
    maxChunkSize?: number | undefined;
}

interface PageParameters {
    form?: string | undefined;
    fieldName?: string | undefined;
    thumbnails?: string | null | undefined;
    thumbnailTransformation?: string | ThumbnailTransformation[] | undefined;
}

interface CustomizationParameters {
    buttonClass?: string | undefined;
    buttonCaption?: string | undefined;
    theme?: "default" | "white" | "minimal" | "purple" | undefined;
    styles?: CustomizedStyles | undefined;
    text?: CustomizedText | undefined;
}

interface AdvancedParameters {
    showPoweredBy?: boolean | undefined;
    autoMinimize?: boolean | undefined;
    getTags?: ((cb: (tags: ReadonlyArray<string>) => void, prefix: string) => void) | undefined;
    getUploadPresets?: ((cb: (presets: ReadonlyArray<string>) => void) => void) | undefined;
    preBatch?: ((cb: (options?: { cancel: boolean }) => void, data: { [key: string]: any }) => void) | undefined;
    prepareUploadParams?: ((cb: (results: any) => void, params: any) => void) | undefined;
    language?: string | undefined;
    showAdvancedOptions?: boolean | undefined;
    showCompletedButton?: boolean | undefined;
    showUploadMoreButton?: boolean | undefined;
    singleUploadAutoClose?: boolean | undefined;
    queueViewPosition?: string | undefined;
    showInsecurePreview?: boolean | undefined;
    inlineContainer?: string | HTMLElement | null | undefined;
}

type ThumbnailTransformation = { [key: string]: any } & {
    width?: number | undefined;
    height?: number | undefined;
    crop?: string | undefined;
    effect?: string | undefined;
};

interface CustomizedStyles {
    [key: string]: any;
}

interface CustomizedText {
    [key: string]: any;
}

type Source =
    | "local"
    | "url"
    | "camera"
    | "dropbox"
    | "image_search"
    | "facebook"
    | "instagram"
    | "shutterstock"
    | "google_drive";

type CloudinaryEvent =
    | AbortEvent
    | BatchCancelledEvent
    | CloseEvent
    | DisplayChangedEvent
    | PublicIdEvent
    | QueuesEndEvent
    | QueuesStartEvent
    | RetryEvent
    | ShowCompletedEvent
    | SourceChangedEvent
    | SuccessEvent
    | TagsEvent
    | UploadAddedEvent;

interface AbortEvent {
    event: "abort";
    info: {
        ids: string[];
        all: boolean;
    };
}

interface BatchCancelledEvent {
    event: "batch-cancelled";
    info: { reason: "MAX_EXCEEDED" | "INVALID_PUBLIC_ID" };
}

interface CloseEvent {
    event: "close";
}

interface DisplayChangedEvent {
    event: "display-changed";
    info: "shown" | "hidden" | "minimized" | "expanded";
}

interface PublicIdEvent {
    event: "publicid";
    info: { id: string | null };
}

interface QueuesEndEvent {
    event: "queues-end";
    info: any;
}

interface QueuesStartEvent {
    event: "queues-start";
}

interface RetryEvent {
    event: "retry";
    info: {
        ids: string[];
        all: boolean;
    };
}

interface ShowCompletedEvent {
    event: "show-completed";
    info: {
        items: any[];
    };
}

interface SourceChangedEvent {
    event: "source-changed";
    info: { source: string };
}

interface SuccessEvent {
    event: "success";
    info: any;
}

interface TagsEvent {
    event: "tags";
    info: {
        tags: string[];
    };
}

interface UploadAddedEvent {
    event: "upload-added";
    info: {
        file: any;
        publicId: string | null;
    };
}
