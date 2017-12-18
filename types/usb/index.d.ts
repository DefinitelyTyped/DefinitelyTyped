// Type definitions for node-usb 1.1
// Project: https://github.com/tessel/node-usb
// Definitions by: Eric Brody <https://github.com/underscorebrody>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export class Device {
  timeout: number;
  busNumber: number;
  deviceAddress: number;
  portNumbers: number[];
  deviceDescriptor: DeviceDescriptor;
  configDescriptor: ConfigDescriptor;
  interfaces: Interface[];

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

export class DeviceDescriptor {
  bLength: number;
  bDescriptorType: number;
  bcdUSB: number;
  bDeviceClass: number;
  bDeviceSubClass: number;
  bDeviceProtocol: number;
  bMaxPacketSize: number;
  idVendor: number;
  idProduct: number;
  bcdDevice: number;
  iManufacturer: number;
  iProduct: number;
  iSerialNumber: number;
  bNumConfigurations: number;
}

export class ConfigDescriptor {
  bLength: number;
  bDescriptorType: number;
  wTotalLength: number;
  bNumInterfaces: number;
  bConfigurationValue: number;
  iConfiguration: number;
  bmAttributes: number;
  bMaxPower: number;
  extra: Buffer;
}

export class Interface {
  descriptor: InterfaceDescriptor;
  endpoints: Endpoint[];
  constructor(device: Device, id: number);
  claim(): void;
  release(closeEndpoints?: (err?: string) => void, cb?: (err?: string) => void): void;
  isKernelDriverActive(): boolean;
  detachKernelDriver(): number;
  attachKernelDriver(): number;
  setAltSetting(altSetting: number, cb: (err?: string) => void): void;
  endpoint(addr: number): Endpoint;
}

export class InterfaceDescriptor {
  bLength: number;
  bDescriptorType: number;
  bInterfaceNumber: number;
  bAlternateSetting: number;
  bNumEndpoints: number;
  bInterfaceClass: number;
  bInterfaceSubClass: number;
  bInterfaceProtocol: number;
  iInterface: number;
  extra: Buffer;
}

export interface Endpoint extends EventEmitter {
  direction: string;
  transferType: number;
  timeout: number;
  descriptor: EndpointDescriptor;
}

export class InEndpoint extends EventEmitter implements Endpoint {
  direction: string;
  transferType: number;
  timeout: number;
  descriptor: EndpointDescriptor;
  constructor(device: Device, descriptor: EndpointDescriptor);
  transfer(length: number, callback: (error: string, data: Buffer) => void): InEndpoint;
  startPoll(nTransfers?: number, transferSize?: number): void;
  stopPoll(cb?: () => void): void;
}

export class OutEndpoint extends EventEmitter implements Endpoint {
  direction: string;
  transferType: number;
  timeout: number;
  descriptor: EndpointDescriptor;
  constructor(device: Device, descriptor: EndpointDescriptor);
  transfer(buffer: Buffer, cb: (err?: string) => void): OutEndpoint;
  transferWithZLP(buf: Buffer, cb: (err?: string) => void): void;
}

export class EndpointDescriptor {
  bLength: number;
  bDescriptorType: number;
  bEndpointAddress: number;
  bmAttributes: number;
  wMaxPacketSize: number;
  bInterval: number;
  bRefresh: number;
  bSynchAddress: number;
}

export function findByIds(vid: number, pid: number): Device;
export function on(event: string, callback: (device: Device) => void): void;
export function getDeviceList(): Device[];
export function setDebugLevel(level: number): void;

export const LIBUSB_CLASS_PER_INTERFACE: number;
export const LIBUSB_CLASS_AUDIO: number;
export const LIBUSB_CLASS_COMM: number;
export const LIBUSB_CLASS_HID: number;
export const LIBUSB_CLASS_PRINTER: number;
export const LIBUSB_CLASS_PTP: number;
export const LIBUSB_CLASS_MASS_STORAGE: number;
export const LIBUSB_CLASS_HUB: number;
export const LIBUSB_CLASS_DATA: number;
export const LIBUSB_CLASS_WIRELESS: number;
export const LIBUSB_CLASS_APPLICATION: number;
export const LIBUSB_CLASS_VENDOR_SPEC: number;
// libusb_standard_request
export const LIBUSB_REQUEST_GET_STATUS: number;
export const LIBUSB_REQUEST_CLEAR_FEATURE: number;
export const LIBUSB_REQUEST_SET_FEATURE: number;
export const LIBUSB_REQUEST_SET_ADDRESS: number;
export const LIBUSB_REQUEST_GET_DESCRIPTOR: number;
export const LIBUSB_REQUEST_SET_DESCRIPTOR: number;
export const LIBUSB_REQUEST_GET_CONFIGURATION: number;
export const LIBUSB_REQUEST_SET_CONFIGURATION: number;
export const LIBUSB_REQUEST_GET_INTERFACE: number;
export const LIBUSB_REQUEST_SET_INTERFACE: number;
export const LIBUSB_REQUEST_SYNCH_FRAME: number;
// libusb_descriptor_type
export const LIBUSB_DT_DEVICE: number;
export const LIBUSB_DT_CONFIG: number;
export const LIBUSB_DT_STRING: number;
export const LIBUSB_DT_INTERFACE: number;
export const LIBUSB_DT_ENDPOINT: number;
export const LIBUSB_DT_HID: number;
export const LIBUSB_DT_REPORT: number;
export const LIBUSB_DT_PHYSICAL: number;
export const LIBUSB_DT_HUB: number;
// libusb_endpoint_direction
export const LIBUSB_ENDPOINT_IN: number;
export const LIBUSB_ENDPOINT_OUT: number;
// libusb_transfer_type
export const LIBUSB_TRANSFER_TYPE_CONTROL: number;
export const LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: number;
export const LIBUSB_TRANSFER_TYPE_BULK: number;
export const LIBUSB_TRANSFER_TYPE_INTERRUPT: number;
// libusb_iso_sync_type
export const LIBUSB_ISO_SYNC_TYPE_NONE: number;
export const LIBUSB_ISO_SYNC_TYPE_ASYNC: number;
export const LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: number;
export const LIBUSB_ISO_SYNC_TYPE_SYNC: number;
// libusb_iso_usage_type
export const LIBUSB_ISO_USAGE_TYPE_DATA: number;
export const LIBUSB_ISO_USAGE_TYPE_FEEDBACK: number;
export const LIBUSB_ISO_USAGE_TYPE_IMPLICIT: number;
// libusb_transfer_status
export const LIBUSB_TRANSFER_COMPLETED: number;
export const LIBUSB_TRANSFER_ERROR: number;
export const LIBUSB_TRANSFER_TIMED_OUT: number;
export const LIBUSB_TRANSFER_CANCELLED: number;
export const LIBUSB_TRANSFER_STALL: number;
export const LIBUSB_TRANSFER_NO_DEVICE: number;
export const LIBUSB_TRANSFER_OVERFLOW: number;
// libusb_transfer_flags
export const LIBUSB_TRANSFER_SHORT_NOT_OK: number;
export const LIBUSB_TRANSFER_FREE_BUFFER: number;
export const LIBUSB_TRANSFER_FREE_TRANSFER: number;
// libusb_request_type
export const LIBUSB_REQUEST_TYPE_STANDARD: number;
export const LIBUSB_REQUEST_TYPE_CLASS: number;
export const LIBUSB_REQUEST_TYPE_VENDOR: number;
export const LIBUSB_REQUEST_TYPE_RESERVED: number;
// libusb_request_recipient
export const LIBUSB_RECIPIENT_DEVICE: number;
export const LIBUSB_RECIPIENT_INTERFACE: number;
export const LIBUSB_RECIPIENT_ENDPOINT: number;
export const LIBUSB_RECIPIENT_OTHER: number;

export const LIBUSB_CONTROL_SETUP_SIZE: number;

// libusb_error
// Input/output error
export const LIBUSB_ERROR_IO: number;
// Invalid parameter
export const LIBUSB_ERROR_INVALID_PARAM: number;
// Access denied (insufficient permissions)
export const LIBUSB_ERROR_ACCESS: number;
// No such device (it may have been disconnected)
export const LIBUSB_ERROR_NO_DEVICE: number;
// Entity not found
export const LIBUSB_ERROR_NOT_FOUND: number;
// Resource busy
export const LIBUSB_ERROR_BUSY: number;
// Operation timed out
export const LIBUSB_ERROR_TIMEOUT: number;
// Overflow
export const LIBUSB_ERROR_OVERFLOW: number;
// Pipe error
export const LIBUSB_ERROR_PIPE: number;
// System call interrupted (perhaps due to signal)
export const LIBUSB_ERROR_INTERRUPTED: number;
// Insufficient memory
export const LIBUSB_ERROR_NO_MEM: number;
// Operation not supported or unimplemented on this platform
export const LIBUSB_ERROR_NOT_SUPPORTED: number;
// Other error
export const LIBUSB_ERROR_OTHER: number;
