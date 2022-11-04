import BusinessDataUserData from '../businessdataapi/user-data';
import ServerUserData from '../serverside/user-data';
export default class UserData {
    _business_data_user_data: BusinessDataUserData;
    _server_user_data: ServerUserData;
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
        gender: string,
        client_ip_address: string,
        client_user_agent: string,
        fbp: string,
        fbc: string,
        subscription_id: string,
        fb_login_id: string,
        lead_id: string,
        dobd: string,
        dobm: string,
        doby: string,
        f5first: string,
        f5last: string,
        fi: string,
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
    get gender(): string;
    set gender(gender: string);
    setGender(gender: string): UserData;
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
    get address(): string;
    set address(address: string);
    setAddress(address: string): UserData;
    get business_data_user_data(): BusinessDataUserData;
    get server_user_data(): ServerUserData;
}
