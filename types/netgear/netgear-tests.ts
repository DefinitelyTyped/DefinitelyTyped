import NetgearRouter = require("netgear");

// note: options can be passed in here. See login options.
const router = new NetgearRouter();

// discover a netgear router, including IP address and SOAP port. The discovered address and SOAP port will override previous settings
router
    .discover()
    .then(discovered => console.log(discovered))
    .catch(error => console.log(error));

// function to get various information
async function getRouterInfo() {
    try {
        // Get router type, soap version, firmware version and internet connection status without login
        const currentSetting = await router.getCurrentSetting();
        console.log(currentSetting);

        // for other methods you first need to be logged in. Passing options will override previous settings
        const options = {
            password: "mySecretPassword", // Password can also be passed during login
            host: "192.168.1.1", // Autodiscovery will be performed when left out
            port: 80, // SOAP port. Autodiscovery will be performed when left out
            tls: false, // TLS/SSL (HTTPS) is only supported on certain router types
        };
        await router.login(options);

        // Get router type, serial number, hardware version, firmware version, soap version, firewall version, etc.
        const info = await router.getInfo();
        console.log(info);

        // Get the support features.
        const supportFeatures = await router.getSupportFeatureListXML();
        console.log(supportFeatures);

        // Get the parental control status.
        const parentalControlEnabled = await router.getParentalControlEnableStatus();
        console.log(`Parental Controls enabled: ${parentalControlEnabled}`);

        // Get the qosEnableStatus.
        const qosEnabled = await router.getQoSEnableStatus();
        console.log(`Qos Enabled: ${qosEnabled}`);

        // Get the BlockDeviceEnabled Status (= device access control)
        const accessControlEnabled = await router.getBlockDeviceEnableStatus();
        console.log(`Device Access Control enabled: ${accessControlEnabled}`);

        // get a list of attached devices
        const attachedDevices = await router.getAttachedDevices();
        console.log(attachedDevices);

        // get the trafficMeterEnabled status
        const trafficMeterEnabled = await router.getTrafficMeterEnabled();
        console.log(`Traffic Meter Enabled: ${trafficMeterEnabled}`);

        // get the trafficMeterOptions
        const trafficMeterOptions = await router.getTrafficMeterOptions();
        console.log(trafficMeterOptions);

        // get traffic statistics for this day and this month. Note: traffic monitoring must be enabled in router
        const traffic = await router.getTrafficMeter();
        console.log(traffic);

        // check for new router firmware and release note
        const firmware = await router.checkNewFirmware();
        console.log(firmware);

        // logout
        console.log("going to logout now");
        await router.logout();
    } catch (error) {
        console.log(error);
    }
}

getRouterInfo();

// function to block or allow an attached device
async function blockOrAllow(mac: string, action: "Block" | "Allow") {
    try {
        await router.login();
        await router.setBlockDeviceEnable(true);
        const success = await router.setBlockDevice(mac, action);
        console.log(success);
    } catch (error) {
        console.log(error);
    }
}

// block a device with mac 'AA:BB:CC:DD:EE:FF'
blockOrAllow("AA:BB:CC:DD:EE:FF", "Block");

// allow a device with mac 'AA:BB:CC:DD:EE:FF'
blockOrAllow("AA:BB:CC:DD:EE:FF", "Allow");

// function to retrieve Guest Wifi status
async function getGuestWifiStatus() {
    try {
        await router.login();
        const guestWifiEnabled = await router.getGuestWifiEnabled();
        console.log(`2.4G-1 Guest wifi enabled: ${guestWifiEnabled}`);
        const guestWifi5GEnabled = await router.get5GGuestWifiEnabled();
        console.log(`5G-1 Guest wifi enabled: ${guestWifi5GEnabled}`);
        const guestWifi5G2Enabled = await router.get5GGuestWifi2Enabled();
        console.log(`5G-2 Guest wifi enabled: ${guestWifi5G2Enabled}`);
    } catch (error) {
        console.log(error);
    }
}

getGuestWifiStatus();

// function to enable/disable wifi
async function doWifiStuff() {
    try {
        await router.login();
        // enable 2.4GHz-1 guest wifi
        await router.setGuestWifi(true);
        console.log("2.4-1 enabled");
        // disable 5GHz-1 guest wifi
        await router.set5GGuestWifi(false);
        console.log("5-1 disabled");
        // disable 5GHz-2 guest wifi
        await router.set5GGuestWifi2(false);
        console.log("5-2 disabled");
        // set 5GHz-1 wifi to channel 4
        await router.setWifiChannel("4", "5G");
    } catch (error) {
        console.log(error);
    }
}

doWifiStuff();

// function to enable/disable QOS
async function doQosStuff() {
    try {
        await router.login();
        // Set the qosEnableStatus.
        await router.setQoSEnableStatus(true);
        console.log("Qos enabled");
        // Set the getBandwidthControlOptions.
        console.log("trying to set Qos Bandwidth options...");
        await router.setBandwidthControlOptions(60.5, 50.5); // in MB/s
        // Get the getBandwidthControlOptions.
        console.log("trying to get Qos Bandwidth options...");
        const bandwidthControlOptions = await router.getBandwidthControlOptions();
        console.log(bandwidthControlOptions);
    } catch (error) {
        console.log(error);
    }
}

doQosStuff();

// function to enable/disable TrafficMeter
async function doTrafficMeterStuff() {
    try {
        await router.login();
        // enable trafficMeter.
        await router.enableTrafficMeter(true);
        console.log("Traffic meter enabled");
    } catch (error) {
        console.log(error);
    }
}

doTrafficMeterStuff();

// function to enable/disable parental control
async function doParentalControlStuff() {
    try {
        await router.login();
        // disable parental control
        await router.enableParentalControl(false);
        console.log("Parental control disabled");
    } catch (error) {
        console.log(error);
    }
}

doParentalControlStuff();

// function to change router name
async function setNetgearDeviceName() {
    try {
        await router.login();
        // set router name to 'TEST'
        await router.setNetgearDeviceName("TEST");
        console.log("router name changed to TEST");
    } catch (error) {
        console.log(error);
    }
}

setNetgearDeviceName();

// function to update router firmware
async function updateNewFirmware() {
    try {
        await router.login();
        console.log("trying to update router firmware");
        await router.updateNewFirmware();
    } catch (error) {
        console.log(error);
    }
}

updateNewFirmware();

// function to do internet speed test (takes long time!)
async function speedTest() {
    try {
        await router.login();
        console.log("speed test is starting... (wait a minute)");
        const speed = await router.speedTest(); // takes 1 minute to respond!
        console.log(speed);
    } catch (error) {
        console.log(error);
    }
}

speedTest();

// function to reboot router
async function reboot() {
    try {
        await router.login();
        // Reboot the router
        console.log("going to reboot the router now");
        await router.reboot();
    } catch (error) {
        console.log(error);
    }
}

reboot();

// function to send WakeOnLan command to a device
async function wol(MAC: string, secureOnPassword: string) {
    try {
        console.log(`performing WOL for ${MAC}`);
        await router.wol(MAC, secureOnPassword);
    } catch (error) {
        console.log(error);
    }
}

wol("AA:BB:CC:DD:EE:FF", "00:00:00:00:00:00");

const a: Promise<string[]> = router.getSystemLogs();
const b: Promise<string[]> = router.getSystemLogs(false);
const c: Promise<NetgearRouter.Log[]> = router.getSystemLogs(true);

console.log(a, b, c);
