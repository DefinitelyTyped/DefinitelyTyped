import { AbstractCrudObject } from './../abstract-crud-object';
import Cursor from './../cursor';
/**
 * Profile
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Profile extends AbstractCrudObject {
    static get Fields(): Readonly<{
        can_post: "can_post";
        id: "id";
        link: "link";
        name: "name";
        pic: "pic";
        pic_crop: "pic_crop";
        pic_large: "pic_large";
        pic_small: "pic_small";
        pic_square: "pic_square";
        profile_type: "profile_type";
        username: "username";
    }>;
    static get ProfileType(): Readonly<{
        application: "application";
        event: "event";
        group: "group";
        page: "page";
        user: "user";
    }>;
    static get Type(): Readonly<{
        angry: "ANGRY";
        care: "CARE";
        fire: "FIRE";
        haha: "HAHA";
        hundred: "HUNDRED";
        like: "LIKE";
        love: "LOVE";
        none: "NONE";
        pride: "PRIDE";
        sad: "SAD";
        thankful: "THANKFUL";
        wow: "WOW";
    }>;
    getPicture(fields: string[], params?: Record<any, any>): Promise<Cursor>;
    getPicture(fields: string[], params: Record<any, any> | undefined, fetchFirstPage: false): Cursor;
    getPicture(fields: string[], params?: Record<any, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    get(fields: string[], params?: Record<any, any>): Promise<Profile>;
}
