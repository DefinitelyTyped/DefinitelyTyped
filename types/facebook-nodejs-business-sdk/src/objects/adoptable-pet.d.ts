import { AbstractCrudObject } from "./../abstract-crud-object";
import Cursor from "./../cursor";
/**
 * AdoptablePet
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdoptablePet extends AbstractCrudObject {
    static get Fields(): Readonly<{
        adoptable_pet_id: "adoptable_pet_id";
        adoption_application_form_url: "adoption_application_form_url";
        age_bucket: "age_bucket";
        animal_type: "animal_type";
        applinks: "applinks";
        availability: "availability";
        breed: "breed";
        category_specific_fields: "category_specific_fields";
        coat_length: "coat_length";
        color: "color";
        currency: "currency";
        description: "description";
        features: "features";
        gender: "gender";
        id: "id";
        image_fetch_status: "image_fetch_status";
        images: "images";
        name: "name";
        price: "price";
        sanitized_images: "sanitized_images";
        secondary_color: "secondary_color";
        shelter_email: "shelter_email";
        shelter_name: "shelter_name";
        shelter_page_id: "shelter_page_id";
        shelter_phone: "shelter_phone";
        size: "size";
        tertiary_color: "tertiary_color";
        url: "url";
        visibility: "visibility";
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
    getAugmentedRealitiesMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getChannelsToIntegrityStatus(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVideosMetadata(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<string, any>): Promise<AdoptablePet>;
}
