import { Settings } from './Settings';

export interface Pricing {
    currency: string;
    eTicketability: boolean;
}

export interface Leg {
    from: string;
    to: string;
    departureDate: string;
}

export interface SearchPassengers {
    [x: string]: number;
}

export type Cabins = ['Economy'] | ['Business'] | ['Economy', 'Business'];

export interface ShopParams {
    legs: Leg[];
    passengers: SearchPassengers;
    pricing?: Pricing;
    cabins: Cabins;
    requestId: string;
    maxJourneyTime: number;
    solutionResult?: boolean;
    maxSolutions?: number;
    permittedCarriers?: string[];
    preferredCarriers?: string[];
    allowDirectAccess: boolean;
    preferredConnectionPoint?: string[];
    prohibitedConnectionPoint?: string[];
    permittedConnectionPoint?: string[];
    async?: boolean;
    faresOnly?: boolean;
}

export interface Segment {
    from: string;
    to: string;
    bookingClass: string;
    departure: string;
    arrival: string;
    airline: string;
    flightNumber: string;
    serviceClass: string;
    plane: string;
    fareBasisCode: string;
    group: number;
}

export interface SSR {
    type: string;
    carrier?: string;
    status?: string;
    freeText: string;
}

export interface BookPassengers {
    lastName: string;
    firstName: string;
    title: 'MR' | 'MS' | 'MSTR' | 'MISS';
    birthDate: string;
    gender: 'M' | 'F';
    ageCategory: string;
    passNumber: string;
    passCountry: string;
    ssr?: SSR[];
}

export interface FareRulesParams {
    segments: Segment[];
    passengers: BookPassengers;
    long: boolean;
    requestId: string;
}

export interface ToQueueParams {
    ppc: string;
    queue: string;
    pnr: string;
}

export interface AddSegmentsParams {
    pnr: string;
    segments: Segment[];
    version?: number;
    universalRecordLocatorCode?: string;
    reservationLocatorCode?: string;
}

export interface Phone {
    location: string;
    countryCode: string;
    number: string;
}

export interface DeliveryInformation {
    name: string;
    street: string;
    zip: string;
    country: string;
    city: string;
}

export interface BookParams {
    segments: Segment[];
    passengers: BookPassengers;
    phone: Phone;
    rule: string;
    allowWaitlist: boolean;
    deliveryInformation?: DeliveryInformation;
    tau?: string | Date | number[];
    platingCarrier?: string;
    overrideContinuityCheck?: boolean;
}

export interface GetBookingParams {
    pnr: string;
    viewOnly: boolean;
}

export type GetUniversalRecordParams = GetBookingParams;
export type GetUniversalRecordByPNRParams = GetBookingParams;

export interface TicketParams {
    commission: { type: 'ZA' | 'Z'; value: number };
    fop: { type: 'Cash' };
    pnr: string;
}

export interface FlightInfoParams {
    airline: string;
    departure: string;
    flightNumber: string;
}

export interface GetTicketParams {
    ticketNumber: string;
}

export interface GetTicketsParams {
    pnr: string;
}

export interface SearchBookingsByPassengerNameParams {
    searchPhrase: string;
}

export interface CancelTicketParams {
    ticketNumber: string;
}

export interface CancelBookingParams {
    pnr: string;
    cancelTickets: boolean;
    ignoreTickets?: boolean;
}

export interface GetEMDListParams {
    pnr: string;
}

export interface GetEMDItemParams {
    pnr: string;
    emdNumber: string;
}

export function createAirService(settings: Settings): {
    shop: (params: ShopParams) => Promise<any>;
    retrieveShop: (params: ShopParams) => Promise<any>;
    availability: (params: ShopParams) => Promise<any>;
    fareRules: (params: FareRulesParams) => Promise<any>;
    toQueue: (params: ToQueueParams) => Promise<true | Error>;
    addSegments: (params: AddSegmentsParams) => Promise<any>;
    book: (params: BookParams) => Promise<any>;
    getBooking: (params: GetBookingParams) => Promise<any>;
    getUniversalRecord: (params: GetUniversalRecordParams) => Promise<any>;
    getUniversalRecordByPNR: (params: GetUniversalRecordByPNRParams) => Promise<any>;
    ticket: (params: TicketParams) => Promise<any>;
    flightInfo: (params: FlightInfoParams) => Promise<any>;
    getTicket: (params: GetTicketParams) => Promise<any>;
    getTickets: (params: GetTicketsParams) => Promise<any>;
    searchBookingsByPassengerName: (params: SearchBookingsByPassengerNameParams) => Promise<{
        type: string;
        data: string | any[];
    }>;
    cancelTicket: (params: CancelTicketParams) => Promise<any>;
    cancelBooking: (params: CancelBookingParams) => Promise<any>;
    getEMDList: (params: GetEMDListParams) => Promise<any>;
    getEMDItem: (params: GetEMDItemParams) => Promise<any>;
    importPNR: () => Promise<any>;
};
