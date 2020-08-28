declare namespace Seatsio {
    type BookableObject = Seat | GeneralAdmissionArea | Section;

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

    interface Category {
        accessible: boolean;
        color: string;
        key: number;
        label: string;
        pricing: Pricing;
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

    interface Pricing {
        price: number;
        formattedPrice: string;
        ticketType?: string;
    }

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
}
