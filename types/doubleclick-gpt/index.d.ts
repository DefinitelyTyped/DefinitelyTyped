// Type definitions for non-npm package Google Publisher Tag 2019041801.0
// Project: https://developers.google.com/doubleclick-gpt/reference
// Definitions by: John Wright <https://github.com/johngeorgewright>
//                 Steven Joyce <https://github.com/steven-joyce>
//                 Joe Flateau <https://github.com/joeflateau>
//                 Vanessa Garcia <https://github.com/vanessa-lyn>
//                 Krishna Glick <https://github.com/krishnaglick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace googletag {
    type SingleSizeArray = number[];

    type NamedSize = string | string[];

    type SingleSize = SingleSizeArray | NamedSize;

    type MultiSize = SingleSize[];

    type GeneralSize = SingleSize | MultiSize;

    type SizeMapping = GeneralSize[];

    type SizeMappingArray = SizeMapping[];

    interface CommandArray {
        push(f: () => void): number;
    }

    interface Service {
        addEventListener(
          eventType: "slotRenderEnded",
            listener: (event: events.SlotRenderEndedEvent) => void
        ): Service;
        addEventListener(
            eventType: "slotRequested",
              listener: (event: events.SlotRequestedEvent) => void
        ): Service;
        addEventListener(
            eventType: "slotResponseReceived",
              listener: (event: events.SlotResponseReceived) => void
        ): Service;
        addEventListener(
          eventType: "slotVisibilityChanged",
            listener: (event: events.SlotVisibilityChangedEvent) => void
        ): Service;
        addEventListener(
          eventType: string,
            listener: (event: events.Event) => void
        ): Service;
        getSlots(): Slot[];
    }

    interface CompanionAdsService extends Service {
        enableSyncLoading(): void;
        setRefreshUnfilledSlots(value: boolean): void;
    }

    interface ContentService extends Service {
        setContent(slot: Slot, content: string): void;
    }

    interface LazyLoadOptionsConfig {
        fetchMarginPercent?: number;
        renderMarginPercent?: number;
        mobileScaling?: number;
    }

    interface ResponseInformation {
        advertiserId: string;
        campaignId: string;
        creativeId?: number;
        creativeTemplateId?: number;
        lineItemId?: number;
    }

    interface SafeFrameConfig {
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
        display(divOrSlot?: string | Element | Slot): void;
        enableServices(): void;
        getVersion(): string;
        openConsole(opt_div?: string): void;
        pubads(): PubAdsService;
        pubadsReady: boolean;
        setAdIframeTitle(title: string): void;
        sizeMapping(): SizeMappingBuilder;
    }

    interface Slot {
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

    interface PassbackSlot {
        display(): void;
        get(key: string): string;
        set(key: string, value: string): PassbackSlot;
        setClickUrl(url: string): PassbackSlot;
        setForceSafeFrame(forceSafeFrame: boolean): PassbackSlot;
        setTagForChildDirectedTreatment(value: number): PassbackSlot;
        setTagForUnderAgeOfConsent(value: number): PassbackSlot;
        setTargeting(key: string, value: string | string[]): PassbackSlot;
        updateTargetingFromMap(map: object): PassbackSlot;
    }

    interface PubAdsService extends Service {
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
        setPrivacySettings(settings: { restrictDataProcessing: boolean }): Slot;
    }

    interface SizeMappingBuilder {
        addSize(viewportSize: SingleSizeArray, slotSize: GeneralSize): SizeMappingBuilder;
        build(): SizeMappingArray;
    }

    namespace events {
        interface Event {
            serviceName: string;
            slot: Slot;
        }

        // tslint:disable-next-line:no-empty-interface
        interface ImpressionViewableEvent extends Event {}

        // tslint:disable-next-line:no-empty-interface
        interface SlotOnloadEvent extends Event {}

        interface SlotRenderEndedEvent extends Event {
            advertiserId?: number;
            campaignId?: number;
            creativeId?: number;
            isEmpty: boolean;
            lineItemId?: number;
            size: number[] | string;
            sourceAgnosticCreativeId?: number;
            sourceAgnosticLineItemId?: number;
        }

        // tslint:disable-next-line:no-empty-interface
        interface SlotRequestedEvent extends Event {}

        // tslint:disable-next-line:no-empty-interface
        interface SlotResponseReceived extends Event {}

        interface SlotVisibilityChangedEvent extends Event {
            inViewPercentage: number;
        }
    }
}

declare let googletag: googletag.Googletag;
