import * as usb from "usb";

const device = new usb.Device();

device.timeout = 1;
device.busNumber = 1;
device.deviceAddress = 1;
device.portNumbers = [1, 2, 3];

device.__open();
device.__claimInterface(0);

device.open(true);
device.close();
const xferDevice: usb.Device = device.controlTransfer(1, 1, 1, 1, 1, (error: string, buf: Buffer): usb.Device => new usb.Device());
device.getStringDescriptor(1, (error: string, buf: Buffer) => null);
device.setConfiguration(1, (error: string) => null);
device.reset((error: string) => null);

const deviceDesc: usb.DeviceDescriptor = new usb.DeviceDescriptor();

deviceDesc.bLength = 1;
deviceDesc.bDescriptorType = 1;
deviceDesc.bcdUSB = 1;
deviceDesc.bDeviceClass = 1;
deviceDesc.bDeviceSubClass = 1;
deviceDesc.bDeviceProtocol = 1;
deviceDesc.bMaxPacketSize0 = 1;
deviceDesc.idVendor = 1;
deviceDesc.idProduct = 1;
deviceDesc.bcdDevice = 1;
deviceDesc.iManufacturer = 1;
deviceDesc.iProduct = 1;
deviceDesc.iSerialNumber = 1;
deviceDesc.bNumConfigurations = 1;

device.deviceDescriptor = deviceDesc;

const configDesc: usb.ConfigDescriptor = new usb.ConfigDescriptor();

configDesc.bLength = 1;
configDesc.bDescriptorType = 1;
configDesc.wTotalLength = 1;
configDesc.bNumInterfaces = 1;
configDesc.bConfigurationValue = 1;
configDesc.iConfiguration = 1;
configDesc.bmAttributes = 1;
configDesc.bMaxPower = 1;
configDesc.extra = new Buffer([]);

const deviceInterface: usb.Interface = device.interface(1);

device.interfaces = [deviceInterface];
device.parent = device;
device.configDescriptor = configDesc;
device.allConfigDescriptors = [configDesc];

const iface = new usb.Interface(device, 1);

iface.interface = 1;
iface.altSetting = 0;
iface.claim();
iface.release((error: string) => null);
iface.release(false, (error: string) => null);
const kernelActive: boolean = iface.isKernelDriverActive();
const detachKernel: number = iface.detachKernelDriver();
const attachKernel: number = iface.attachKernelDriver();
iface.setAltSetting(1, (error: string) => null);

const ifaceDesc: usb.InterfaceDescriptor = new usb.InterfaceDescriptor();

ifaceDesc.bLength = 1;
ifaceDesc.bDescriptorType = 1;
ifaceDesc.bInterfaceNumber = 1;
ifaceDesc.bAlternateSetting = 1;
ifaceDesc.bNumEndpoints = 1;
ifaceDesc.bInterfaceClass = 1;
ifaceDesc.bInterfaceSubClass = 1;
ifaceDesc.bInterfaceProtocol = 1;
ifaceDesc.iInterface = 1;
ifaceDesc.extra = new Buffer([]);

iface.descriptor = ifaceDesc;

const endpointDesc: usb.EndpointDescriptor = new usb.EndpointDescriptor();

endpointDesc.bLength = 1;
endpointDesc.bDescriptorType = 1;
endpointDesc.bEndpointAddress = 1;
endpointDesc.bmAttributes = 1;
endpointDesc.wMaxPacketSize = 1;
endpointDesc.bInterval = 1;
endpointDesc.bRefresh = 1;
endpointDesc.bSynchAddress = 1;
endpointDesc.extra = new Buffer([]);

const ifaceInEndpoint: usb.Endpoint = iface.endpoint(1) as usb.InEndpoint;
const ifaceOutEndpoint: usb.Endpoint = iface.endpoint(1) as usb.OutEndpoint;

const inEndpoint: usb.InEndpoint = new usb.InEndpoint(device, endpointDesc);

inEndpoint.direction = "in";
inEndpoint.transferType = 1;
inEndpoint.timeout = 1;
inEndpoint.descriptor = endpointDesc;
const xferInEndpoint: usb.InEndpoint = inEndpoint.transfer(1, (error: string, data: Buffer) => inEndpoint);
inEndpoint.on("data", (data) => null);
inEndpoint.startPoll(1, 1);
inEndpoint.startPoll(1);
inEndpoint.startPoll();
inEndpoint.stopPoll(() => null);
inEndpoint.stopPoll();

const outEndpoint: usb.OutEndpoint = new usb.OutEndpoint(device, endpointDesc);
outEndpoint.direction = "out";
outEndpoint.transferType = 1;
outEndpoint.timeout = 1;
outEndpoint.descriptor = endpointDesc;
inEndpoint.on("error", (err) => null);
const xferOutEndpoint: usb.OutEndpoint = outEndpoint.transfer(new Buffer([]), (error: string) => null);
outEndpoint.transferWithZLP(new Buffer([]), (error: string) => null);

iface.endpoints = [inEndpoint, outEndpoint];

const findByDevice: usb.Device = usb.findByIds(1, 1);
usb.on("hey", (device: usb.Device) => null);
const deviceList: usb.Device[] = usb.getDeviceList();
usb.setDebugLevel(1);

const CHECK_LIBUSB_CLASS_PER_INTERFACE: number = usb.LIBUSB_CLASS_PER_INTERFACE;
const CHECK_LIBUSB_CLASS_AUDIO: number = usb.LIBUSB_CLASS_AUDIO;
const CHECK_LIBUSB_CLASS_COMM: number = usb.LIBUSB_CLASS_COMM;
const CHECK_LIBUSB_CLASS_HID: number = usb.LIBUSB_CLASS_HID;
const CHECK_LIBUSB_CLASS_PRINTER: number = usb.LIBUSB_CLASS_PRINTER;
const CHECK_LIBUSB_CLASS_PTP: number = usb.LIBUSB_CLASS_PTP;
const CHECK_LIBUSB_CLASS_MASS_STORAGE: number = usb.LIBUSB_CLASS_MASS_STORAGE;
const CHECK_LIBUSB_CLASS_HUB: number = usb.LIBUSB_CLASS_HUB;
const CHECK_LIBUSB_CLASS_DATA: number = usb.LIBUSB_CLASS_DATA;
const CHECK_LIBUSB_CLASS_WIRELESS: number = usb.LIBUSB_CLASS_WIRELESS;
const CHECK_LIBUSB_CLASS_APPLICATION: number = usb.LIBUSB_CLASS_APPLICATION;
const CHECK_LIBUSB_CLASS_VENDOR_SPEC: number = usb.LIBUSB_CLASS_VENDOR_SPEC;
// libusb_standard_request
const CHECK_LIBUSB_REQUEST_GET_STATUS: number = usb.LIBUSB_REQUEST_GET_STATUS;
const CHECK_LIBUSB_REQUEST_CLEAR_FEATURE: number = usb.LIBUSB_REQUEST_CLEAR_FEATURE;
const CHECK_LIBUSB_REQUEST_SET_FEATURE: number = usb.LIBUSB_REQUEST_SET_FEATURE;
const CHECK_LIBUSB_REQUEST_SET_ADDRESS: number = usb.LIBUSB_REQUEST_SET_ADDRESS;
const CHECK_LIBUSB_REQUEST_GET_DESCRIPTOR: number = usb.LIBUSB_REQUEST_GET_DESCRIPTOR;
const CHECK_LIBUSB_REQUEST_SET_DESCRIPTOR: number = usb.LIBUSB_REQUEST_SET_DESCRIPTOR;
const CHECK_LIBUSB_REQUEST_GET_CONFIGURATION: number = usb.LIBUSB_REQUEST_GET_CONFIGURATION;
const CHECK_LIBUSB_REQUEST_SET_CONFIGURATION: number = usb.LIBUSB_REQUEST_SET_CONFIGURATION;
const CHECK_LIBUSB_REQUEST_GET_INTERFACE: number = usb.LIBUSB_REQUEST_GET_INTERFACE;
const CHECK_LIBUSB_REQUEST_SET_INTERFACE: number = usb.LIBUSB_REQUEST_SET_INTERFACE;
const CHECK_LIBUSB_REQUEST_SYNCH_FRAME: number = usb.LIBUSB_REQUEST_SYNCH_FRAME;
// libusb_descriptor_type
const CHECK_LIBUSB_DT_DEVICE: number = usb.LIBUSB_DT_DEVICE;
const CHECK_LIBUSB_DT_CONFIG: number = usb.LIBUSB_DT_CONFIG;
const CHECK_LIBUSB_DT_STRING: number = usb.LIBUSB_DT_STRING;
const CHECK_LIBUSB_DT_INTERFACE: number = usb.LIBUSB_DT_INTERFACE;
const CHECK_LIBUSB_DT_ENDPOINT: number = usb.LIBUSB_DT_ENDPOINT;
const CHECK_LIBUSB_DT_HID: number = usb.LIBUSB_DT_HID;
const CHECK_LIBUSB_DT_REPORT: number = usb.LIBUSB_DT_REPORT;
const CHECK_LIBUSB_DT_PHYSICAL: number = usb.LIBUSB_DT_PHYSICAL;
const CHECK_LIBUSB_DT_HUB: number = usb.LIBUSB_DT_HUB;
// libusb_endpoint_direction
const CHECK_LIBUSB_ENDPOINT_IN: number = usb.LIBUSB_ENDPOINT_IN;
const CHECK_LIBUSB_ENDPOINT_OUT: number = usb.LIBUSB_ENDPOINT_OUT;
// libusb_transfer_type
const CHECK_LIBUSB_TRANSFER_TYPE_CONTROL: number = usb.LIBUSB_TRANSFER_TYPE_CONTROL;
const CHECK_LIBUSB_TRANSFER_TYPE_ISOCHRONOUS: number = usb.LIBUSB_TRANSFER_TYPE_ISOCHRONOUS;
const CHECK_LIBUSB_TRANSFER_TYPE_BULK: number = usb.LIBUSB_TRANSFER_TYPE_BULK;
const CHECK_LIBUSB_TRANSFER_TYPE_INTERRUPT: number = usb.LIBUSB_TRANSFER_TYPE_INTERRUPT;
// libusb_iso_sync_type
const CHECK_LIBUSB_ISO_SYNC_TYPE_NONE: number = usb.LIBUSB_ISO_SYNC_TYPE_NONE;
const CHECK_LIBUSB_ISO_SYNC_TYPE_ASYNC: number = usb.LIBUSB_ISO_SYNC_TYPE_ASYNC;
const CHECK_LIBUSB_ISO_SYNC_TYPE_ADAPTIVE: number = usb.LIBUSB_ISO_SYNC_TYPE_ADAPTIVE;
const CHECK_LIBUSB_ISO_SYNC_TYPE_SYNC: number = usb.LIBUSB_ISO_SYNC_TYPE_SYNC;
// libusb_iso_usage_type
const CHECK_LIBUSB_ISO_USAGE_TYPE_DATA: number = usb.LIBUSB_ISO_USAGE_TYPE_DATA;
const CHECK_LIBUSB_ISO_USAGE_TYPE_FEEDBACK: number = usb.LIBUSB_ISO_USAGE_TYPE_FEEDBACK;
const CHECK_LIBUSB_ISO_USAGE_TYPE_IMPLICIT: number = usb.LIBUSB_ISO_USAGE_TYPE_IMPLICIT;
// libusb_transfer_status
const CHECK_LIBUSB_TRANSFER_COMPLETED: number = usb.LIBUSB_TRANSFER_COMPLETED;
const CHECK_LIBUSB_TRANSFER_ERROR: number = usb.LIBUSB_TRANSFER_ERROR;
const CHECK_LIBUSB_TRANSFER_TIMED_OUT: number = usb.LIBUSB_TRANSFER_TIMED_OUT;
const CHECK_LIBUSB_TRANSFER_CANCELLED: number = usb.LIBUSB_TRANSFER_CANCELLED;
const CHECK_LIBUSB_TRANSFER_STALL: number = usb.LIBUSB_TRANSFER_STALL;
const CHECK_LIBUSB_TRANSFER_NO_DEVICE: number = usb.LIBUSB_TRANSFER_NO_DEVICE;
const CHECK_LIBUSB_TRANSFER_OVERFLOW: number = usb.LIBUSB_TRANSFER_OVERFLOW;
// libusb_transfer_flags
const CHECK_LIBUSB_TRANSFER_SHORT_NOT_OK: number = usb.LIBUSB_TRANSFER_SHORT_NOT_OK;
const CHECK_LIBUSB_TRANSFER_FREE_BUFFER: number = usb.LIBUSB_TRANSFER_FREE_BUFFER;
const CHECK_LIBUSB_TRANSFER_FREE_TRANSFER: number = usb.LIBUSB_TRANSFER_FREE_TRANSFER;
// libusb_request_type
const CHECK_LIBUSB_REQUEST_TYPE_STANDARD: number = usb.LIBUSB_REQUEST_TYPE_STANDARD;
const CHECK_LIBUSB_REQUEST_TYPE_CLASS: number = usb.LIBUSB_REQUEST_TYPE_CLASS;
const CHECK_LIBUSB_REQUEST_TYPE_VENDOR: number = usb.LIBUSB_REQUEST_TYPE_VENDOR;
const CHECK_LIBUSB_REQUEST_TYPE_RESERVED: number = usb.LIBUSB_REQUEST_TYPE_RESERVED;
// libusb_request_recipient
const CHECK_LIBUSB_RECIPIENT_DEVICE: number = usb.LIBUSB_RECIPIENT_DEVICE;
const CHECK_LIBUSB_RECIPIENT_INTERFACE: number = usb.LIBUSB_RECIPIENT_INTERFACE;
const CHECK_LIBUSB_RECIPIENT_ENDPOINT: number = usb.LIBUSB_RECIPIENT_ENDPOINT;
const CHECK_LIBUSB_RECIPIENT_OTHER: number = usb.LIBUSB_RECIPIENT_OTHER;

const CHECK_LIBUSB_CONTROL_SETUP_SIZE: number = usb.LIBUSB_CONTROL_SETUP_SIZE;

// libusb_error
// Input/output error
const CHECK_LIBUSB_ERROR_IO: number = usb.LIBUSB_ERROR_IO;
// Invalid parameter
const CHECK_LIBUSB_ERROR_INVALID_PARAM: number = usb.LIBUSB_ERROR_INVALID_PARAM;
// Access denied (insufficient permissions)
const CHECK_LIBUSB_ERROR_ACCESS: number = usb.LIBUSB_ERROR_ACCESS;
// No such device (it may have been disconnected)
const CHECK_LIBUSB_ERROR_NO_DEVICE: number = usb.LIBUSB_ERROR_NO_DEVICE;
// Entity not found
const CHECK_LIBUSB_ERROR_NOT_FOUND: number = usb.LIBUSB_ERROR_NOT_FOUND;
// Resource busy
const CHECK_LIBUSB_ERROR_BUSY: number = usb.LIBUSB_ERROR_BUSY;
// Operation timed out
const CHECK_LIBUSB_ERROR_TIMEOUT: number = usb.LIBUSB_ERROR_TIMEOUT;
// Overflow
const CHECK_LIBUSB_ERROR_OVERFLOW: number = usb.LIBUSB_ERROR_OVERFLOW;
// Pipe error
const CHECK_LIBUSB_ERROR_PIPE: number = usb.LIBUSB_ERROR_PIPE;
// System call interrupted (perhaps due to signal)
const CHECK_LIBUSB_ERROR_INTERRUPTED: number = usb.LIBUSB_ERROR_INTERRUPTED;
// Insufficient memory
const CHECK_LIBUSB_ERROR_NO_MEM: number = usb.LIBUSB_ERROR_NO_MEM;
// Operation not supported or unimplemented on this platform
const CHECK_LIBUSB_ERROR_NOT_SUPPORTED: number = usb.LIBUSB_ERROR_NOT_SUPPORTED;
// Other error
const CHECK_LIBUSB_ERROR_OTHER: number = usb.LIBUSB_ERROR_OTHER;
