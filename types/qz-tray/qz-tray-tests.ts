import qz = require("qz-tray");

const doSomething = () => null;

const options: qz.PrinterOptions = {
    colorType: "grayscale",
    margins: 2,
    units: "cm",
};
const printData: qz.PrintData[] = [
    {
        flavor: "file",
        data: "some data",
        type: "pixel",
        format: "html",
    },
];
const createdConfig = qz.configs.create("HP", options);
const print = async () => qz.print(createdConfig, printData, { resumeOnError: true });
qz.configs.setDefaults(options);
qz.api.isVersion({ build: "2", major: "3" });
qz.api.isVersionGreater({ major: "1" });
qz.api.isVersionLess({ major: "2" });
qz.api.setPromiseType((resolver) => resolver("type"));
qz.api.setSha256Type((message) => message("type"));
qz.api.setWebSocketType((webSocket) => webSocket("type"));
qz.api.showDebug(true);
const getVersion = async () => qz.api.getVersion();
const getFiles = async () => qz.file.list("/");
const readFile = async () => qz.file.read("/someFile.txt", { flavor: "base64" });
const removeFile = async () => qz.file.remove("/someFile.txt");
qz.file.setFileCallbacks(() => doSomething());
const startListeningFn = async () => qz.file.startListening("/someFile.txt", { listener: { bytes: 1 } });
const stopListeningFn = async () => qz.file.stopListening("/someFile.txt");
const writeFile = async () => qz.file.write("/someFile.txt", { data: "some data" });
const claimDeviceFn = async () =>
    qz.hid.claimDevice({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1" });
const closeStream = async () =>
    qz.hid.closeStream({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1" });
const getFeatureReportFn = async () =>
    qz.hid.getFeatureReport({
        vendorId: "01x10",
        productId: "1x",
        usagePage: "09x6546565",
        serial: "1",
        responseSize: "20",
    });
const isClaimedFn = async () =>
    qz.hid.isClaimed({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1" });
const listDevicesFn = async () => qz.hid.listDevices();
const openStreamFn = async () =>
    qz.hid.openStream({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1" });
const readData = async () =>
    qz.hid.readData({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1", responseSize: "20" });
const releaseDeviceFn = async () =>
    qz.hid.releaseDevice({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1" });
const sendDataFn = async () =>
    qz.hid.sendData({ vendorId: "01x10", productId: "1x", usagePage: "09x6546565", serial: "1", data: "some data" });
const sendFeatureReport = async () =>
    qz.hid.sendFeatureReport({
        vendorId: "01x10",
        productId: "1x",
        usagePage: "09x6546565",
        serial: "1",
        data: "some data",
    });
qz.hid.setHidCallbacks(() => doSomething());
const startListeningHidFn = async () => qz.hid.startListening();
const stopListeningHidFn = async () => qz.hid.stopListening();
const getDevice = async () => qz.networking.device();
const getDevices = async () => qz.networking.devices();
const getHostname = async () => qz.networking.hostname();
const clearQueueFn = async () => qz.printers.clearQueue({ printerName: "HP" });
const getDetails = async () => qz.printers.details();
const findFn = async () => qz.printers.find();
const getDefaultFn = async () => qz.printers.getDefault();
const getStatusFn = async () => qz.printers.getStatus();
qz.printers.setPrinterCallbacks(() => doSomething());
const startListeningPrintersFn = async () => qz.printers.startListening(["HP", "Bixolon"]);
const stopListeningPrintersFn = async () => qz.printers.stopListening();
qz.security.getSignatureAlgorithm();
qz.security.setCertificatePromise((resolve) => resolve());
qz.security.setSignatureAlgorithm("SHA512");
const signaturePromiseAsync = async (dataToSign: string): Promise<string> => {
    return await "signed_request";
};
qz.security.setSignaturePromise((dataToSign) => (resolve) => resolve(dataToSign));
qz.security.setSignaturePromise(signaturePromiseAsync);
const closePortFn = async () => qz.serial.closePort("6000");
const findPortsFn = async () => qz.serial.findPorts();
const openPortFn = async () => qz.serial.openPort("6000");
const sendDataSerialFn = async () => qz.serial.sendData("6000", "data to send");
qz.serial.setSerialCallbacks(() => doSomething());
qz.socket.close("localhost", 6000);
qz.socket.open("localhost", 6000);
qz.socket.sendData("localhost", 6000, { type: "PLAIN", data: "data to send" });
qz.socket.setSocketCallbacks(() => doSomething());
const claimDeviceUsbFn = async () =>
    qz.usb.claimDevice({ vendorId: "01x8066", productId: "07x656565", interface: "0x1110" });
const closeStreamUsbFn = async () =>
    qz.usb.closeStream({ vendorId: "01x8066", productId: "07x656565", endpoint: "0x1110" });
const isClaimedUsbFn = async () => qz.usb.isClaimed({ vendorId: "01x8066", productId: "07x656565" });
const listDevicesUsbFn = async () => qz.usb.listDevices();
const listEndpointsUsbFn = async () =>
    qz.usb.listEndpoints({ vendorId: "01x8066", productId: "07x656565", iface: "0x1110" });
const listInterfacesUsbFn = async () => qz.usb.listInterfaces({ vendorId: "01x8066", productId: "07x656565" });
const openStreamUsbFn = async () =>
    qz.usb.openStream({ vendorId: "01x8066", productId: "07x656565", endpoint: "0x1110", responseSize: "500" });
const readDataUsbFn = async () =>
    qz.usb.readData({ vendorId: "01x8066", productId: "07x656565", endpoint: "0x1110", responseSize: "500" });
const releaseDeviceUsbFn = async () => qz.usb.releaseDevice({ vendorId: "01x8066", productId: "07x656565" });
const sendDataUsbFn = async () =>
    qz.usb.sendData({ vendorId: "01x8066", productId: "07x656565", endpoint: "0x1110", data: "500", type: "BASE64" });
qz.usb.setUsbCallbacks(() => doSomething());
qz.websocket.getNetworkInfo();
const connectFn = async () => qz.websocket.connect();
const connectFnWithOptions = async () => qz.websocket.connect({ retries: 10, delay: 3 });
const disconnectFn = async () => qz.websocket.disconnect();
const getConnectionInfoFn = async () => qz.websocket.getConnectionInfo();
qz.websocket.isActive();
qz.websocket.setClosedCallbacks(() => doSomething());
qz.websocket.setErrorCallbacks(() => doSomething());
connectFn().then(r => r);
disconnectFn().then(r => r);
getConnectionInfoFn().then(r => r);
claimDeviceUsbFn().then(r => r);
closeStreamUsbFn().then(r => r);
isClaimedUsbFn().then(r => r);
listDevicesUsbFn().then(r => r);
listEndpointsUsbFn().then(r => r);
listInterfacesUsbFn().then(r => r);
openStreamUsbFn().then(r => r);
readDataUsbFn().then(r => r);
releaseDeviceUsbFn().then(r => r);
sendDataUsbFn().then(r => r);
closePortFn().then(r => r);
findPortsFn().then(r => r);
openPortFn().then(r => r);
sendDataSerialFn().then(r => r);
clearQueueFn().then(r => r);
getDetails().then(r => r);
findFn().then(r => r);
getDefaultFn().then(r => r);
getStatusFn().then(r => r);
startListeningPrintersFn().then(r => r);
stopListeningPrintersFn().then(r => r);
getDevices().then(r => r);
getHostname().then(r => r);
getDevice().then(r => r);
releaseDeviceFn().then(r => r);
sendDataFn().then(r => r);
sendFeatureReport().then(r => r);
startListeningHidFn().then(r => r);
stopListeningHidFn().then(r => r);
claimDeviceFn().then(r => r);
closeStream().then(r => r);
getFeatureReportFn().then(r => r);
isClaimedFn().then(r => r);
listDevicesFn().then(r => r);
openStreamFn().then(r => r);
readData().then(r => r);
writeFile().then(r => r);
startListeningFn().then(r => r);
stopListeningFn().then(r => r);
removeFile().then(r => r);
readFile().then(r => r);
getFiles().then(r => r);
print().then(r => r);
getVersion().then(r => r);
