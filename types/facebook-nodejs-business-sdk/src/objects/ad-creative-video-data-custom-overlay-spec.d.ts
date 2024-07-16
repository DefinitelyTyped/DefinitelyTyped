import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeVideoDataCustomOverlaySpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeVideoDataCustomOverlaySpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        background_color: "background_color";
        background_opacity: "background_opacity";
        duration: "duration";
        float_with_margin: "float_with_margin";
        full_width: "full_width";
        option: "option";
        position: "position";
        start: "start";
        template: "template";
        text_color: "text_color";
    }>;
    static get BackgroundOpacity(): Readonly<{
        half: "half";
        solid: "solid";
    }>;
    static get Option(): Readonly<{
        bank_transfer: "bank_transfer";
        boleto: "boleto";
        cash_on_delivery: "cash_on_delivery";
        discount_with_boleto: "discount_with_boleto";
        fast_delivery: "fast_delivery";
        free_shipping: "free_shipping";
        home_delivery: "home_delivery";
        inventory: "inventory";
        pay_at_hotel: "pay_at_hotel";
        pay_on_arrival: "pay_on_arrival";
    }>;
    static get Position(): Readonly<{
        middle_center: "middle_center";
        middle_left: "middle_left";
        middle_right: "middle_right";
        top_center: "top_center";
        top_left: "top_left";
        top_right: "top_right";
    }>;
    static get Template(): Readonly<{
        rectangle_with_text: "rectangle_with_text";
    }>;
}
