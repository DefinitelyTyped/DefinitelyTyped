/**
 * Generated from:
 * - navigator_usb.idl
 * - usb.idl
 * - usb_alternate_interface.idl
 * - usb_configuration.idl
 * - usb_connection_event.idl
 * - usb_connection_event_init.idl
 * - usb_control_transfer_parameters.idl
 * - usb_device.idl
 * - usb_device_filter.idl
 * - usb_device_request_options.idl
 * - usb_endpoint.idl
 * - usb_in_transfer_result.idl
 * - usb_interface.idl
 * - usb_isochronous_in_transfer_packet.idl
 * - usb_isochronous_in_transfer_result.idl
 * - usb_isochronous_out_transfer_packet.idl
 * - usb_isochronous_out_transfer_result.idl
 * - usb_out_transfer_result.idl
 * - worker_navigator_usb.idl
 *
 * @see https://wicg.github.io/webusb/
 */

declare global {
  interface WorkerNavigator {
    readonly usb: USB;
  }
}

export class USBOutTransferResult {
  constructor(status: USBTransferStatus, bytesWritten?: number);
  readonly bytesWritten: number;
  readonly status: USBTransferStatus;
}

export class USBIsochronousOutTransferResult {
  constructor(packets: USBIsochronousOutTransferPacket[]);
  readonly packets: readonly USBIsochronousOutTransferPacket[];
}

export class USBIsochronousOutTransferPacket {
  constructor(status: USBTransferStatus, bytesWritten?: number);
  readonly bytesWritten: number;
  readonly status: USBTransferStatus;
}

export class USBIsochronousInTransferResult {
  constructor(packets: USBIsochronousInTransferPacket[], data?: DataView | null);
  readonly data: DataView | null;
  readonly packets: readonly USBIsochronousInTransferPacket[];
}

export class USBIsochronousInTransferPacket {
  constructor(status: USBTransferStatus, data?: DataView | null);
  readonly status: USBTransferStatus;
  readonly data: DataView | null;
}

export class USBInterface {
  constructor(configuration: USBConfiguration, interfaceNumber: number);
  readonly interfaceNumber: number;
  readonly alternate: USBAlternateInterface | null;
  readonly alternates: readonly USBAlternateInterface[];
  readonly claimed: boolean;
}

export class USBInTransferResult {
  constructor(status: USBTransferStatus, data?: DataView | null);
  readonly data: DataView | null;
  readonly status: USBTransferStatus;
}

export type USBDirection =
  | "in"
  | "out";

export type USBEndpointType =
  | "bulk"
  | "interrupt"
  | "isochronous";

export class USBEndpoint {
  constructor(alternate: USBAlternateInterface, endpointNumber: number, direction: USBDirection);
  readonly endpointNumber: number;
  readonly direction: USBDirection;
  readonly type: USBEndpointType;
  readonly packetSize: number;
}

export interface USBDeviceRequestOptions {
  filters: USBDeviceFilter[];
  /** @default [] */
  exclusionFilters?: USBDeviceFilter[];
}

export interface USBDeviceFilter {
  vendorId?: number;
  productId?: number;
  classCode?: number;
  subclassCode?: number;
  protocolCode?: number;
  serialNumber?: string;
}

export type USBTransferStatus =
  | "ok"
  | "stall"
  | "babble";

export interface USBDevice {
  readonly usbVersionMajor: number;
  readonly usbVersionMinor: number;
  readonly usbVersionSubminor: number;
  readonly deviceClass: number;
  readonly deviceSubclass: number;
  readonly deviceProtocol: number;
  readonly vendorId: number;
  readonly productId: number;
  readonly deviceVersionMajor: number;
  readonly deviceVersionMinor: number;
  readonly deviceVersionSubminor: number;
  readonly manufacturerName: string | null;
  readonly productName: string | null;
  readonly serialNumber: string | null;
  readonly configuration: USBConfiguration | null;
  readonly configurations: readonly USBConfiguration[];
  readonly opened: boolean;
  open(): Promise<undefined>;
  close(): Promise<undefined>;
  forget(): Promise<undefined>;
  selectConfiguration(configurationValue: number): Promise<undefined>;
  claimInterface(interfaceNumber: number): Promise<undefined>;
  releaseInterface(interfaceNumber: number): Promise<undefined>;
  selectAlternateInterface(interfaceNumber: number, alternateSetting: number): Promise<undefined>;
  controlTransferIn(setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;
  controlTransferOut(setup: USBControlTransferParameters, data?: BufferSource): Promise<USBOutTransferResult>;
  clearHalt(direction: USBDirection, endpointNumber: number): Promise<undefined>;
  transferIn(endpointNumber: number, length: number): Promise<USBInTransferResult>;
  transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
  isochronousTransferIn(endpointNumber: number, packetLengths: number[]): Promise<USBIsochronousInTransferResult>;
  isochronousTransferOut(
    endpointNumber: number,
    data: BufferSource,
    packetLengths: number[],
  ): Promise<USBIsochronousOutTransferResult>;
  reset(): Promise<undefined>;
}

export type USBRequestType =
  | "standard"
  | "class"
  | "vendor";

export type USBRecipient =
  | "device"
  | "interface"
  | "endpoint"
  | "other";

export interface USBControlTransferParameters {
  requestType: USBRequestType;
  recipient: USBRecipient;
  request: number;
  value: number;
  index: number;
}

export interface USBConnectionEventInit extends EventInit {
  device: USBDevice;
}

export class USBConnectionEvent extends Event {
  constructor(type: string, eventInitDict: USBConnectionEventInit);
  readonly device: USBDevice;
}

export class USBConfiguration {
  constructor(device: USBDevice, configurationValue: number);
  readonly configurationValue: number;
  readonly configurationName: string | null;
  readonly interfaces: readonly USBInterface[];
}

export class USBAlternateInterface {
  constructor(deviceInterface: USBInterface, alternateSetting: number);
  readonly alternateSetting: number;
  readonly interfaceClass: number;
  readonly interfaceSubclass: number;
  readonly interfaceProtocol: number;
  readonly interfaceName: string | null;
  readonly endpoints: readonly USBEndpoint[];
}

export interface USB extends EventTarget {
  onconnect: ((ev: Event) => any) | null;
  ondisconnect: ((ev: Event) => any) | null;
  getDevices(): Promise<USBDevice[]>;
  requestDevice(options: USBDeviceRequestOptions): Promise<USBDevice>;
}

declare global {
  interface Navigator {
    readonly usb: USB;
  }
}
