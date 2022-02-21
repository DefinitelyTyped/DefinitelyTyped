import * as piWifi from "pi-wifi";

piWifi.check('myTestNetwork', (err, result) => {
    if (err) {
        return err.message;
    }
    return result;
});
const ssid = 'MyOpenNetwork';
piWifi.connectTo({ssid}, (err) => {
    if (!err) {
        return `Connected to the network ${ssid}!`;
    } else {
        return `Unable to create the network ${ssid}.`;
    }
});
piWifi.connectToId(2, (err) => {
    if (err) {
        return err.message;
    }
    return 'Successful connection!';
});
piWifi.connect('myTestNetwork', 'MyTestPassword', (err) => {
    if (err) {
        return err.message;
    }
    'Successful connection!';
});
piWifi.connectOpen('myTestNetwork', (err) => {
    if (err) {
        return err.message;
    }
    return 'Successful connection!';
});
piWifi.connectEAP('myTestNetwork', 'MyTestUsername', 'MyTestPassword', (err) => {
    if (err) {
        return err.message;
    }
    return 'Successful connection!';
});
piWifi.disconnect((err) => {
    if (err) {
        return err.message;
    }
    return 'Disconnected from network!';
});
piWifi.detectSupplicant((err, iface, configFile) => {
    if (err) {
      return err.message;
    }
    return `Supplicant running in interface ${iface} using the configuration file ${configFile}`;
});
piWifi.interfaceDown('wlan0', (err) => {
    if (err) {
      return err.message;
    }
    return 'Interface dropped succesfully!';
});
piWifi.interfaceUp('wlan0', (err) => {
    if (err) {
      return err.message;
    }
    return 'Interface raised succesfully!';
});
piWifi.killSupplicant('wlan0', (err) => {
    if (err) {
      return err.message;
    }
    return 'Supplicant process terminated!';
});
piWifi.listNetworks((err, networksArray) => {
    if (err) {
      return err.message;
    }
    return networksArray;
});
piWifi.restartInterface('wlan0', (err) => {
    if (err) {
      return err.message;
    }
    return 'Interface restarted succesfully!';
});
piWifi.scan((err, networks) => {
    if (err) {
      return err.message;
    }
    return networks;
});
piWifi.status('wlan0', (err, status) => {
    if (err) {
      return err.message;
    }
    return status;
});
piWifi.startSupplicant({iface: 'wlan0', config: '/etc/wpa_supplicant/wpa_supplicant.conf', dns: '/etc/resolv.conf'}, (err) => {
    if (err) {
      return err.message;
    }
    return 'Supplicant instance successfully started!';
});
piWifi.status('wlan0', (err, status) => {
    if (err) {
      return err.message;
    }
    return status;
});
