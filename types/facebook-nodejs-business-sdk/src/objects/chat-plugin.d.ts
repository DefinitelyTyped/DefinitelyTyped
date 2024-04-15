import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * ChatPlugin
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ChatPlugin extends AbstractCrudObject {
    static get Fields(): Readonly<{
        alignment: "alignment";
        desktop_bottom_spacing: "desktop_bottom_spacing";
        desktop_side_spacing: "desktop_side_spacing";
        entry_point_icon: "entry_point_icon";
        entry_point_label: "entry_point_label";
        greeting_dialog_display: "greeting_dialog_display";
        guest_chat_mode: "guest_chat_mode";
        mobile_bottom_spacing: "mobile_bottom_spacing";
        mobile_chat_display: "mobile_chat_display";
        mobile_side_spacing: "mobile_side_spacing";
        theme_color: "theme_color";
        welcome_screen_greeting: "welcome_screen_greeting";
    }>;
}
