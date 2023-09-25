declare namespace Seatsio {
    type BookableObject = Seat | GeneralAdmissionArea | Section;

    interface BaseObject {
        accessible: boolean;
        category?: Category | undefined;
        center?: { x: number; y: number } | undefined;
        label: string;
        labels: {
            own: string;
            parent?: string | undefined;
            section?: string | undefined;
        };
        pricing?: Pricing[] | Pricing | undefined;
        status: string;
        extraData: any;
        dataPerEvent: { [eventKey: string]: DataPerEvent };
        forSale: boolean;
        selectable: boolean;
        selected: boolean;
        selectedTicketType?: string | undefined;
        inSelectableChannel: boolean;
        objectType: string;

        select(ticketType?: string): void;
        deselect(ticketType?: string): void;
        pulse(): void;
        unpulse(): void;
        displayObjectType?: string | undefined;
    }

    interface Category {
        accessible: boolean;
        color: string;
        key: number;
        label: string;
        pricing: Pricing;
    }

    interface Seat extends BaseObject {
        parent: { type: "row" | "table" };
        viewFromSeatUrl?: string | undefined;
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

    interface Pricing {
        price: number;
        formattedPrice: string;
        ticketType?: string | undefined;
    }

    interface DataPerEvent {
        status: string;
        extraData?: any;
    }

    interface GeneralAdmissionDataPerEvent extends DataPerEvent {
        numBooked: 5;
        holds: {
            [tokenHash: string]: {
                NO_TICKET_TYPE: number;
                [ticketType: string]: number;
            };
        };
    }

    type ColorScheme = "light" | "dark";

    interface Colors {
        colorSelected?: string | undefined;
        cursorTooltipBackgroundColor?: string | undefined;
        colorTitle?: string | undefined;
    }

    type StylePreset = "balance" | "bubblegum" | "flathead" | "bezels" | "leaf";

    interface Style {
        font?: "Roboto" | "Montserrat" | "WorkSans" | "NotoSansHK" | "Lato" | undefined;
        fontWeight?: "bolder" | "minMax" | undefined;
        borderRadius?: "none" | "max" | "asymmetrical" | undefined;
        border?: "thick" | "3d" | undefined;
        padding?: "spacious" | undefined;
        buttonFace?: "fillEnabled" | "fillHighlightedOption" | undefined;
    }
}
