declare const lockManagementMethods: LockMgmt;
export default lockManagementMethods;

interface LockMgmt {
    /**
     * Check whether the device supports lock settings management with `locksettings`
     * command line tool. This tool has been added to Android toolset since  API 27 Oreo
     *
     * @return True if the management is supported. The result is cached per ADB instance
     */
    isLockManagementSupported(): Promise<boolean>;

    /**
     * Check whether the given credential is matches to the currently set one.
     *
     * @param credential [null] The credential value. It could be either
     * pin, password or a pattern. A pattern is specified by a non-separated list
     * of numbers that index the cell on the pattern in a 1-based manner in left
     * to right and top to bottom order, i.e. the top-left cell is indexed with 1,
     * whereas the bottom-right cell is indexed with 9. Example: 1234.
     * null/empty value assumes the device has no lock currently set.
     * @return True if the given credential matches to the device's one
     * @throws If the verification faces an unexpected error
     */
    verifyLockCredential(credential?: string | null): Promise<boolean>;

    /**
     * Clears current lock credentials. Usually it takes several seconds for a device to
     * sync the credential state after this method returns.
     *
     * @param credential [null] The credential value. It could be either
     * pin, password or a pattern. A pattern is specified by a non-separated list
     * of numbers that index the cell on the pattern in a 1-based manner in left
     * to right and top to bottom order, i.e. the top-left cell is indexed with 1,
     * whereas the bottom-right cell is indexed with 9. Example: 1234.
     * null/empty value assumes the device has no lock currently set.
     * @throws If operation faces an unexpected error
     */
    clearLockCredential(credential?: string | null): Promise<void>;

    /**
     * Checks whether the device is locked with a credential (either pin or a password
     * or a pattern).
     *
     * @returns `true` if the device is locked
     * @throws If operation faces an unexpected error
     */
    isLockEnabled(): Promise<boolean>;

    /**
     * Sets the device lock.
     *
     * @param credentialType One of: password, pin, pattern.
     * @param credential A non-empty credential value to be set.
     * Make sure your new credential matches to the actual system security requirements,
     * e.g. a minimum password length. A pattern is specified by a non-separated list
     * of numbers that index the cell on the pattern in a 1-based manner in left
     * to right and top to bottom order, i.e. the top-left cell is indexed with 1,
     * whereas the bottom-right cell is indexed with 9. Example: 1234.
     * @param oldCredential [null] An old credential string.
     * It is only required to be set in case you need to change the current
     * credential rather than to set a new one. Setting it to a wrong value will
     * make this method to fail and throw an exception.
     * @throws If there was a failure while verifying input arguments or setting
     * the credential
     */
    setLockCredential(
        credentialType: 'password' | 'pin' | 'pattern',
        credential: string,
        oldcredential?: string | null,
    ): Promise<void>;

    /**
     * Retrieve the screen lock state of the device under test.
     *
     * @return True if the device is locked.
     */
    isScreenLocked(): Promise<boolean>;

    /**
     * Dismisses keyguard overlay.
     */
    dismissKeyguard(): Promise<void>;

    /**
     * Presses the corresponding key combination to make sure the device's screen
     * is not turned off and is locked if the latter is enabled.
     */
    cycleWakeUp(): Promise<void>;
}
