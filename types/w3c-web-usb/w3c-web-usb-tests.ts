// Modified from WebUSB spec: https://wicg.github.io/webusb/
// NOTE: Code kept as close to spec examples as possible

const connectedDevices: USBDevice[] = [];

document.addEventListener('DOMContentLoaded', async () => {
    const devices = await navigator.usb.getDevices();
    devices.forEach(handleConnectedDevice);
});

const button = document.getElementById('request-device');
if (button) {
    button.addEventListener('click', async () => {
        let device;
        try {
            device = await navigator.usb.requestDevice({ filters: [{
                vendorId: 0xABCD,
                classCode: 0xFF, // vendor-specific
                protocolCode: 0x01
            }]});
        } catch (e) {
            // No device was selected.
        }

        if (device !== undefined) {
            // Add |device| to the UI.
            handleConnectedDevice(device);
        }
    });
}

navigator.usb.addEventListener('connect', evt => {
    // Add |device| to the UI.
    handleConnectedDevice(evt.device);
});

navigator.usb.addEventListener('disconnect', evt => {
    // Remove |device| from the UI.
    const i = connectedDevices.indexOf(evt.device);
    if (i >= 0) {
        connectedDevices.splice(i, 1);
    }
});

async function handleConnectedDevice(device: USBDevice) {
    connectedDevices.push(device);

    await device.open();
    if (device.configuration === null)
      await device.selectConfiguration(1);
    await device.claimInterface(1);

    await device.controlTransferOut({
        requestType: 'vendor',
        recipient: 'interface',
        request: 0x01,  // vendor-specific request: enable channels
        value: 0x0013,  // 0b00010011 (channels 1, 2 and 5)
        index: 0x0001   // Interface 1 is the recipient
    });

    while (true) {
        const result = await device.transferIn(1, 6);

        if (result.data && result.data.byteLength === 6) {
            console.log('Channel 1: ' + result.data.getUint16(0));
            console.log('Channel 2: ' + result.data.getUint16(2));
            console.log('Channel 5: ' + result.data.getUint16(4));
        }

        if (result.status === 'stall') {
            console.warn('Endpoint stalled. Clearing.');
            await device.clearHalt("in", 1);
        }
    }
}
