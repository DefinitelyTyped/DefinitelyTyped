import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * MessengerCallSettings
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class MessengerCallSettings extends AbstractCrudObject {
    static get Fields(): Readonly<{
        audio_enabled: "audio_enabled";
        call_hours: "call_hours";
        call_routing: "call_routing";
        icon_enabled: "icon_enabled";
    }>;
}
