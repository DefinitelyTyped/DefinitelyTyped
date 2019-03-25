// Type definitions for node-cron 2.0
// Project: https://github.com/node-cron/node-cron, https://github.com/merencia/node-cron
// Definitions by: morsic <https://github.com/maximelkin>,
//                 burtek <https://github.com/burtek>,
//                 Richard Honor <https://github.com/RMHonor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Timezone = 'Etc/GMT+12' | 'Pacific/Pago_Pago' | 'Pacific/Midway' | 'Pacific/Honolulu' | 'America/Juneau' | 'America/Los_Angeles' | 'America/Tijuana' | 'America/Phoenix' |
                       'America/Chihuahua' | 'America/Mazatlan' | 'America/Denver' | 'America/Guatemala' | 'America/Chicago' | 'America/Mexico_City' | 'America/Monterrey' | 'America/Regina' |
                       'America/Bogota' | 'America/New_York' | 'America/Indiana/Indianapolis' | 'America/Lima' | 'America/Halifax' | 'America/Caracas' | 'America/Guyana' | 'America/La_Paz' |
                       'America/Puerto_Rico' | 'America/Santiago' | 'America/St_Johns' | 'America/Sao_Paulo' | 'America/Argentina/Buenos_Aires' | 'America/Godthab' | 'America/Montevideo' |
                       'Atlantic/South_Georgia' | 'Atlantic/Azores' | 'Atlantic/Cape_Verde' | 'Africa/Casablanca' | 'Europe/London' | 'Europe/Lisbon' | 'Africa/Monrovia' | 'Etc/UTC' |
                       'Europe/Amsterdam' | 'Europe/Belgrade' | 'Europe/Berlin' | 'Europe/Zurich' | 'Europe/Bratislava' | 'Europe/Brussels' | 'Europe/Budapest' | 'Europe/Copenhagen' |
                       'Europe/Dublin' | 'Europe/Ljubljana' | 'Europe/Madrid' | 'Europe/Paris' | 'Europe/Prague' | 'Europe/Rome' | 'Europe/Sarajevo' | 'Europe/Skopje' | 'Europe/Stockholm' |
                       'Europe/Vienna' | 'Europe/Warsaw' | 'Africa/Algiers' | 'Europe/Zagreb' | 'Europe/Athens' | 'Europe/Bucharest' | 'Africa/Cairo' | 'Africa/Harare' | 'Europe/Helsinki' |
                       'Asia/Jerusalem' | 'Europe/Kaliningrad' | 'Europe/Kiev' | 'Africa/Johannesburg' | 'Europe/Riga' | 'Europe/Sofia' | 'Europe/Tallinn' | 'Europe/Vilnius' | 'Asia/Baghdad' |
                       'Europe/Istanbul' | 'Asia/Kuwait' | 'Europe/Minsk' | 'Europe/Moscow' | 'Africa/Nairobi' | 'Asia/Riyadh' | 'Europe/Volgograd' | 'Asia/Tehran' | 'Asia/Muscat' | 'Asia/Baku' |
                       'Europe/Samara' | 'Asia/Tbilisi' | 'Asia/Yerevan' | 'Asia/Kabul' | 'Asia/Yekaterinburg' | 'Asia/Karachi' | 'Asia/Tashkent' | 'Asia/Kolkata' | 'Asia/Colombo' |
                       'Asia/Kathmandu' | 'Asia/Almaty' | 'Asia/Dhaka' | 'Asia/Urumqi' | 'Asia/Rangoon' | 'Asia/Bangkok' | 'Asia/Jakarta' | 'Asia/Krasnoyarsk' | 'Asia/Novosibirsk' |
                       'Asia/Shanghai' | 'Asia/Chongqing' | 'Asia/Hong_Kong' | 'Asia/Irkutsk' | 'Asia/Kuala_Lumpur' | 'Australia/Perth' | 'Asia/Singapore' | 'Asia/Taipei' | 'Asia/Ulaanbaatar' |
                       'Asia/Tokyo' | 'Asia/Seoul' | 'Asia/Yakutsk' | 'Australia/Adelaide' | 'Australia/Darwin' | 'Australia/Brisbane' | 'Australia/Melbourne' | 'Pacific/Guam' | 'Australia/Hobart' |
                       'Pacific/Port_Moresby' | 'Australia/Sydney' | 'Asia/Vladivostok' | 'Asia/Magadan' | 'Pacific/Noumea' | 'Pacific/Guadalcanal' | 'Asia/Srednekolymsk' | 'Pacific/Auckland' |
                       'Pacific/Fiji' | 'Asia/Kamchatka' | 'Pacific/Majuro' | 'Pacific/Chatham' | 'Pacific/Tongatapu' | 'Pacific/Apia' | 'Pacific/Fakaofo';

export function schedule(cronExpression: string, func: () => void, options?: ScheduleOptions): ScheduledTask;

export function validate(cronExpression: string): boolean;

export interface ScheduledTask {
    start: () => this;
    stop: () => this;
    destroy: () => void;
}

export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean;
    /**
     * The timezone that is used for job scheduling
     */
    timezone?: Timezone;
}
