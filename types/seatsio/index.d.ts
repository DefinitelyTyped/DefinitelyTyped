// Type definitions for seatsio 1.0
// Project: https://www.seats.io
// Definitions by: seatsio <https://github.com/seatsio>
//                 Peter <https://github.com/PeterDeKok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace seatsio {
    class SeatingChart {
        config: Config;
        holdToken: string | null;
        selectedObjects: string[];

        constructor(config?: Config)

        render(): SeatingChart;
        destroy(): void;
        rerender(): void;
        resetView(): void;
        startNewSession(successCallback?: () => void, failureCallback?: () => void): void;
        selectBestAvailable(config: BestAvailable): void;
        clearSelection(successCallback?: () => void, failureCallback?: () => void): void;
        selectObjects(objects: string[] | Array<{ id: string; ticketType?: string; amount?: number }>, successCallback?: () => void, failureCallback?: () => void): void;
        deselectObjects(objects: string[] | Array<{ id: string; ticketType?: string; amount?: number }>, successCallback?: () => void, failureCallback?: () => void): void;
        selectCategories(categoryIds: string[], successCallback?: () => void, failureCallback?: () => void): void;
        deselectCategories(categoryIds: string[], successCallback?: () => void, failureCallback?: () => void): void;
        changeConfig(config: ChangeableConfig): void;
        findObject(label: string, successCallback?: (object: BookableObject) => void, objectNotFoundCallback?: () => void): void;
        listCategories(callback: (object: Category[]) => void): void;
        zoomToSelectedObjects(): void;
        listSelectedObjects(selectedObjectsCallback: (selectedObject: BookableObject) => void): void;
    }

    // TODO: event manager
    // TODO: chart manager
    // TODO: chart designer

    interface ChangeableConfig {
        objectColor?: (object: BookableObject, defaultColor: string, extraConfig: ExtraConfig) => string;
        objectLabel?: (object: BookableObject, defaultLabel: string, extraConfig: ExtraConfig) => string;
        numberOfPlacesToSelect?: number;
        maxSelectedObjects?: number | Array<{ quantity: number, ticketType?: string, category?: string }>;
        ticketListings?: TicketListing[];
        extraConfig?: ExtraConfig;
        availableCategories?: string[];
        unavailableCategories?: string[];
        filteredCategories?: string[];
        pricing?: PricingConfig[];
    }

    interface Config extends ChangeableConfig {
        divId: string;
        workspaceKey: string;
        event?: string;
        events?: string[];
        chart?: string;
        priceFormatter?: (price: number) => string;
        objectWithoutPricingSelectable?: boolean;
        objectWithoutCategorySelectable?: boolean;
        selectedObjects?: Array<string | { label: string; amount?: number, ticketType?: string }>;
        objectTooltip?: {
            showActionHint?: boolean,
            showAvailability?: boolean,
            showCategory?: boolean,
            showLabel?: boolean,
            showPricing?: boolean,
            showUnavailableNotice?: boolean,
            stylizedLabel?: boolean,
            confirmSelectionOnMobile?: string
        };
        tooltipInfo?: (object: BookableObject) => string;
        language?: string;
        messages?: { [original_text: string]: string };
        priceLevelsTooltipMessage?: string;
        selectedObjectsInputName?: string;
        sectionColor?: (section: Section, defaultColor: string, extraConfig: ExtraConfig) => string;
        objectIcon?: (object: BookableObject, defaultIcon: string, extraConfig: ExtraConfig) => string;
        isObjectVisible?: (object: BookableObject, extraConfig: ExtraConfig) => string;
        canGASelectionBeIncreased?: (gaArea: GeneralAdmissionArea, defaultValue: boolean, extraConfig: ExtraConfig, ticketType: string) => boolean;
        selectBestAvailable?: BestAvailable;
        showRowLines?: boolean;
        alwaysShowSectionContents?: boolean;
        session?: 'continue' | 'start' | 'manual' | 'none';
        holdToken?: string;
        holdTokenInputName?: string;
        holdOnSelectForGAs?: boolean;
        showLegend?: boolean;
        legend?: {
            hideNonSelectableCategories?: boolean
            hidePricing?: boolean
        };
        multiSelectEnabled?: boolean;
        showMinimap?: boolean;
        showActiveSectionTooltipOnMobile?: boolean;
        showViewFromYourSeatOnMobile?: boolean;
        showViewFromYourSeatOnDesktop?: boolean;
        selectionValidators?: SelectionValidator[];
        categories?: CategoryConfig[];
        categoryFilter?: {
            enabled: boolean
            multiSelect: boolean
            zoomOnSelect: boolean
        };
        objectCategories?: { [objectLabel: string]: string };
        objectCategory?: (object: BookableObject, categories: CategoryList, defaultCategory: Category, extraConfig: ExtraConfig) => Category;
        mode?: 'normal' | 'static' | 'print';
        loading?: string;
        fitTo?: 'widthAndHeight' | 'width';
        showZoomOutButtonOnMobile?: boolean;
        showFullScreenButton?: boolean;
        unifiedObjectPropertiesInCallbacks?: boolean;
        channels?: string[];
        colorScheme?: 'light' | 'dark';
        colors?: {
            colorSelected?: string
            cursorTooltipBackgroundColor?: string
            colorTitle?: string
        };
        stylePreset?: 'balance' | 'bubblegum' | 'flathead' | 'bezels' | 'leaf';
        style?: {
            font?: 'Roboto' | 'Montserrat' | 'WorkSans' | 'NotoSansHK' | 'Lato'
            fontWeight?: 'bolder' | 'minMax'
            borderRadius?: 'none' | 'max' | 'asymmetrical'
            border?: 'thick' | '3d'
            padding?: 'spacious'
            buttonFace?: 'fillEnabled' | 'fillHighlightedOption'
        };

        onChartRendered?: (chart: SeatingChart) => void;
        onChartRenderingFailed?: (chart: SeatingChart) => void;
        onObjectClicked?: (object: BookableObject) => void;
        onObjectSelected?: (object: BookableObject, selectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectDeselected?: (object: BookableObject, deselectedTicketType?: { price: number; ticketType?: string }) => void;
        onObjectMouseOver?: (object: BookableObject) => void;
        onObjectMouseOut?: (object: BookableObject) => void;
        onSelectedObjectBooked?: (object: BookableObject) => void;
        onBestAvailableSelected?: (objects: BookableObject[], nextToEachOther: boolean | null) => void;
        onBestAvailableSelectionFailed?: () => void;
        onHoldSucceeded?: (objects: BookableObject[], ticketTypes?: Array<{ price: number; ticketType?: string; label?: string }>) => void;
        onHoldFailed?: (objects: BookableObject[], ticketTypes?: Array<{ price: number; ticketType?: string; label?: string }>) => void;
        onHoldTokenExpired?: () => void;
        onReleaseHoldSucceeded?: (objects: BookableObject[], ticketTypes?: Array<{ price: number; ticketType?: string; label?: string }>) => void;
        onReleaseHoldFailed?: (objects: BookableObject[], ticketTypes?: Array<{ price: number; ticketType?: string; label?: string }>) => void;
        onSelectionValid?: () => void;
        onSelectionInvalid?: (violations: Violations[]) => void;
        onFullScreenOpened?: () => void;
        onFullScreenClosed?: () => void;
    }

    interface BaseObject {
        // TODO: check whether some of these properties can be null or undefined
        accessible: boolean;
        category: Category;
        center: { x: number, y: number };
        label: string;
        labels: {
            own: string
            parent?: string
            section?: string
        };
        pricing: Pricing[] | Pricing; // TODO: can this also be a number?
        status: string;
        extraData: any;
        dataPerEvent: { [eventKey: string]: DataPerEvent };
        forSale: boolean;
        selectable: boolean;
        selected: boolean;
        selectedTicketType: string;
        inSelectableChannel: boolean;
        objectType: string;

        select(ticketType?: string): void;
        deselect(ticketType?: string): void;
        pulse(): void;
        unpulse(): void;
        displayObjectType: string;
    }

    interface Seat extends BaseObject {
        parent: { type: 'row' | 'table' };
        viewFromSeatUrl?: string;
        companionSeat: boolean;
        restrictedView: boolean;
        disabledBySocialDistancingRules: boolean;
    }

    interface GeneralAdmissionArea extends BaseObject {
        capacity: number;
        numBooked: number;
        numFree: number;
        numSelected: number;
        selectionPerTicketType: { [ticketType: string]: number };
        dataPerEvent: { [eventKey: string]: GeneralAdmissionDataPerEvent };
    }

    interface Section extends BaseObject {
        sectionCategory: Category;
        numberOfSelectableObjects: number;
        numberOfSelectedObjects: number;
        selectableCategories: Category[];
        isInteractive: boolean;
    }

    type BookableObject = Seat | GeneralAdmissionArea | Section;

    interface Category {
        accessible: boolean;
        color: string;
        key: number;
        label: string;
        pricing: Pricing;
    }

    interface CategoryConfig {
        accessible?: boolean;
        color: string;
        key: number;
        label: string;
    }

    interface CategoryList {
        get(key: string): Category;
    }

    interface Pricing {
        price: number;
        formattedPrice: string;
        ticketType?: string;
    }

    interface PricingConfigSimple {
        category: string;
        price: number;
    }

    interface PricingConfigMulti {
        category: string;
        ticketTypes: Array<{
            ticketType: string
            price: number
            label?: string
        }>;
    }

    type PricingConfig = PricingConfigSimple | PricingConfigMulti;

    interface DataPerEvent {
        status: string;
        extraData?: any;
    }

    interface GeneralAdmissionDataPerEvent extends DataPerEvent {
        numBooked: 5;
        holds: {
            [tokenHash: string]: {
                NO_TICKET_TYPE: number
                [ticketType: string]: number
            }
        };
    }

    interface BestAvailable {
        number?: number;
        category: string | string[];
        ticketTypes: { [ticketType: string]: number };
        clearSelection: boolean;
    }

    interface ExtraConfig { [key: string]: any; }

    interface TicketListing {
        section: string;
        quantity: number;
        price: number;
    }

    type SelectionValidator = {
        type: 'noOrphanSeats'
        mode?: 'lenient' | 'strict'
        enabled?: boolean
        highlight?: boolean
    } | {
        type: 'consecutiveSeats'
    };

    type Violations = 'noOrphanSeats' | 'consecutiveSeats';
}

export default seatsio;
