import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Vehicle
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Vehicle extends AbstractCrudObject {
    static get Fields(): Readonly<{
        address: "address";
        applinks: "applinks";
        availability: "availability";
        body_style: "body_style";
        category_specific_fields: "category_specific_fields";
        condition: "condition";
        currency: "currency";
        custom_label_0: "custom_label_0";
        date_first_on_lot: "date_first_on_lot";
        dealer_communication_channel: "dealer_communication_channel";
        dealer_email: "dealer_email";
        dealer_id: "dealer_id";
        dealer_name: "dealer_name";
        dealer_phone: "dealer_phone";
        dealer_privacy_policy_url: "dealer_privacy_policy_url";
        description: "description";
        drivetrain: "drivetrain";
        exterior_color: "exterior_color";
        fb_page_id: "fb_page_id";
        features: "features";
        fuel_type: "fuel_type";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        interior_color: "interior_color";
        legal_disclosure_impressum_url: "legal_disclosure_impressum_url";
        make: "make";
        mileage: "mileage";
        model: "model";
        previous_currency: "previous_currency";
        previous_price: "previous_price";
        price: "price";
        sale_currency: "sale_currency";
        sale_price: "sale_price";
        sanitized_images: "sanitized_images";
        state_of_vehicle: "state_of_vehicle";
        title: "title";
        transmission: "transmission";
        trim: "trim";
        unit_price: "unit_price";
        url: "url";
        vehicle_id: "vehicle_id";
        vehicle_registration_plate: "vehicle_registration_plate";
        vehicle_specifications: "vehicle_specifications";
        vehicle_type: "vehicle_type";
        vin: "vin";
        visibility: "visibility";
        year: "year";
    }>;
    static get ImageFetchStatus(): Readonly<{
        direct_upload: "DIRECT_UPLOAD";
        fetched: "FETCHED";
        fetch_failed: "FETCH_FAILED";
        no_status: "NO_STATUS";
        outdated: "OUTDATED";
        partial_fetch: "PARTIAL_FETCH";
    }>;
    static get Visibility(): Readonly<{
        published: "PUBLISHED";
        staging: "STAGING";
    }>;
    static get Availability(): Readonly<{
        available: "AVAILABLE";
        not_available: "NOT_AVAILABLE";
        pending: "PENDING";
    }>;
    static get BodyStyle(): Readonly<{
        convertible: "CONVERTIBLE";
        coupe: "COUPE";
        crossover: "CROSSOVER";
        estate: "ESTATE";
        grandtourer: "GRANDTOURER";
        hatchback: "HATCHBACK";
        minibus: "MINIBUS";
        minivan: "MINIVAN";
        mpv: "MPV";
        none: "NONE";
        other: "OTHER";
        pickup: "PICKUP";
        roadster: "ROADSTER";
        saloon: "SALOON";
        sedan: "SEDAN";
        small_car: "SMALL_CAR";
        sportscar: "SPORTSCAR";
        supercar: "SUPERCAR";
        supermini: "SUPERMINI";
        suv: "SUV";
        truck: "TRUCK";
        van: "VAN";
        wagon: "WAGON";
    }>;
    static get Condition(): Readonly<{
        excellent: "EXCELLENT";
        fair: "FAIR";
        good: "GOOD";
        none: "NONE";
        other: "OTHER";
        poor: "POOR";
        very_good: "VERY_GOOD";
    }>;
    static get Drivetrain(): Readonly<{
        awd: "AWD";
        four_wd: "FOUR_WD";
        fwd: "FWD";
        none: "NONE";
        other: "OTHER";
        rwd: "RWD";
        two_wd: "TWO_WD";
    }>;
    static get FuelType(): Readonly<{
        diesel: "DIESEL";
        electric: "ELECTRIC";
        flex: "FLEX";
        gasoline: "GASOLINE";
        hybrid: "HYBRID";
        none: "NONE";
        other: "OTHER";
        petrol: "PETROL";
        plugin_hybrid: "PLUGIN_HYBRID";
    }>;
    static get StateOfVehicle(): Readonly<{
        cpo: "CPO";
        new: "NEW";
        used: "USED";
    }>;
    static get Transmission(): Readonly<{
        automatic: "AUTOMATIC";
        manual: "MANUAL";
        none: "NONE";
        other: "OTHER";
    }>;
    static get VehicleType(): Readonly<{
        boat: "BOAT";
        car_truck: "CAR_TRUCK";
        commercial: "COMMERCIAL";
        motorcycle: "MOTORCYCLE";
        other: "OTHER";
        powersport: "POWERSPORT";
        rv_camper: "RV_CAMPER";
        trailer: "TRAILER";
    }>;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getAugmentedRealitiesMetadata(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getVideosMetadata(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getVideosMetadata(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Vehicle>;
    update(fields: string[], params?: Record<any, any>): Promise<Vehicle>;
}
