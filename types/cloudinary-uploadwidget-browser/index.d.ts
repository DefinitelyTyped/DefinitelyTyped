// Type definitions for non-npm package cloudinary-uploadwidget-browser 2.3
// Project: https://cloudinary.com/documentation/upload_widget_reference
// Definitions by: Jeremy Liberman <https://github.com/mrleebo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

type NotSupportedForUpdates = 'secure' | 'uploadSignature' | 'getTags' | 'preBatch' | 'inlineContainer' | 'fieldName';

type CloudinaryUploadWidgetOptions = RequiredParameters &
    WidgetParameters &
    CroppingParameters &
    SourcesParameters &
    UploadParameters &
    ClientParameters &
    PageParameters &
    CustomizationParameters &
    AdvancedParameters;

interface RequiredParameters {
    cloudName: string;
    uploadPreset?: string;
}

interface WidgetParameters {
    sources?: Source[];
    secure?: boolean;
    encryption?: { key: string; iv: string };
    defaultSource?: Source;
    multiple?: boolean;
    maxFiles?: number;
}

interface CroppingParameters {
    cropping?: boolean;
    showSkipCropButton?: boolean;
    croppingAspectRatio?: number | null;
    croppingDefaultSelectionRatio?: number;
    croppingShowDimensions?: boolean;
    croppingCoordinatesMode?: 'custom' | 'face';
    croppingShowBackButton?: boolean;
}

interface SourcesParameters {
    dropboxAppKey?: string;
    facebookAppId?: string;
    googleApiKey?: string;
    searchBySites?: string[];
    searchByRights?: boolean;
    instagramClientId?: string;
    googleDriveClientId?: string;
}

interface UploadParameters {
    publicId?: string | null;
    folder?: string | null;
    tags?: string[] | null;
    resourceType?: 'auto' | 'image' | 'video' | 'raw';
    context?: Record<string, any>;
    uploadSignature?: string | ((callback: (result: string) => void, params: CloudinaryUploadWidgetOptions) => void);
    uploadSignatureTimestamp?: number;
}

interface ClientParameters {
    clientAllowedFormats?: string[] | null;
    maxFileSize?: number;
    maxImageFileSize?: number;
    maxVideoFileSize?: number;
    maxRawFileSize?: number;
    maxImageWidth?: number | null;
    maxImageHeight?: number | null;
    validateMaxWidthHeight?: boolean;
    minImageWidth?: number | null;
    minImageHeight?: number | null;
    croppingValidateDimensions?: boolean;
    maxChunkSize?: number;
}

interface PageParameters {
    form?: string;
    fieldName?: string;
    thumbnails?: string | null;
    thumbnailTransformation?: string | ThumbnailTransformation[];
}

interface CustomizationParameters {
    buttonClass?: string;
    buttonCaption?: string;
    theme?: 'default' | 'white' | 'minimal' | 'purple';
    styles?: CustomizedStyles;
    text?: CustomizedText;
}

interface AdvancedParameters {
    showPoweredBy?: boolean;
    autoMinimize?: boolean;
    getTags?: (cb: (tags: ReadonlyArray<string>) => void, prefix: string) => void;
    getUploadPresets?: (cb: (presets: ReadonlyArray<string>) => void) => void;
    preBatch?: (cb: (options?: { cancel: boolean }) => void, data: { [key: string]: any }) => void;
    prepareUploadParams?: (cb: (results: any) => void, params: any) => void;
    language?: string;
    showAdvancedOptions?: boolean;
    showCompletedButton?: boolean;
    showUploadMoreButton?: boolean;
    singleUploadAutoClose?: boolean;
    queueViewPosition?: string;
    showInsecurePreview?: boolean;
    inlineContainer?: string | HTMLElement | null;
}

type ThumbnailTransformation = { [key: string]: any } & {
    width?: number;
    height?: number;
    crop?: string;
    effect?: string;
};

interface CustomizedStyles {
    [key: string]: any;
}

interface CustomizedText {
    [key: string]: any;
}

type Source =
    | 'local'
    | 'url'
    | 'camera'
    | 'dropbox'
    | 'image_search'
    | 'facebook'
    | 'instagram'
    | 'shutterstock'
    | 'google_drive';

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
    event: 'abort';
    info: {
        ids: string[];
        all: boolean;
    };
}

interface BatchCancelledEvent {
    event: 'batch-cancelled';
    info: { reason: 'MAX_EXCEEDED' | 'INVALID_PUBLIC_ID' };
}

interface CloseEvent {
    event: 'close';
}

interface DisplayChangedEvent {
    event: 'display-changed';
    info: 'shown' | 'hidden' | 'minimized' | 'expanded';
}

interface PublicIdEvent {
    event: 'publicid';
    info: { id: string | null };
}

interface QueuesEndEvent {
    event: 'queues-end';
    info: any;
}

interface QueuesStartEvent {
    event: 'queues-start';
}

interface RetryEvent {
    event: 'retry';
    info: {
        ids: string[];
        all: boolean;
    };
}

interface ShowCompletedEvent {
    event: 'show-completed';
    info: {
        items: any[];
    };
}

interface SourceChangedEvent {
    event: 'source-changed';
    info: { source: string };
}

interface SuccessEvent {
    event: 'success';
    info: any;
}

interface TagsEvent {
    event: 'tags';
    info: {
        tags: string[];
    };
}

interface UploadAddedEvent {
    event: 'upload-added';
    info: {
        file: any;
        publicId: string | null;
    };
}
