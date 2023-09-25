/// <reference path="definitions.d.ts" />

declare namespace Seatsio {
    interface SeatingChart {
        config: SeatingChartConfig;
        holdToken: string | null;
        selectedObjects: string[];

        // tslint:disable-next-line:no-misused-new
        new(config: SeatingChartConfig): SeatingChart;
        render(): SeatingChart;
        destroy(): void;
        rerender(): void;
        resetView(): void;
        startNewSession(successCallback?: () => void, failureCallback?: () => void): void;
        selectBestAvailable(config: BestAvailable): void;
        clearSelection(successCallback?: () => void, failureCallback?: () => void): void;
        selectObjects(
            objects: string[] | Array<{ id: string; ticketType?: string | undefined; amount?: number | undefined }>,
            successCallback?: () => void,
            failureCallback?: () => void,
        ): void;
        deselectObjects(
            objects: string[] | Array<{ id: string; ticketType?: string | undefined; amount?: number | undefined }>,
            successCallback?: () => void,
            failureCallback?: () => void,
        ): void;
        selectCategories(categoryIds: string[], successCallback?: () => void, failureCallback?: () => void): void;
        deselectCategories(categoryIds: string[], successCallback?: () => void, failureCallback?: () => void): void;
        changeConfig(config: ChangeableSeatingChartConfig): void;
        findObject(
            label: string,
            successCallback?: (object: BookableObject) => void,
            objectNotFoundCallback?: () => void,
        ): void;
        listCategories(callback: (object: Category[]) => void): void;
        zoomToSelectedObjects(): void;
        listSelectedObjects(selectedObjectsCallback: (selectedObject: BookableObject) => void): void;
    }

    interface ChangeableSeatingChartConfig {
        objectColor?: ((object: BookableObject, defaultColor: string, extraConfig: ExtraConfig) => string) | undefined;
        objectLabel?: ((object: BookableObject, defaultLabel: string, extraConfig: ExtraConfig) => string) | undefined;
        numberOfPlacesToSelect?: number | undefined;
        maxSelectedObjects?:
            | number
            | Array<{ quantity: number; ticketType?: string | undefined; category?: string | undefined }>
            | undefined;
        ticketListings?: TicketListing[] | undefined;
        extraConfig?: ExtraConfig | undefined;
        availableCategories?: string[] | undefined;
        unavailableCategories?: string[] | undefined;
        filteredCategories?: string[] | undefined;
        pricing?: PricingConfig[] | undefined;
    }

    interface TicketListing {
        section: string;
        quantity: number;
        price: number;
    }

    interface SeatingChartConfig extends ChangeableSeatingChartConfig {
        divId: string;
        workspaceKey: string;
        event?: string | undefined;
        events?: string[] | undefined;
        chart?: string | undefined;
        priceFormatter?: ((price: number) => string) | undefined;
        objectWithoutPricingSelectable?: boolean | undefined;
        objectWithoutCategorySelectable?: boolean | undefined;
        selectedObjects?:
            | Array<string | { label: string; amount?: number | undefined; ticketType?: string | undefined }>
            | undefined;
        objectTooltip?: {
            showActionHint?: boolean | undefined;
            showAvailability?: boolean | undefined;
            showCategory?: boolean | undefined;
            showLabel?: boolean | undefined;
            showPricing?: boolean | undefined;
            showUnavailableNotice?: boolean | undefined;
            stylizedLabel?: boolean | undefined;
            confirmSelectionOnMobile?: string | undefined;
        } | undefined;
        tooltipInfo?: ((object: BookableObject) => string) | undefined;
        language?: string | undefined;
        messages?: { [key: string]: string } | undefined;
        priceLevelsTooltipMessage?: string | undefined;
        selectedObjectsInputName?: string | undefined;
        sectionColor?: ((section: Section, defaultColor: string, extraConfig: ExtraConfig) => string) | undefined;
        objectIcon?: ((object: BookableObject, defaultIcon: string, extraConfig: ExtraConfig) => string) | undefined;
        isObjectVisible?: ((object: BookableObject, extraConfig: ExtraConfig) => string) | undefined;
        canGASelectionBeIncreased?:
            | ((
                gaArea: GeneralAdmissionArea,
                defaultValue: boolean,
                extraConfig: ExtraConfig,
                ticketType: string,
            ) => boolean)
            | undefined;
        selectBestAvailable?: BestAvailable | undefined;
        showRowLines?: boolean | undefined;
        alwaysShowSectionContents?: boolean | undefined;
        session?: "continue" | "start" | "manual" | "none" | undefined;
        holdToken?: string | undefined;
        holdTokenInputName?: string | undefined;
        holdOnSelectForGAs?: boolean | undefined;
        showLegend?: boolean | undefined;
        legend?: {
            hideNonSelectableCategories?: boolean | undefined;
            hidePricing?: boolean | undefined;
        } | undefined;
        multiSelectEnabled?: boolean | undefined;
        showMinimap?: boolean | undefined;
        showActiveSectionTooltipOnMobile?: boolean | undefined;
        showViewFromYourSeatOnMobile?: boolean | undefined;
        showViewFromYourSeatOnDesktop?: boolean | undefined;
        selectionValidators?: SelectionValidator[] | undefined;
        categories?: CategoryConfig[] | undefined;
        categoryFilter?: {
            enabled: boolean;
            multiSelect: boolean;
            zoomOnSelect: boolean;
        } | undefined;
        objectCategories?: { [objectLabel: string]: string } | undefined;
        objectCategory?:
            | ((
                object: BookableObject,
                categories: CategoryList,
                defaultCategory: Category,
                extraConfig: ExtraConfig,
            ) => Category)
            | undefined;
        mode?: "normal" | "static" | "print" | undefined;
        loading?: string | undefined;
        fitTo?: "widthAndHeight" | "width" | undefined;
        showZoomOutButtonOnMobile?: boolean | undefined;
        showFullScreenButton?: boolean | undefined;
        unifiedObjectPropertiesInCallbacks?: boolean | undefined;
        channels?: string[] | undefined;
        colorScheme?: ColorScheme | undefined;
        colors?: Colors | undefined;
        stylePreset?: StylePreset | undefined;
        style?: Style | undefined;

        onChartRendered?: ((chart: SeatingChart) => void) | undefined;
        onChartRenderingFailed?: ((chart: SeatingChart) => void) | undefined;
        onObjectClicked?: ((object: BookableObject) => void) | undefined;
        onObjectSelected?:
            | ((
                object: BookableObject,
                selectedTicketType?: { price: number; ticketType?: string | undefined },
            ) => void)
            | undefined;
        onObjectDeselected?:
            | ((
                object: BookableObject,
                deselectedTicketType?: { price: number; ticketType?: string | undefined },
            ) => void)
            | undefined;
        onObjectMouseOver?: ((object: BookableObject) => void) | undefined;
        onObjectMouseOut?: ((object: BookableObject) => void) | undefined;
        onSelectedObjectBooked?: ((object: BookableObject) => void) | undefined;
        onBestAvailableSelected?: ((objects: BookableObject[], nextToEachOther: boolean | null) => void) | undefined;
        onBestAvailableSelectionFailed?: (() => void) | undefined;
        onHoldSucceeded?:
            | ((
                objects: BookableObject[],
                ticketTypes?: Array<{ price: number; ticketType?: string | undefined; label?: string | undefined }>,
            ) => void)
            | undefined;
        onHoldFailed?:
            | ((
                objects: BookableObject[],
                ticketTypes?: Array<{ price: number; ticketType?: string | undefined; label?: string | undefined }>,
            ) => void)
            | undefined;
        onHoldTokenExpired?: (() => void) | undefined;
        onReleaseHoldSucceeded?:
            | ((
                objects: BookableObject[],
                ticketTypes?: Array<{ price: number; ticketType?: string | undefined; label?: string | undefined }>,
            ) => void)
            | undefined;
        onReleaseHoldFailed?:
            | ((
                objects: BookableObject[],
                ticketTypes?: Array<{ price: number; ticketType?: string | undefined; label?: string | undefined }>,
            ) => void)
            | undefined;
        onSelectionValid?: (() => void) | undefined;
        onSelectionInvalid?: ((violations: Violations[]) => void) | undefined;
        onFullScreenOpened?: (() => void) | undefined;
        onFullScreenClosed?: (() => void) | undefined;
    }

    interface CategoryConfig {
        accessible?: boolean | undefined;
        color: string;
        key: number;
        label: string;
    }

    interface CategoryList {
        get(key: string): Category;
    }

    interface PricingConfigSimple {
        category: string;
        price: number;
    }

    interface PricingConfigMulti {
        category: string;
        ticketTypes: Array<{
            ticketType: string;
            price: number;
            label?: string | undefined;
        }>;
    }

    type PricingConfig = PricingConfigSimple | PricingConfigMulti;

    interface BestAvailable {
        number?: number | undefined;
        category: string | string[];
        ticketTypes: { [ticketType: string]: number };
        clearSelection: boolean;
    }

    interface ExtraConfig {
        [key: string]: any;
    }

    type SelectionValidator = {
        type: "noOrphanSeats";
        mode?: "lenient" | "strict" | undefined;
        enabled?: boolean | undefined;
        highlight?: boolean | undefined;
    } | {
        type: "consecutiveSeats";
    };

    type Violations = "noOrphanSeats" | "consecutiveSeats";
}
