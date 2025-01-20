/**
 * SpinnerService
 * see https://github.com/urish/angular-spinner
 */
declare interface ISpinnerService {
    /**
     * Start selected spinner
     *
     * @param spinner key
     */
    spin(key: string): void;

    /**
     * Stop selected spinner
     *
     * @param spinner key
     */
    stop(key: string): void;
}
