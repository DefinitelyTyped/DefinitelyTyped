/**
 * ServerSideUtils contains the Utility modules used for sending Conversions API Events
 */
declare namespace ServerSideUtils {
    /**
     * Normalizes and hashes the input given the field name.
     * @param  {String} [input] Value to be normalized. eg: `foo@bar.com` for email input.
     * @param  {String} [field] Key(Type) of Value to be normalized eg: 'em' for email field.
     * @return {String} Normalized and hashed value for the string.
     */
    function normalizeAndHash(input: string, field: string): any;
    /**
     * Normalizes the given country token and returns acceptable two letter ISO country code
     * @param  {String} [country] country value to be normalized.
     * @return {String} Normalized ISO country code.
     */
    function normalizeCountry(country: string): string;
    /**
     * Normalizes the given city and returns acceptable city value
     * @param  {String} [city] city value to be normalized.
     * @return {String} Normalized city value.
     */
    function normalizeCity(city: string): string;
    /**
     * Normalizes the given currency string and returns acceptable three letter  ISO code
     * @param  {String} [currency] country value to be normalized.
     * @return {String} Normalized ISO currency code.
     */
    function normalizeCurrency(currency: string): string;
    /**
     * Normalizes the given delivery category value and returns a valid string.
     * @param  {String} [input] delivery_category input to be validated.
     * @return {String} Valid delivery_category value.
     */
    function normalizeDeliveryCategory(input: string): string;
    /**
     * Normalizes the given email to RFC 822 standard and returns acceptable email value
     * @param  {String} [email] email value to be normalized.
     * @return {String} Normalized email value.
     */
    function normalizeEmail(email: string): string;
    /**
     * Normalizes the given gender and returns acceptable('f' or 'm') gender value
     * @param  {String} [gender] gender value to be normalized.
     * @return {String} Normalized gender value.
     */
    function normalizeGender(gender: string): string;
    /**
     * Normalizes the 5 character name field.
     * @param  {String} [name] name value to be normalized.
     * @return {String} Normalized 5 character {first,last}name field value.
     */
    function normalizeF5NameField(name: string): string;
    /**
     * Normalizes the given phone and returns acceptable phone value
     * @param  {String} [phone_number] phone number value to be normalized.
     * @return {String} Normalized phone number value.
     */
    function normalizePhone(phone_number: string): string;
    /**
     * Normalizes the given state and returns acceptable city value
     * @param  {String} [state] state value to be normalized.
     * @return {String} Normalized state value.
     */
    function normalizeState(state: string): string;
    /**
     * Normalizes the given zip/postal code and returns acceptable zip code value
     * @param  {String} [zip] zip value to be normalized.
     * @return {String} Normalized zip code value.
     */
    function normalizeZip(zip: string): string;
    /**
     * Normalizes the given date of birth day
     * @param  {String} [dobd] value to be normalized.
     * @return {String} Normalized value.
     */
    function normalizeDobd(dobd: string): string;
    /**
     * Normalizes the given date of birth month
     * @param  {String} [dobm] value to be normalized.
     * @return {String} Normalized value.
     */
    function normalizeDobm(dobm: string): string;
    /**
     * Normalizes the given date of birth year
     * @param  {String} [doby] value to be normalized.
     * @return {String} Normalized value.
     */
    function normalizeDoby(doby: string): string;
    /**
     * Boolean method which checks if a given number is represented in international format
     * @param  {String} phone_number that has to be tested.
     * @return {Boolean} value if a number is represented international format
     */
    function isInternationalPhoneNumber(phone_number: string): boolean;
    /**
     * Calculates the SHA 256 hash of a given non-null string.
     * @param  {String} [input] String to be hashed
     * @return {String} SHA 256 Hash of the string
     */
    function toSHA256(input?: string | null): any;
}

export default ServerSideUtils;
