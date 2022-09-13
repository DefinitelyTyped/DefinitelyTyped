import { packageid, Callback } from '../index';

export interface Help {
    /**
     * Restore a previously removed steam package from your steam account.
     * @param packageID
     * @param callback
     */
    restorePackage(packageID: packageid, callback: Callback): void;

    /**
     * Removes a license from your account. The help site claims this is "permanent", but it can be undone via a call to restorePackage.
     * @param packageID
     * @param callback
     */
    removePackage(packageID: packageid, callback: Callback): void;
}
