export = PhoneNumber;
declare function PhoneNumber(): void;
declare class PhoneNumber {
    countryCode: number;
    ddi: string;
    areaCode: number;
    ddd: string;
    localNumber: string;
    number: string;
    extension: string;
    fullNumber: string;
}
