// @TODO:

/**
 * A generic application for configuring permissions for various Entity types
 *
 * @param entity	The Entity instance for which permissions are being configured.
 * @param options	Application options.
 */
declare class PermissionControl extends BaseEntitySheet {
    /**
     * Prepare permissions data as an array of users and levels for which to configure the entity
     */
    getData(): BaseEntitySheetData;
}
