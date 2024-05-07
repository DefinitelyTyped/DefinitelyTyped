import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ProfilePictureSource
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProfilePictureSource extends AbstractCrudObject {
    static get Fields(): Readonly<{
        bottom: "bottom";
        cache_key: "cache_key";
        height: "height";
        is_silhouette: "is_silhouette";
        left: "left";
        right: "right";
        top: "top";
        url: "url";
        width: "width";
    }>;
    static get Type(): Readonly<{
        album: "album";
        small: "small";
        thumbnail: "thumbnail";
    }>;
    static get BreakingChange(): Readonly<{
        profile_picture: "PROFILE_PICTURE";
    }>;
}
