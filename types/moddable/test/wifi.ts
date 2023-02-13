import WiFi from "wifi";
import Net from "net";

/**
 * Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch3-network/wifi-code/main.js
 */
function WifiMonitorTest() {
    const wifiMonitor = new WiFi({
        ssid: 'my wi-fi',
        password: 'secret',
    }, msg => {
        switch (msg) {
            case WiFi.gotIP:
                trace('network ready\n');
                break;
            case WiFi.connected:
                trace('connected\n');
                // Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch3-network/wifi-command-line/main.js
                trace(`IP Address is: ${Net.get('IP')}\n`);
                wifiMonitor.close();
                WiFi.disconnect();
                break;
            case WiFi.disconnected:
                trace('connection lost\n');
                break;
        }
    });
}

/**
 * Refer to https://github.com/Moddable-OpenSource/iot-product-dev-book/blob/master/ch3-network/wifi-open-ap/main.js
 */
function AnyOpenAccessPointTest() {
    let best: {
        ssid: string,
        authentication: string,
        rssi: number,
        bssid: ArrayBuffer,
    };
    WiFi.scan({}, accessPoint => {
        if (!accessPoint) {
            if (!best) {
                return;
            }
            WiFi.connect({ ssid: best.ssid });
        }
        if ('none' !== accessPoint?.authentication) {
            return;
        }
        if (!best) {
            best = accessPoint;
            return;
        }
        if (best.rssi < accessPoint.rssi) {
            best = accessPoint;
        }
    });
}
