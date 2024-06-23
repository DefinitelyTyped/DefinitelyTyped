/**
 * Maps locales to Facebook locales.
 *
 * @example
 *
 * import { bestFacebookLocaleFor } from 'facebook-locales';
 *
 * bestFacebookLocaleFor('en_US'); //-> 'en_US'
 * bestFacebookLocaleFor('fr_FR'); //-> 'fr_FR'
 * bestFacebookLocaleFor('es_AR'); //-> 'es_LA'
 * bestFacebookLocaleFor('ar_EG'); //-> 'ar_AR'
 */
export function bestFacebookLocaleFor(locale: string): string;
