export default class UserData {
    _emails: string[];
    _phones: string[];
    _genders: string[];
    _first_names: string[];
    _last_names: string[];
    _dates_of_birth: string[];
    _cities: string[];
    _states: string[];
    _zips: string[];
    _countries: string[];
    _external_ids: string[];
    _client_ip_address: string;
    _client_user_agent: string;
    _fbc: string;
    _fbp: string;
    _subscription_id: string;
    _fb_login_id: string;
    _lead_id: string;
    _f5first: string;
    _f5last: string;
    _fi: string;
    _dobd: string;
    _dobm: string;
    _doby: string;
    constructor(
        email?: string,
        phone?: string,
        gender?: string,
        first_name?: string,
        last_name?: string,
        date_of_birth?: string,
        city?: string,
        state?: string,
        zip?: string,
        country?: string,
        external_id?: string,
        client_ip_address?: string,
        client_user_agent?: string,
        fbp?: string,
        fbc?: string,
        subscription_id?: string,
        fb_login_id?: string,
        lead_id?: string,
        dobd?: string,
        dobm?: string,
        doby?: string,
    );
    static get Gender(): Record<string, any>;
    get email(): string;
    set email(email: string);
    get emails(): string[];
    set emails(emails: string[]);
    setEmail(email: string): UserData;
    setEmails(emails: string[]): UserData;
    get phone(): string;
    set phone(phone: string);
    get phones(): string[];
    set phones(phones: string[]);
    setPhone(phone: string): UserData;
    setPhones(phones: string[]): UserData;
    get gender(): string;
    set gender(gender: string);
    get genders(): string[];
    set genders(genders: string[]);
    setGender(gender: string): UserData;
    setGenders(genders: string[]): UserData;
    get date_of_birth(): string;
    set date_of_birth(date_of_birth: string);
    get dates_of_birth(): string[];
    set dates_of_birth(dates_of_birth: string[]);
    setDateOfBirth(date_of_birth: string): UserData;
    setDatesOfBirth(dates_of_birth: string[]): UserData;
    get last_name(): string;
    set last_name(last_name: string);
    get last_names(): string[];
    set last_names(last_names: string[]);
    setLastName(last_name: string): UserData;
    setLastNames(last_names: string[]): UserData;
    get first_name(): string;
    set first_name(first_name: string);
    get first_names(): string[];
    set first_names(first_names: string[]);
    setFirstName(first_name: string): UserData;
    setFirstNames(first_names: string[]): UserData;
    get city(): string;
    set city(city: string);
    get cities(): string[];
    set cities(cities: string[]);
    setCity(city: string): UserData;
    setCities(cities: string[]): UserData;
    get zip(): string;
    set zip(zip: string);
    get zips(): string[];
    set zips(zips: string[]);
    setZip(zip: string): UserData;
    setZips(zips: string[]): UserData;
    get state(): string;
    set state(state: string);
    get states(): string[];
    set states(states: string[]);
    setState(state: string): UserData;
    setStates(states: string[]): UserData;
    get country(): string;
    set country(country: string);
    get countries(): string[];
    set countries(countries: string[]);
    setCountry(country: string): UserData;
    setCountries(countries: string[]): UserData;
    get external_id(): string;
    set external_id(external_id: string);
    get external_ids(): string[];
    set external_ids(external_ids: string[]);
    setExternalId(external_id: string): UserData;
    setExternalIds(external_ids: string[]): UserData;
    get client_ip_address(): string;
    set client_ip_address(client_ip_address: string);
    setClientIpAddress(client_ip_address: string): UserData;
    get client_user_agent(): string;
    set client_user_agent(client_user_agent: string);
    setClientUserAgent(client_user_agent: string): UserData;
    get fbc(): string;
    set fbc(fbc: string);
    setFbc(fbc: string): UserData;
    get fbp(): string;
    set fbp(fbp: string);
    setFbp(fbp: string): UserData;
    get subscription_id(): string;
    set subscription_id(subscription_id: string);
    setSubscriptionId(subscription_id: string): UserData;
    get fb_login_id(): string;
    set fb_login_id(fb_login_id: string);
    setFbLoginId(fb_login_id: string): UserData;
    get lead_id(): string;
    set lead_id(lead_id: string);
    setLeadId(lead_id: string): UserData;
    get f5first(): string;
    set f5first(f5first: string);
    setF5First(f5first: string): UserData;
    get f5last(): string;
    set f5last(f5last: string);
    setF5Last(f5last: string): UserData;
    get fi(): string;
    set fi(fi: string);
    setFi(fi: string): UserData;
    get dobd(): string;
    set dobd(dobd: string);
    setDobd(dobd: string): UserData;
    get dobm(): string;
    set dobm(dobm: string);
    setDobm(dobm: string): UserData;
    get doby(): string;
    set doby(doby: string);
    setDoby(doby: string): UserData;
    normalize(): Record<string, any>;
    normalizeAndHashMultiValues(arr: string[], fieldName: string): string[];
    dedupArray(arr: string[]): string[];
}
