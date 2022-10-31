export default class ServerSideUtils {
    static normalizeAndHash(input: string, field: string): any;
    static normalizeCountry(country: string): string;
    static normalizeCity(city: string): string;
    static normalizeCurrency(currency: string): string;
    static normalizeDeliveryCategory(input: string): string;
    static normalizeEmail(email: string): string;
    static normalizeGender(gender: string): string | null;
    static normalizeF5NameField(name: string): string;
    static normalizePhone(phone_number: string): string;
    static normalizeState(state: string): string;
    static normalizeZip(zip: string): string | null;
    static normalizeDobd(dobd: string): string;
    static normalizeDobm(dobm: string): string;
    static normalizeDoby(doby: string): string;
    static isInternationalPhoneNumber(phone_number: string): boolean;
    static toSHA256(input: string | null | undefined): any;
}
