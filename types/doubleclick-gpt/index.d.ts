// Type definitions for Google Publisher Tag v238
// Project: https://developers.google.com/doubleclick-gpt/reference
// Definitions by: John Wright <https://github.com/johngeorgewright>
//                 Steven Joyce <https://github.com/steven-joyce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace googletag {
    export type SingleSizeArray = number[];

    export type NamedSize = string | string[];

    export type SingleSize = SingleSizeArray | NamedSize;

    export type MultiSize = SingleSize[];

    export type GeneralSize = SingleSize | MultiSize;

    export type SizeMapping = GeneralSize[];

    export type SizeMappingArray = SizeMapping[];

    export interface CommandArray {
        push(f: Function): number;
    }

    export interface Service {
        addEventListener(
          eventType: string,
            listener: (event: events.ImpressionViewableEvent | events.SlotOnloadEvent | events.SlotRenderEndedEvent | events.slotVisibilityChangedEvent) => void
        ): void;
        getSlots(): Slot[];
    }

    export interface CompanionAdsService extends Service {
        enableSyncLoading(): void;
        setRefreshUnfilledSlots(value: boolean): void;
    }

    export interface ContentService extends Service {
        setContent(slot: Slot, content: String): void;
    }

    export interface LazyLoadOptionsConfig {
        fetchMarginPercent?: number,
        renderMarginPercent?: number,
        mobileScaling?: number
    }

    export interface ResponseInformation {
        advertiserId: string;
        campaignId: string;
        creativeId?: number;
        lineItemId?: number;
    }

    export interface SafeFrameConfig {
        allowOverlayExpansion?: boolean;
        allowPushExpansion?: boolean;
        sandbox?: boolean;
    }

    interface Googletag {
        apiReady: boolean;
        cmd: CommandArray;
        companionAds(): CompanionAdsService;
        content(): ContentService;
        defineOutOfPageSlot(adUnitPath: string, opt_div?: string): Slot;
        defineSlot(adUnitPath: string, size: GeneralSize, opt_div?: string): Slot;
        destroySlots(opt_slots?: Slot[]): boolean;
        disablePublisherConsole(): void;
        display(div?: string | Element): void;
        enableServices(): void;
        getVersion(): string;
        openConsole(opt_div?: string): void;
        pubads(): PubAdsService;
        pubadsReady: boolean;
        setAdIframeTitle(title: string): void;
        sizeMapping(): SizeMappingBuilder;
    }

    export interface Slot {
        addService(service: Service): Slot;
        clearCategoryExclusions(): Slot;
        clearTargeting(opt_key?: string): Slot;
        defineSizeMapping(sizeMapping: SizeMappingArray): Slot;
        get(key: string): string | null;
        getAdUnitPath(): string;
        getAttributeKeys(): string[];
        getCategoryExclusions(): string[];
        getResponseInformation(): ResponseInformation;
        getSlotElementId(): string;
        getTargeting(key: string): string[];
        getTargetingKeys(): string[];
        set(key: string, value: string): Slot;
        setCategoryExclusion(categoryExclusion: string): Slot;
        setClickUrl(value: string): Slot;
        setCollapseEmptyDiv(collapse: boolean, opt_collapseBeforeAdFetch?: boolean): Slot;
        setForceSafeFrame(forceSafeFrame: boolean): Slot;
        setSafeFrameConfig(config: SafeFrameConfig): Slot;
        setTargeting(key: string, value: string | string[]): Slot;
    }

    export interface PassbackSlot {
        display(): void;
        get(key: string): string;
        set(key: string, value: string): PassbackSlot;
        setClickUrl(url: string): PassbackSlot;
        setForceSafeFrame(forceSafeFrame: boolean): PassbackSlot;
        setTagForChildDirectedTreatment(value: number): PassbackSlot;
        setTagForUnderAgeOfConsent(value: number): PassbackSlot;
        setTargeting(key: string, value: string | string[]): PassbackSlot;
        updateTargetingFromMap(map: Object): PassbackSlot;
    }

    export interface PubAdsService extends Service {
        clear(opt_slots?: Slot[]): boolean;
        clearCategoryExclusions(): PubAdsService;
        clearTagForChildDirectedTreatment(): PubAdsService;
        clearTargeting(opt_key?: string): PubAdsService;
        collapseEmptyDivs(opt_collapseBeforeAdFetch?: boolean): boolean;
        defineOutOfPagePassback(adUnitPath: string): PassbackSlot;
        definePassback(adUnitPath: string, size: GeneralSize): PassbackSlot;
        disableInitialLoad(): void;
        display(adUnitPath: string, size: GeneralSize, opt_div?: string | Element, opt_clickUrl?: string): Slot;
        enableAsyncRendering(): boolean;
        enableLazyLoad(opt_config?: LazyLoadOptionsConfig): void;
        enableSingleRequest(): boolean;
        enableSyncRendering(): boolean;
        enableVideoAds(): void;
        get(key: string): string | null;
        getAttributeKeys(): string[];
        getTargeting(key: string): string[];
        getTargetingKeys(): string[];
        refresh(opt_slots?: Slot[], opt_options?: {changeCorrelator: boolean}): void;
        set(key: string, value: string): PubAdsService;
        setCategoryExclusion(categoryExclusion: string): PubAdsService;
        setCentering(centerAds: boolean): void;
        setCookieOptions(cookieOptions: number): PubAdsService;
        setForceSafeFrame(forceSafeFrame: boolean): PubAdsService;
        setLocation(latitudeOrAddress: string | number, opt_longitude?: number, opt_radius?: number): PubAdsService;
        setPublisherProvidedId(ppid: string): PubAdsService;
        setRequestNonPersonalizedAds(nonPersonalizedAds: 0 | 1): PubAdsService;
        setSafeFrameConfig(config: SafeFrameConfig): PubAdsService;
        setTagForChildDirectedTreatment(value: number): PubAdsService;
        setTagForUnderAgeOfConsent(opt_value?: number): PubAdsService;
        setTargeting(key: string, value: string | string[]): PubAdsService;
        setVideoContent(videoContentId: string, videoCmsId: string): void;
        updateCorrelator(): PubAdsService;
    }

    export interface SizeMappingBuilder {
        addSize(viewportSize: SingleSizeArray, slotSize: GeneralSize): SizeMappingBuilder;
        build(): SizeMappingArray;
    }

    export namespace events {
        export interface ImpressionViewableEvent {
            serviceName: string;
            slot: Slot;
        }

        export interface SlotOnloadEvent {
            serviceName: string;
            slot: Slot;
        }

        export interface SlotRenderEndedEvent {
            advertiserId?: number;
            creativeId?: number;
            isEmpty: boolean;
            lineItemId?: number;
            serviceName: string;
            size: number[] | string;
            slot: Slot;
            sourceAgnosticCreativeId?: number;
            sourceAgnosticLineItemId?: number;
        }

        export interface slotVisibilityChangedEvent {
            inViewPercentage: number;
            serviceName: string;
            slot: Slot;
        }
    }
}

declare let googletag: googletag.Googletag;
