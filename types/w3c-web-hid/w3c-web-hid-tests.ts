// NOTE: Code kept as close to spec examples as possible but avoid compile errors.

/*~ https://wicg.github.io/webhid/#example-1 */
async function example_1() {
    // Retrieve devices and log the device names to the console.

    document.addEventListener("DOMContentLoaded", async () => {
        const devices = await navigator.hid.getDevices();
        devices.forEach(device => {
            console.log(`HID: ${device.productName}`);
        });
    });
    // Register event listeners for connection and disconnection of HID devices.

    navigator.hid.addEventListener("connect", ({ device }) => {
        console.log(`HID connected: ${device.productName}`);
    });

    navigator.hid.addEventListener("disconnect", ({ device }) => {
        console.log(`HID disconnected: ${device.productName}`);
    });

    // Devices are not accessible through getDevices() and will not generate connection events until permission has been granted to access the device.
    // The page may request permission using requestDevice(). In this example, the page requests access to a device with vendor ID 0xABCD, product ID 0x1234.
    // The device must also have a collection with usage page Consumer (0x0C) and usage ID Consumer Control (0x01).
    const requestButton = document.getElementById("request-hid-device");
    requestButton?.addEventListener("click", async () => {
        let device;
        try {
            const devices = await navigator.hid.requestDevice({
                filters: [
                    {
                        vendorId: 0xabcd,
                        productId: 0x1234,
                        usagePage: 0x0c,
                        usage: 0x01,
                    },
                ],
            });
            device = devices[0];
        } catch (error) {
            console.log("An error occurred.");
        }

        if (!device) {
            console.log("No device was selected.");
        } else {
            console.log(`HID: ${device.productName}`);
        }
    });
}
