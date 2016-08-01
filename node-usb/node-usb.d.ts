// Type definitions for node-usb 1.1.2
// Project: https://github.com/nonolith/node-usb
// Definitions by: Eric Brody <https://github.com/underscorebrody>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "usb" {

  class Device {
    public timeout: number;
    public busNumber: number;
    public deviceAddress: number;
    public portNumbers: Array<number>;
    public deviceDescriptor: DeviceDescriptor;
    public configDescriptor: ConfigDescriptor;
    public interfaces: Array<Interface>;

    __open(): void;
    __claimInterface(addr: number): void;

    open(defaultConfig?: boolean): void;
    close(): void;
    interface(addr: number): Interface;
    controlTransfer(bmRequestType: number, bRequest: number, wValue: number, wIndex: number, data_or_length: any, callback: (error?: string, buf?: Buffer) => void): Device;
    getStringDescriptor(desc_index: number, callback: (error?: string, buf?: Buffer) => void): void;
    setConfiguration(desired: number, cb: (err?: string) => void): void;
    reset(callback: (err?: string) => void): void;
  }

  class DeviceDescriptor {
    public bLength: number;
    public bDescriptorType: number;
    public bcdUSB: number;
    public bDeviceClass: number;
    public bDeviceSubClass: number;
    public bDeviceProtocol: number;
    public bMaxPacketSize: number;
    public idVendor: number;
    public idProduct: number;
    public bcdDevice: number;
    public iManufacturer: number;
    public iProduct: number;
    public iSerialNumber: number;
    public bNumConfigurations: number;
  }

  class ConfigDescriptor {
    public bLength: number;
    public bDescriptorType: number;
    public wTotalLength: number;
    public bNumInterfaces: number;
    public bConfigurationValue: number;
    public iConfiguration: number;
    public bmAttributes: number;
    public bMaxPower: number;
    public extra: Buffer;
  }

  class Interface {
    public descriptor: InterfaceDescriptor;
    public endpoints: Array<IEndpoint>;
    constructor(device: Device, id: number);
    claim(): void;
    release(closeEndpoints?: (err?: string) => void, cb?: (err?: string) => void): void;
    isKernelDriverActive(): boolean;
    detachKernelDriver(): number;
    attachKernelDriver(): number;
    setAltSetting(altSetting: number, cb: (err?: string) => void): void;
    endpoint(addr: number): IEndpoint;
  }

  class InterfaceDescriptor {
    public bLength: number;
    public bDescriptorType: number;
    public bInterfaceNumber: number;
    public bAlternateSetting: number;
    public bNumEndpoints: number;
    public bInterfaceClass: number;
    public bInterfaceSubClass: number;
    public bInterfaceProtocol: number;
    public iInterface: number;
    public extra: Buffer;
  }

  interface IEndpoint {
    direction: string;
    transferType: number;
    timeout: number;
    descriptor: EndpointDescriptor;
  }

  class InEndpoint implements IEndpoint {
    public direction: string;
    public transferType: number;
    public timeout: number;
    public descriptor: EndpointDescriptor;
    constructor(device: Device, descriptor: EndpointDescriptor);
    transfer(length: number, callback: (error: string, data: Buffer) => void): InEndpoint;
    startPoll(nTransfers: number, transferSize: number): void;
    stopPoll(cb: () => void): void;
  }

  class OutEndpoint implements IEndpoint {
    public direction: string;
    public transferType: number;
    public timeout: number;
    public descriptor: EndpointDescriptor;
    constructor(device: Device, descriptor: EndpointDescriptor);
    transfer(buffer: Buffer, cb: (err?: string) => void): OutEndpoint;
    transferWithZLP(buf: Buffer, cb: (err?: string) => void): void;
  }

  class EndpointDescriptor {
    public bLength: number;
    public bDescriptorType: number;
    public bEndpointAddress: number;
    public bmAttributes: number;
    public wMaxPacketSize: number;
    public bInterval: number;
    public bRefresh: number;
    public bSynchAddress: number;
  }

  function findByIds(vid: number, pid: number): Device;
  function on(event: string, callback: (device: Device) => void): void;
  function getDeviceList(): Array<Device>;
  function setDebugLevel(level: number): void;

  const LIBUSB_CLASS_PER_INTERFACE: number;
  const LIBUSB_CLASS_AUDIO: number;
  const LIBUSB_CLASS_COMM: number;
  const LIBUSB_CLASS_HID: number;
  const LIBUSB_CLASS_PRINTER: number;
  const LIBUSB_CLASS_PTP: number;
  const LIBUSB_CLASS_MASS_STORAGE: number;
  const LIBUSB_CLASS_HUB: number;
  const LIBUSB_CLASS_DATA: number;
  const LIBUSB_CLASS_WIRELESS: number;
  const LIBUSB_CLASS_APPLICATION: number;
  const LIBUSB_CLASS_VENDOR_SPEC: number;
  // libusb_standard_request
  const LIBUSB_REQUEST_GET_STATUS: number;
  const LIBUSB_REQUEST_CLEAR_FEATURE: number;
  const LIBUSB_REQUEST_SET_FEATURE: number;
  const LIBUSB_REQUEST_SET_ADDRESS: number;
  const LIBUSB_REQUEST_GET_DESCRIPTOR: number;
  const LIBUSB_REQUEST_SET_DESCRIPTOR: number;
  const LIBUSB_REQUEST_GET_CONFIGURATION: number;
  const LIBUSB_REQUEST_SET_CONFIGURATION: number;
  const LIBUSB_REQUEST_GET_INTERFACE: number;
  const LIBUSB_REQUEST_SET_INTERFACE: number;
  const LIBUSB_REQUEST_SYNCH_FRAME: number;
  // libusb_descriptor_type
  const LIBUSB_DT_DEVICE: number;
  const LIBUSB_DT_CONFIG: number;
  const LIBUSB_DT_STRING: number;
  const LIBUSB_DT_INTERFACE: number;
  const LIBUSB_DT_ENDPOINT: number;
  const LIBUSB_DT_HID: number;
  const LIBUSB_DT_REPORT: number;
  const LIBUSB_DT_PHYSICAL: number;
  const LIBUSB_DT_HUB: number;
  // libusb_endpoint_direction
  const LIBUSB_ENDPOINT_IN: number;
  const LIBUSB_ENDPOINT_OUT: number;
  // libusb_transfer_type
  const LIBUSB_TRANSFER_TYPE_CONTROL: number;
  const LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: number;
  const LIBUSB_TRANSFER_TYPE_BULK: number;
  const LIBUSB_TRANSFER_TYPE_INTERRUPT: number;
  // libusb_iso_sync_type
  const LIBUSB_ISO_SYNC_TYPE_NONE: number;
  const LIBUSB_ISO_SYNC_TYPE_ASYNC: number;
  const LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: number;
  const LIBUSB_ISO_SYNC_TYPE_SYNC: number;
  // libusb_iso_usage_type
  const LIBUSB_ISO_USAGE_TYPE_DATA: number;
  const LIBUSB_ISO_USAGE_TYPE_FEEDBACK: number;
  const LIBUSB_ISO_USAGE_TYPE_IMPLICIT: number;
  // libusb_transfer_status
  const LIBUSB_TRANSFER_COMPLETED: number;
  const LIBUSB_TRANSFER_ERROR: number;
  const LIBUSB_TRANSFER_TIMED_OUT: number;
  const LIBUSB_TRANSFER_CANCELLED: number;
  const LIBUSB_TRANSFER_STALL: number;
  const LIBUSB_TRANSFER_NO_DEVICE: number;
  const LIBUSB_TRANSFER_OVERFLOW: number;
  // libusb_transfer_flags
  const LIBUSB_TRANSFER_SHORT_NOT_OK: number;
  const LIBUSB_TRANSFER_FREE_BUFFER: number;
  const LIBUSB_TRANSFER_FREE_TRANSFER: number;
  // libusb_request_type
  const LIBUSB_REQUEST_TYPE_STANDARD: number;
  const LIBUSB_REQUEST_TYPE_CLASS: number;
  const LIBUSB_REQUEST_TYPE_VENDOR: number;
  const LIBUSB_REQUEST_TYPE_RESERVED: number;
  // libusb_request_recipient
  const LIBUSB_RECIPIENT_DEVICE: number;
  const LIBUSB_RECIPIENT_INTERFACE: number;
  const LIBUSB_RECIPIENT_ENDPOINT: number;
  const LIBUSB_RECIPIENT_OTHER: number;

  const LIBUSB_CONTROL_SETUP_SIZE: number;

  // libusb_error
  // Input/output error
  const LIBUSB_ERROR_IO: number;
  // Invalid parameter
  const LIBUSB_ERROR_INVALID_PARAM: number;
  // Access denied (insufficient permissions)
  const LIBUSB_ERROR_ACCESS: number;
  // No such device (it may have been disconnected)
  const LIBUSB_ERROR_NO_DEVICE: number;
  // Entity not found
  const LIBUSB_ERROR_NOT_FOUND: number;
  // Resource busy
  const LIBUSB_ERROR_BUSY: number;
  // Operation timed out
  const LIBUSB_ERROR_TIMEOUT: number;
  // Overflow
  const LIBUSB_ERROR_OVERFLOW: number;
  // Pipe error
  const LIBUSB_ERROR_PIPE: number;
  // System call interrupted (perhaps due to signal)
  const LIBUSB_ERROR_INTERRUPTED: number;
  // Insufficient memory
  const LIBUSB_ERROR_NO_MEM: number;
  // Operation not supported or unimplemented on this platform
  const LIBUSB_ERROR_NOT_SUPPORTED: number;
  // Other error
  const LIBUSB_ERROR_OTHER: number;
}
