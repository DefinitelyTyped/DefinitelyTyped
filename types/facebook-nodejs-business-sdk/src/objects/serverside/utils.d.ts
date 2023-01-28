declare namespace ServerSideUtils {
    function normalizeAndHash(input: string, field: string): any;
    function normalizeCountry(country: string): string;
    function normalizeCity(city: string): string;
    function normalizeCurrency(currency: string): string;
    function normalizeDeliveryCategory(input: string): string;
    function normalizeEmail(email: string): string;
    function normalizeGender(gender: string): string | null;
    function normalizeF5NameField(name: string): string;
    function normalizePhone(phone_number: string): string;
    function normalizeState(state: string): string;
    function normalizeZip(zip: string): string | null;
    function normalizeDobd(dobd: string): string;
    function normalizeDobm(dobm: string): string;
    function normalizeDoby(doby: string): string;
    function isInternationalPhoneNumber(phone_number: string): boolean;
    function toSHA256(input?: string | null): any;
}
export default ServerSideUtils;
