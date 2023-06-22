import { PasswordProtectOptions } from './password-protect-options';

/**
 * Document Permissions for {@link ProtectPDFOperation}
 */
export class Permissions {
    /**
     * Creates a new {@link Permissions} instance.
     *
     * @return a {@link Permissions} instance
     */
    static createNew(): Permissions;
    _permissionsSet: Set<any>;
    /**
     * Returns the intended set of document permissions values.
     */
    getValues(): Set<any>;
    /**
     * Adds a document [Permission]{@link PasswordProtectOptions.Permission} in the permissions set.
     */
    addPermission(permission: any): void;
    validate(permission: any): void;
}
