import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeDegreesOfFreedomSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeDegreesOfFreedomSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        ad_handle_type: "ad_handle_type";
        creative_features_spec: "creative_features_spec";
        degrees_of_freedom_type: "degrees_of_freedom_type";
        image_transformation_types: "image_transformation_types";
        multi_media_transformation_type: "multi_media_transformation_type";
        stories_transformation_types: "stories_transformation_types";
        text_transformation_types: "text_transformation_types";
        video_transformation_types: "video_transformation_types";
    }>;
}
