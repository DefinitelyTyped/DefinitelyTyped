/// <reference types="node" />

export {};

declare const OPAQUE_ID: unique symbol;

export interface OpaqueDevice {
    [OPAQUE_ID]: true;
}

export interface DeviceDescriptor {
    vendor_id: number;
    product_id: number;
    serial_number: string;
    release_number: number;
    manufacturer_string: string;
    product_string: string;
    usage_page: number;
    usage: number;
    interface_number: number;
}

/**
 * Enumerate the HID Devices.
 *
 * This function returns an array of all the HID devices attached to the
 * system which match `vendor_id` and `product_id`.
 *
 * If `vendor_id` is set to `0`, `null` or left out then any vendor matches.
 * If `product_id` is set to `0`, `null` or left out then any product matches.
 * If `vendor_id` and `product_id` are both set to `0`, `null` then all HID
 * devices will be returned:
 */
export function enumerate(vendor_id?: number, product_id?: number): DeviceDescriptor[];

/**
 * Open a HID device using a Vendor ID (VID), Product ID (PID) and optionally
 * a serial number.
 *
 * If `serial_number` is `null` or left out, the first device with the
 * specified VID and PID is opened.
 *
 * This function returns an opaque external reference to a device, or throws
 * an error on failure. The device is automatically closed on garbage
 * collection.
 */
export function open(vendor_id: number, product_id: number, serial_number?: string): OpaqueDevice;

/**
 * Open a HID device by its path name.
 *
 * The path name be determined by calling `hid.enumerate()`, or a platform-
 * specific path name can be used (eg: `/dev/hidraw0` on Linux).
 *
 * This function returns an opaque external reference to a device, or throws
 * an error on failure. The device is automatically closed on garbage
 * collection.
 */
export function open_path(path: string): OpaqueDevice;

/**
 * Write an Output report to a HID device.
 *
 * The first byte of `data` must contain the Report ID. For devices which only
 * support a single report, this must be set to `0x0`. The remaining bytes
 * contain the report data. Since the Report ID is mandatory, calls to
 * `hid.write()` will always contain one more bytes than the report contains.
 * For example, if a hid report is 16 bytes long, 17 bytes must be passed to
 * `hid.write()`, the Report ID (or `0x0`, for devices with a single report),
 * followed by the report data (16 bytes). In this example, the length passed
 * in would be 17.
 *
 * `hid.write()` will send the data on the first OUT endpoint, if one exists.
 * If it does not, it will send the data through the Control Endpoint
 * (Endpoint 0).
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read from.
 *
 * This function returns the actual number of bytes written, or throws an error.
 */
export function write(device: OpaqueDevice, data: Buffer): number;

/**
 * Read an Input report from a HID device with timeout.
 *
 * Input reports are returned to the host through the INTERRUPT IN endpoint.
 * The first byte will contain the Report number if the device uses numbered
 * reports.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 * `milliseconds` timeout in milliseconds or `-1` for blocking wait.
 *
 * This function returns the actual number of bytes read or throws an error.
 * If no packet was available to be read within the timeout period, this
 * function returns `0`.
 */
export function read_timeout(device: OpaqueDevice, data: Buffer, milliseconds: number): number;

/**
 * Read an Input report from a HID device.
 *
 * Input reports are returned to the host through the INTERRUPT IN endpoint.
 * The first byte will contain the Report number if the device uses numbered
 * reports.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 *
 * This function returns the actual number of bytes read or throws an error.
 * If no packet was available to be read and the handle is in non-blocking
 * mode, this function returns `0`.
 */
export function read(device: OpaqueDevice, data: Buffer): number;

/**
 * Read an Input report from a HID device with timeout asynchronously.
 *
 * Input reports are returned to the host through the INTERRUPT IN endpoint.
 * The first byte will contain the Report number if the device uses numbered
 * reports.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 * `milliseconds` timeout in milliseconds or `-1` for blocking wait.
 * `cb` must be a function taking `err` and `bytes` as arguments.
 *
 * This function calls `cb` with the actual number of bytes read or calls it
 * with an error. If no packet was available to be read within the timeout
 * period, this function calls `cb(null, 0)`.
 */
export function read_timeout_async(
    device: OpaqueDevice,
    data: Buffer,
    milliseconds: number,
    cb: (error: Error, bytes: number) => void,
): void;

/**
 * Read an Input report from a HID device asynchronously.
 *
 * Input reports are returned to the host through the INTERRUPT IN endpoint.
 * The first byte will contain the Report number if the device uses numbered
 * reports.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 * `cb` must be a function taking `err` and `bytes` as arguments.
 *
 * This function calls `cb` with the actual number of bytes read or calls it
 * with an error. If no packet was available to be read and the handle is in
 * non-blocking mode, this function calls `cb(null, 0)`.
 */
export function read_async(device: OpaqueDevice, data: Buffer, cb: (error: Error, bytes: number) => void): void;

/**
 * Set the device handle to be non-blocking.
 *
 * In non-blocking mode calls to `hid.read()` will return immediately with a
 * value of `0` if there is no data to be read. In blocking mode, `hid.read()`
 * will wait (block) until there is data to read before returning.
 *
 * Nonblocking can be turned on and off at any time.
 *
 * `device` must be an opaque external reference to a device.
 * `nonblock` enable or not the nonblocking reads
 *    - 1 to enable nonblocking
 *    - 0 to disable nonblocking.
 *
 * This function returns `0` on success or throws an error.
 */
export function set_nonblocking(device: OpaqueDevice, nonblock: 0 | 1): 0;

/**
 * Send a Feature report to the device.
 *
 * Feature reports are sent over the Control endpoint as a Set_Report
 * transfer. The first byte of `data` must contain the Report ID. For devices
 * which only support a single report, this must be set to `0x0`. The
 * remaining bytes contain the report data. Since the Report ID is mandatory,
 * calls to `hid.send_feature_report()` will always contain one more byte than
 * the report contains. For example, if a hid report is 16 bytes long, 17
 * bytes must be passed to `hid.send_feature_report()`: the Report ID
 * (or `0x0`, for devices which do not use numbered reports), followed by the
 * report data (16 bytes). In this example, the length passed in would be 17.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read from.
 *
 * This function returns the actual number of bytes written or throws an error.
 */
export function send_feature_report(device: OpaqueDevice, data: Buffer): number;

/**
 * Get a feature report from a HID device.
 *
 * Set the first byte of `data` to the Report ID of the report to be read.
 * Make sure to allow space for this extra byte in `data`. Upon return, the
 * first byte will still contain the Report ID, and the report data will start
 * in `data[1]`.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 *
 * This function returns the number of bytes read plus one for the report ID
 * (which is still in the first byte), or throws an error.
 */
export function get_feature_report(device: OpaqueDevice, data: Buffer): number;

/**
 * Get a feature report from a HID device asynchronously.
 *
 * Set the first byte of `data` to the Report ID of the report to be read.
 * Make sure to allow space for this extra byte in `data`. Upon return, the
 * first byte will still contain the Report ID, and the report data will start
 * in `data[1]`.
 *
 * `device` must be an opaque external reference to a device.
 * `data` must be a `Buffer` that data is read into.
 * `cb` must be a function taking `err` and `bytes` as arguments.
 *
 * This function calls `cb` the number of bytes read plus one for the report
 * ID (which is still in the first byte), or calls it with an error.
 */
export function get_feature_report_async(
    device: OpaqueDevice,
    data: Buffer,
    cb: (error: Error, data: number) => void,
): void;
