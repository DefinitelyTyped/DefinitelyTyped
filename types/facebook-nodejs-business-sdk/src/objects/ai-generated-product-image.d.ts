import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AIGeneratedProductImage
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AIGeneratedProductImage extends AbstractCrudObject {
    static get Fields(): Readonly<{
        flagged_for_manual_review: "flagged_for_manual_review";
        transformed_image_url: "transformed_image_url";
    }>;
}
