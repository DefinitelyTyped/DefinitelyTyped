/**
 * @see https://wicg.github.io/WebApiDevice/device_attributes
 */

interface Navigator {
  readonly managed: NavigatorManagedData;
}

/**
 * Provides access to device attributes managed by an external device
 * administrator on managed devices.
 * Requires a secure context and is exposed to the Window context.
 */
interface NavigatorManagedData extends EventTarget {
  /**
   * Retrieves the inventory management system-defined value which uniquely
   * identifies a device within an organization.
   * @return A Promise that resolves to a string representing the directory ID,
   *   or null if not provided by the management infrastructure.
   * @throws {NotAllowedError} If the API is not called by a managed web
   *   application with permission to access device attributes.
   */
  getDirectoryId(): Promise<string | null>;
  /**
   * Retrieves the administrator-defined value used as the device hostname during
   * DHCP requests.
   * @return A Promise that resolves to a string representing the device
   *   hostname, or null if not set.
   * @throws {NotAllowedError} If the API is not called by a managed web
   *   application with permission to access device attributes.
   */
  getHostname(): Promise<string | null>;
  /**
   * Retrieves the manufacturer-defined value which uniquely identifies a device
   * among those produced by that manufacturer.
   * @return A Promise that resolves to a string representing the device serial
   *   number, or null if not available.
   * @throws {NotAllowedError} If the API is not called by a managed web
   *   application with permission to access device attributes.
   */
  getSerialNumber(): Promise<string | null>;
  /**
   * Retrieves the administrator-defined value which uniquely identifies a device
   * within an organization.
   * @return A Promise that resolves to a string representing the annotated asset
   *   ID, or null if not set.
   * @throws {NotAllowedError} If the API is not called by a managed web
   *   application with permission to access device attributes.
   * @example
   * ```typescript
   * function ReportSalesData() {
   *   navigator.managed.getAnnotatedAssetId().then(reportCallback);
   * }
   * ```
   */
  getAnnotatedAssetId(): Promise<string | null>;
  /**
   * Retrieves the administrator-defined value which uniquely identifies a
   * location within an organization.
   * @return A Promise that resolves to a string representing the annotated
   *   location, or null/undefined if not set.
   * @throws {NotAllowedError} If the API is not called by a managed web
   *   application with permission to access device attributes.
   * @example
   * ```typescript
   * function successCallback(location) {
   *   const tariff = backend.requestTariff(location);
   *   console.log(tariff);
   * }
   *
   * function failureCallback(error) {
   *   backend.reportFailure(error);
   *   console.error(error.message);
   * }
   *
   * function PrepareTariff() {
   *   navigator.managed.getAnnotatedLocation()
   *     .then(successCallback, failureCallback);
   * }
   * ```
   */
  getAnnotatedLocation(): Promise<string | null>;
}

