import { AbstractCrudObject } from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
/**
 * PageCallToAction
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PageCallToAction extends AbstractCrudObject {
    static get Fields(): Readonly<{
        android_app: "android_app";
        android_deeplink: "android_deeplink";
        android_destination_type: "android_destination_type";
        android_package_name: "android_package_name";
        android_url: "android_url";
        created_time: "created_time";
        email_address: "email_address";
        from: "from";
        id: "id";
        intl_number_with_plus: "intl_number_with_plus";
        iphone_app: "iphone_app";
        iphone_deeplink: "iphone_deeplink";
        iphone_destination_type: "iphone_destination_type";
        iphone_url: "iphone_url";
        status: "status";
        type: "type";
        updated_time: "updated_time";
        web_destination_type: "web_destination_type";
        web_url: "web_url";
    }>;
    static get AndroidDestinationType(): Readonly<{
        app_deeplink: "APP_DEEPLINK";
        become_a_volunteer: "BECOME_A_VOLUNTEER";
        email: "EMAIL";
        facebook_app: "FACEBOOK_APP";
        follow: "FOLLOW";
        marketplace_inventory_page: "MARKETPLACE_INVENTORY_PAGE";
        menu_on_facebook: "MENU_ON_FACEBOOK";
        messenger: "MESSENGER";
        mini_shop: "MINI_SHOP";
        mobile_center: "MOBILE_CENTER";
        none: "NONE";
        phone_call: "PHONE_CALL";
        shop_on_facebook: "SHOP_ON_FACEBOOK";
        website: "WEBSITE";
    }>;
    static get IphoneDestinationType(): Readonly<{
        app_deeplink: "APP_DEEPLINK";
        become_a_volunteer: "BECOME_A_VOLUNTEER";
        email: "EMAIL";
        facebook_app: "FACEBOOK_APP";
        follow: "FOLLOW";
        marketplace_inventory_page: "MARKETPLACE_INVENTORY_PAGE";
        menu_on_facebook: "MENU_ON_FACEBOOK";
        messenger: "MESSENGER";
        mini_shop: "MINI_SHOP";
        none: "NONE";
        phone_call: "PHONE_CALL";
        shop_on_facebook: "SHOP_ON_FACEBOOK";
        website: "WEBSITE";
    }>;
    static get Type(): Readonly<{
        become_a_volunteer: "BECOME_A_VOLUNTEER";
        book_appointment: "BOOK_APPOINTMENT";
        book_now: "BOOK_NOW";
        buy_tickets: "BUY_TICKETS";
        call_now: "CALL_NOW";
        charity_donate: "CHARITY_DONATE";
        contact_us: "CONTACT_US";
        donate_now: "DONATE_NOW";
        email: "EMAIL";
        follow_page: "FOLLOW_PAGE";
        get_directions: "GET_DIRECTIONS";
        get_offer: "GET_OFFER";
        get_offer_view: "GET_OFFER_VIEW";
        interested: "INTERESTED";
        learn_more: "LEARN_MORE";
        listen: "LISTEN";
        local_dev_platform: "LOCAL_DEV_PLATFORM";
        message: "MESSAGE";
        mobile_center: "MOBILE_CENTER";
        open_app: "OPEN_APP";
        order_food: "ORDER_FOOD";
        play_music: "PLAY_MUSIC";
        play_now: "PLAY_NOW";
        purchase_gift_cards: "PURCHASE_GIFT_CARDS";
        request_appointment: "REQUEST_APPOINTMENT";
        request_quote: "REQUEST_QUOTE";
        shop_now: "SHOP_NOW";
        shop_on_facebook: "SHOP_ON_FACEBOOK";
        sign_up: "SIGN_UP";
        view_inventory: "VIEW_INVENTORY";
        view_menu: "VIEW_MENU";
        view_shop: "VIEW_SHOP";
        visit_group: "VISIT_GROUP";
        watch_now: "WATCH_NOW";
        woodhenge_support: "WOODHENGE_SUPPORT";
    }>;
    static get WebDestinationType(): Readonly<{
        become_a_volunteer: "BECOME_A_VOLUNTEER";
        become_supporter: "BECOME_SUPPORTER";
        email: "EMAIL";
        follow: "FOLLOW";
        messenger: "MESSENGER";
        mobile_center: "MOBILE_CENTER";
        none: "NONE";
        shop_on_facebook: "SHOP_ON_FACEBOOK";
        website: "WEBSITE";
    }>;
    delete(fields: string[], params?: Record<any, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<any, any>): Promise<PageCallToAction>;
    update(fields: string[], params?: Record<any, any>): Promise<PageCallToAction>;
}
