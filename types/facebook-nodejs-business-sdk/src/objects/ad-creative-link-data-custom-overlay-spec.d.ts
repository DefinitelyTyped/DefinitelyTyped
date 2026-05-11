import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AdCreativeLinkDataCustomOverlaySpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataCustomOverlaySpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        background_color: "background_color";
        float_with_margin: "float_with_margin";
        font: "font";
        option: "option";
        position: "position";
        render_with_icon: "render_with_icon";
        template: "template";
        text_color: "text_color";
    }>;
    static get BackgroundColor(): Readonly<{
        background_000000: "background_000000";
        background_0090ff: "background_0090ff";
        background_00af4c: "background_00af4c";
        background_595959: "background_595959";
        background_755dde: "background_755dde";
        background_e50900: "background_e50900";
        background_f23474: "background_f23474";
        background_f78400: "background_f78400";
        background_ffffff: "background_ffffff";
    }>;
    static get Font(): Readonly<{
        droid_serif_regular: "droid_serif_regular";
        lato_regular: "lato_regular";
        noto_sans_regular: "noto_sans_regular";
        nunito_sans_bold: "nunito_sans_bold";
        open_sans_bold: "open_sans_bold";
        pt_serif_bold: "pt_serif_bold";
        roboto_condensed_regular: "roboto_condensed_regular";
        roboto_medium: "roboto_medium";
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
        bottom_left: "bottom_left";
        bottom_right: "bottom_right";
        top_left: "top_left";
        top_right: "top_right";
    }>;
    static get Template(): Readonly<{
        pill_with_text: "pill_with_text";
    }>;
    static get TextColor(): Readonly<{
        text_000000: "text_000000";
        text_007ad0: "text_007ad0";
        text_009c2a: "text_009c2a";
        text_646464: "text_646464";
        text_755dde: "text_755dde";
        text_c91b00: "text_c91b00";
        text_f23474: "text_f23474";
        text_f78400: "text_f78400";
        text_ffffff: "text_ffffff";
    }>;
}
