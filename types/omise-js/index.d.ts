/**
 * Third-party Omise.js TypeScript's typings support.
 */
import Omise from './lib/omise';
import OmiseCard from './lib/omiseCard';
declare global {
    interface Window {
        /**
         * You can use the following methods on `OmiseCard` to customize the appearance and behavior of your form.
         *
         * @see https://www.omise.co/omise-js#omisecard-methods
         */
        Omise: Omise;
        /**
         * You can use the following methods on `Omise` to create a one-time-use token or source.
         *
         * @see https://www.omise.co/omise-js#omise-methods
         */
        OmiseCard: OmiseCard;
    }
}
export { Omise, OmiseCard };
