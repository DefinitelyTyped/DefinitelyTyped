//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.pkcs11
 *
 * PKCS#11 module management API
 * Permissions: "pkcs11"
 */
export namespace Pkcs11 {
    interface Token {
        /**
         * Name of the token.
         */
        name: string;

        /**
         * Name of the token's manufacturer.
         */
        manufacturer: string;

        /**
         * Hardware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".
         */
        HWVersion: string;

        /**
         * Firmware version, as a PKCS #11 version number (two 32-bit integers separated with a dot, like "1.0".
         */
        FWVersion: string;

        /**
         * Serial number, whose format is defined by the token specification.
         */
        serial: string;

        /**
         * true if the token is logged on already, false otherwise.
         */
        isLoggedIn: boolean;
    }

    interface ModuleSlot {
        /**
         * The name of the slot.
         */
        name: string;

        /**
         * The token of the slot.
         */
        token: Token | null;
    }

    interface Static {
        /**
         * checks whether a PKCS#11 module, given by name, is installed
         *
         * @param name
         */
        isModuleInstalled(name: string): Promise<boolean>;

        /**
         * Install a PKCS#11 module with a given name
         *
         * @param name
         * @param flags Optional.
         */
        installModule(name: string, flags?: number): Promise<void>;

        /**
         * Remove an installed PKCS#11 module from firefox
         *
         * @param name
         */
        uninstallModule(name: string): Promise<void>;

        /**
         * Enumerate a module's slots, each with their name and whether a token is present
         *
         * @param name
         */
        getModuleSlots(name: string): Promise<undefined>;
    }
}
