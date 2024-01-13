/**
 * @example
 * import { date } from '@xmpp/time';
 *
 * date(); // '2016-11-18'
 * date("05 October 2011 14:48 UTC"); // '2011-10-05'
 * date(new Date("05 October 2011 14:48 UTC")); // '2011-10-05'
 */
export function date(date?: string | Date): string;
/**
 * @example
 * import { time } from '@xmpp/time';
 *
 * time(); // '20:45:30Z'
 * time("05 October 2011 14:48 UTC"); // '14:48:00Z'
 * time(new Date("05 October 2011 14:48 UTC")); // '14:48:00Z'
 */
export function time(date?: string | Date): string;
/**
 * @example
 * import { datetime } from '@xmpp/time';
 *
 * datetime(); // '2016-11-18T20:45:53Z'
 * datetime("05 October 2011 14:48 UTC"); // '2011-10-05T14:48:00Z'
 * datetime(new Date("05 October 2011 14:48 UTC")); // '2011-10-05T14:48:00Z'
 */
export function datetime(date?: string | Date): string;
/**
 * @example
 * import { offset } from '@xmpp/time';
 *
 * offset(); // '-1:00'
 * offset("05 October 2011 14:48 UTC"); // '-1:00'
 * offset(new Date("05 October 2011 14:48 UTC")); // '-1:00'
 */
export function offset(date?: string | Date): string;
