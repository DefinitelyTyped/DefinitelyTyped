import { Settings } from './Settings';

export interface Room {
    adults: number;
    children: number[];
}

export interface SearchParams {
    location: string;
    startDate: string;
    endDate: string;
    rooms: Room[];
    MaxWait: number;
    MaxProperties: number;
    currency: string;
    rating: number[];
}

export interface RatesParams {
    HotelChain: string;
    HotelCode: string;
    startDate: string;
    endDate: string;
    rooms: Room[];
    Suppliers: string[];
    HostToken: string;
    currency: string;
}

export interface People {
    key: number;
    TravelerType: string;
    Age: number;
    FirstName: string;
    LastName: string;
    PrefixName: string;
    Nationality: string;
    BirthDate: string;
    AreaCode: number;
    CountryCode: number;
    Number: number;
    Email: string;
    Country: string;
    City: string;
    Street: string;
    PostalCode: number;
}

export interface Guarantee {
    CVV: number;
    ExpDate: string;
    CardHolder: string;
    CardNumber: string;
    CardType: string;
    BankName: string;
    BankCountryCode: string;
}

export interface RoomRef {
    adults: number;
    adultsRefs: number[];
    children: Array<{ age: number; key: number }>;
}

export interface BookParams {
    people: People[];
    Guarantee: Guarantee;
    rates: any[];
    roomsRefs: RoomRef[];
    HotelChain: string;
    HotelCode: string;
    startDate: string;
    endDate: string;
    HostToken: string;
}

export interface CancelBookParams {
    LocatorCode: string;
}

export function createHotelService(settings: Settings): {
    search: (params: SearchParams) => Promise<any>;
    rates: (params: RatesParams) => Promise<any>;
    book: (params: BookParams) => Promise<any>;
    cancelBook: (params: CancelBookParams) => Promise<any>;
};
