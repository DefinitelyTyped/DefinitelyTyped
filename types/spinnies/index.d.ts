// Attribution note:
// These type declarations are modified from type declarations in
// jcarpanelli/spinnies#25 by Adam Jarret <https://github.com/adamjarret>.

export as namespace Spinnies;
export = Spinnies;

declare namespace Spinnies {
    const dots: Spinner;
    const dashes: Spinner;

    type Color =
        | "black"
        | "red"
        | "green"
        | "yellow"
        | "blue"
        | "magenta"
        | "cyan"
        | "white"
        | "gray"
        | "redBright"
        | "greenBright"
        | "yellowBright"
        | "blueBright"
        | "magentaBright"
        | "cyanBright"
        | "whiteBright";

    type StopAllStatus = "succeed" | "fail" | "stopped";
    type SpinnerStatus = StopAllStatus | "spinning" | "non-spinnable";

    interface Spinner {
        interval: number;
        frames: string[];
    }

    /**
     * The configuration for a given spinner
     */
    interface SpinnerOptions {
        /**
         * Text to show in the spinner. If none is provided, the name field will be shown.
         */
        text: string;

        /**
         * Indent the spinner with the given number of spaces.
         */
        indent: number;

        /**
         * Initial status of the spinner.
         */
        status: SpinnerStatus;

        /**
         * The color of the text that accompanies the spinner. If not specified, the console's default foreground color is used.
         */
        color?: Color;

        /**
         * The color for the text on success. Default value is `"green"`
         */
        succeedColor: Color;

        /**
         * The color for the text on failure. Default value is `"red"`.
         */
        failColor: Color;

        /**
         * The color of the spinner, when active. The default value is `"greenBright"`
         */
        spinnerColor: Color;
    }

    /**
     * Contains top-level configuration for the Spinnies class. Also allows the
     * caller to override default values used in `SpinnerOptions`.
     */
    interface Options {
        /**
         * The color of the text that accompanies the spinner. If not specified, the console's default foreground color is used.
         */
        color?: Color;

        /**
         * The color for the text on success. Default value is `"green"`
         */
        succeedColor: Color;

        /**
         * The color for the text on failure. Default value is `"red"`.
         */
        failColor: Color;

        /**
         * The color of the spinner, when active. The default value is `"greenBright"`
         */
        spinnerColor: Color;

        /**
         * The symbol to be used in place of the spinner on success. The default value is ✓.
         */
        succeedPrefix: string;

        /**
         * The symbol to be used in place of the spinner on failure. The default value is ✖.
         */
        failPrefix: string;

        /**
         * Disable spinner animations (will still print raw messages if `true`). The default value is `false`.
         */
        disableSpins: boolean;

        /**
         * Defines the animated spinner to be used while each spinner is active/spinning.
         */
        spinner: Spinner;
    }
}

/**
 * A class that manages multiple CLI spinners.
 */
declare class Spinnies {
    /**
     * The current configuration of this Spinnies object.
     */
    options: Spinnies.Options;

    constructor(options?: Partial<Spinnies.Options>);

    /**
     * Add a new spinner with the given name.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    add: (name: string, options?: Partial<Spinnies.SpinnerOptions>) => Spinnies.SpinnerOptions;

    /**
     * Get spinner by name.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    pick: (name: string) => Spinnies.SpinnerOptions;

    /**
     * Remove spinner with name.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    remove: (name: string) => Spinnies.SpinnerOptions;

    /**
     * Updates the spinner with name name with the provided options. Retains
     * the value of options that aren't specified.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    update: (name: string, options?: Partial<Spinnies.SpinnerOptions>) => Spinnies.SpinnerOptions;

    /**
     * Sets the specified spinner status as succeed.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    succeed: (name: string, options?: Partial<Spinnies.SpinnerOptions>) => Spinnies.SpinnerOptions;

    /**
     * Sets the specified spinner status as fail.
     *
     * @returns full `SpinnerOptions` object for the given spinner, with
     * defaults applied
     */
    fail: (name: string, options?: Partial<Spinnies.SpinnerOptions>) => Spinnies.SpinnerOptions;

    /**
     * Stops the spinners and sets the non-succeeded and non-failed ones to the provided status.
     *
     * @returns an object that maps spinner names to final `SpinnerOptions` objects for each spinner, with
     * defaults applied
     */
    stopAll: (status?: Spinnies.StopAllStatus) => { [name: string]: Spinnies.SpinnerOptions };

    /**
     * @returns false if all spinners have succeeded, failed or have been stopped
     */
    hasActiveSpinners: () => boolean;

    /**
     * Disables the spinner loop after all spinners have deactivated. Must be
     * called after calling `remove` on the final spinner, otherwise the
     * spinner loop will prevent the process from exiting.
     */
    checkIfActiveSpinners: () => void;
}
