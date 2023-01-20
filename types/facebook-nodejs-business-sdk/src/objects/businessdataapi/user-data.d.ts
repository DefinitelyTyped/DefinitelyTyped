export default class UserData {
    _email: string;
    _phone: string;
    _first_name: string;
    _last_name: string;
    _date_of_birth: string;
    _city: string;
    _state: string;
    _country: string;
    _zip: string;
    _external_id: string;
    _address: string;
    constructor(
        email: string,
        phone: string,
        first_name: string,
        last_name: string,
        date_of_birth: string,
        city: string,
        state: string,
        zip: string,
        country: string,
        external_id: string,
        address: string,
    );
    get email(): string;
    set email(email: string);
    setEmail(email: string): UserData;
    get phone(): string;
    set phone(phone: string);
    setPhone(phone: string): UserData;
    get date_of_birth(): string;
    set date_of_birth(date_of_birth: string);
    setDateOfBirth(date_of_birth: string): UserData;
    get last_name(): string;
    set last_name(last_name: string);
    setLastName(last_name: string): UserData;
    get first_name(): string;
    set first_name(first_name: string);
    setFirstName(first_name: string): UserData;
    get city(): string;
    set city(city: string);
    setCity(city: string): UserData;
    get zip(): string;
    set zip(zip: string);
    setZip(zip: string): UserData;
    get state(): string;
    set state(state: string);
    setState(state: string): UserData;
    get country(): string;
    set country(country: string);
    setCountry(country: string): UserData;
    get external_id(): string;
    set external_id(external_id: string);
    setExternalId(external_id: string): UserData;
    get address(): string;
    set address(address: string);
    setAddress(address: string): void;
    toJson(): Record<string, any>;
}
