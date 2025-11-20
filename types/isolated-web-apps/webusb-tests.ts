import {
  USB,
  USBAlternateInterface,
  USBConfiguration,
  USBConnectionEvent,
  USBConnectionEventInit,
  USBControlTransferParameters,
  USBDevice,
  USBDeviceFilter,
  USBDeviceRequestOptions,
  USBDirection,
  USBEndpoint,
  USBEndpointType,
  USBInterface,
  USBInTransferResult,
  USBIsochronousInTransferPacket,
  USBIsochronousInTransferResult,
  USBIsochronousOutTransferPacket,
  USBIsochronousOutTransferResult,
  USBOutTransferResult,
  USBRecipient,
  USBRequestType,
  USBTransferStatus,
} from "isolated-web-apps";

const bufferSource: BufferSource = new ArrayBuffer(10);
const dataView: DataView = new DataView(bufferSource);
const eventType = "connect";
const tag = 0x01;

const dummyDevice: USBDevice = {} as USBDevice;
const dummyConfiguration: USBConfiguration = {} as USBConfiguration;
const dummyInterface: USBInterface = {} as USBInterface;

async function testWebUsbApi() {
  // --------------------------------------------------------------------------------
  // Enums and Status Types
  // --------------------------------------------------------------------------------

  const directionIn: USBDirection = "in";
  // $ExpectType "in"
  directionIn;

  const transferStatusOk: USBTransferStatus = "ok";
  // $ExpectType "ok"
  transferStatusOk;

  const endpointTypeBulk: USBEndpointType = "bulk";
  // $ExpectType "bulk"
  endpointTypeBulk;

  const requestType: USBRequestType = "vendor";
  // $ExpectType "vendor"
  requestType;

  const recipient: USBRecipient = "endpoint";
  // $ExpectType "endpoint"
  recipient;

  // --------------------------------------------------------------------------------
  // Transfer Result Constructors and Properties
  // --------------------------------------------------------------------------------

  const outResult = new USBOutTransferResult("ok", 8);
  // $ExpectType USBOutTransferResult
  outResult;
  // $ExpectType number
  outResult.bytesWritten;
  // $ExpectType USBTransferStatus
  outResult.status;

  const inResult = new USBInTransferResult("stall", dataView);
  // $ExpectType USBInTransferResult
  inResult;

  const isocInPacket = new USBIsochronousInTransferPacket("babble", dataView);
  // $ExpectType USBIsochronousInTransferPacket
  isocInPacket;

  const isocInResult = new USBIsochronousInTransferResult(
    [isocInPacket],
    dataView,
  );
  // $ExpectType USBIsochronousInTransferResult
  isocInResult;
  // $ExpectType readonly USBIsochronousInTransferPacket[]
  isocInResult.packets;

  const isocOutPacket = new USBIsochronousOutTransferPacket("ok", 64);
  // $ExpectType USBIsochronousOutTransferPacket
  isocOutPacket;

  const isocOutResult = new USBIsochronousOutTransferResult([isocOutPacket]);
  // $ExpectType USBIsochronousOutTransferResult
  isocOutResult;

  // --------------------------------------------------------------------------------
  // Configuration and Interface Structures
  // --------------------------------------------------------------------------------

  const alternate = new USBAlternateInterface(dummyInterface, 1);
  // $ExpectType USBAlternateInterface
  alternate;
  // $ExpectType number
  alternate.interfaceClass;
  // $ExpectType readonly USBEndpoint[]
  alternate.endpoints;

  const endpoint = new USBEndpoint(alternate, 3, "in");
  // $ExpectType USBEndpoint
  endpoint;
  // $ExpectType USBEndpointType
  endpoint.type;
  // @ts-expect-error invalid direction type
  new USBEndpoint(alternate, 1, "up");

  const iface = new USBInterface(dummyConfiguration, 0);
  // $ExpectType USBInterface
  iface;
  // $ExpectType USBAlternateInterface | null
  iface.alternate;
  // $ExpectType boolean
  iface.claimed;

  const config = new USBConfiguration(dummyDevice, 1);
  // $ExpectType USBConfiguration
  config;
  // $ExpectType string | null
  config.configurationName;
  // $ExpectType readonly USBInterface[]
  config.interfaces;

  const controlParams: USBControlTransferParameters = {
    requestType: "vendor",
    recipient: "device",
    request: 1,
    value: 2,
    index: 3,
  };
  // $ExpectType USBControlTransferParameters
  controlParams;

  const deviceFilter: USBDeviceFilter = {
    vendorId: 0x1234,
    serialNumber: "SN123",
  };
  // $ExpectType number | undefined
  deviceFilter.productId;

  const requestOptions: USBDeviceRequestOptions = {
    filters: [deviceFilter],
    exclusionFilters: [],
  };
  // $ExpectType USBDeviceFilter[]
  requestOptions.filters;

  const connectionEventInit: USBConnectionEventInit = {
    device: dummyDevice,
    bubbles: true,
  };
  const connectionEvent = new USBConnectionEvent(
    eventType,
    connectionEventInit,
  );
  // $ExpectType USBConnectionEvent
  connectionEvent;
  // $ExpectType USBDevice
  connectionEvent.device;

  // --------------------------------------------------------------------------------
  // USB Interface (Global Augmentation: navigator.usb)
  // --------------------------------------------------------------------------------

  if (navigator.usb) {
    const usb: USB = navigator.usb;
    // $ExpectType USB
    usb;

    // $ExpectType ((ev: Event) => any) | null
    usb.onconnect;

    // $ExpectType Promise<USBDevice[]>
    usb.getDevices();

    // $ExpectType Promise<USBDevice>
    usb.requestDevice(requestOptions);
  }

  // --------------------------------------------------------------------------------
  // USBDevice Interface Methods/Properties
  // --------------------------------------------------------------------------------

  // $ExpectType number
  dummyDevice.vendorId;
  // $ExpectType USBConfiguration | null
  dummyDevice.configuration;
  // $ExpectType readonly USBConfiguration[]
  dummyDevice.configurations;

  // $ExpectType Promise<undefined>
  dummyDevice.open();
  // $ExpectType Promise<undefined>
  dummyDevice.close();
  // $ExpectType Promise<undefined>
  dummyDevice.forget();
  // $ExpectType Promise<undefined>
  dummyDevice.selectConfiguration(tag);
  // $ExpectType Promise<undefined>
  dummyDevice.claimInterface(tag);
  // $ExpectType Promise<undefined>
  dummyDevice.reset();

  // $ExpectType Promise<USBInTransferResult>
  dummyDevice.controlTransferIn(controlParams, 64);

  // $ExpectType Promise<USBOutTransferResult>
  dummyDevice.controlTransferOut(controlParams, bufferSource);

  // $ExpectType Promise<USBInTransferResult>
  dummyDevice.transferIn(tag, 64);

  // $ExpectType Promise<USBIsochronousInTransferResult>
  dummyDevice.isochronousTransferIn(tag, [64, 64]);
}
