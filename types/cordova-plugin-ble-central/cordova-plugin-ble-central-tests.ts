var log = (msg : string) => {};
var devices: BLECentralPlugin.PeripheralData[] = [];
var demoDevice :BLECentralPlugin.PeripheralData = {
    "name": "Battery Demo",
    "id": "20:FF:D0:FF:D1:C0",
    "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    "rssi": -55
};

devices.push(demoDevice);
var demoExtendedData : BLECentralPlugin.PeripheralDataExtended = {
    "name": "Battery Demo",
    "id": "20:FF:D0:FF:D1:C0",
    "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
    "rssi": -55,
    "services": [
        "1800",
        "1801",
        "180f"
    ],
    "characteristics": [
        {
            "service": "1800",
            "characteristic": "2a00",
            "properties": [
                "Read"
            ]
        },
        {
            "service": "1800",
            "characteristic": "2a01",
            "properties": [
                "Read"
            ]
        },
        {
            "service": "1801",
            "characteristic": "2a05",
            "properties": [
                "Read"
            ]
        },
        {
            "service": "180f",
            "characteristic": "2a19",
            "properties": [
                "Read"
            ],
            "descriptors": [
                {
                    "uuid": "2901"
                },
                {
                    "uuid": "2904"
                }
            ]
        }
    ]
};


//get updates about the bluethooth states
ble.startStateNotifications((state) => log(`BLE state ${state}`));
ble.startStateNotifications((state) => log(`BLE state ${state}`), (err: string) => log(`things when wrong ${err}`));

ble.isEnabled(()=> log(`bluetooth is enabled`), err =>log(`bluetooth is not enabled: ${err}`));

//here we try to enable bluetooth
ble.enable(() => log(`yes it worked, or it was already enabled `), err => log(`nope it didn't work, the user pressed cancel, or we are in iOS: ${err}`));

ble.showBluetoothSettings(() => log(`yes it worked`), () => log(`nope it didn't work`))

//stop getting updates about the bluethooth states
ble.stopStateNotifications()
ble.stopStateNotifications(() => log(`yes it worked`))
ble.stopStateNotifications(() => log(`yes it worked`), () => log(`nope it didn't work`))

//scan 5 seconds
ble.scan([], 5000, (data) => { devices.push(data); });
ble.scan([], 5000, (data) => { devices.push(data); }, () => log(`couldn't connect`) );
ble.scan([], 5000, (data) => { devices.push(data); }, err => log(`couldn't connect: ${err}`) );

//scan continously
ble.startScan([], (data) => { devices.push(data); })
ble.startScan([], (data) => { devices.push(data); }, () => log('couldn\'t connect')  )
ble.startScan([], (data) => { devices.push(data); }, err => log(`couldn't connect: ${err}`) );

////scan continously
ble.startScanWithOptions([], {reportDuplicates:false }, (data) => { devices.push(data); });
ble.startScanWithOptions([], {reportDuplicates:false }, (data) => { devices.push(data); }, err => log(`couldn't connect: ${err}`));

//stop scanning
ble.stopScan(()=> log('all good'), ()=> log('couldn\'t stop scanning'));

//are we conenected to that device?
ble.isConnected(demoDevice.id, () => log(`already connected to this device`));
ble.isConnected(demoDevice.id, () => log(`already connected to this device`), ()=> log(`not yet connected to that device`));

//connect to a specific device
var extendedData : BLECentralPlugin.PeripheralDataExtended;
ble.connect(demoDevice.id, (data)=> extendedData = data, err => log(`couldn't connect to the device: ${err}`) );

//read some data from a characteristic
var charsOfOneOfItsServices = demoExtendedData.characteristics.filter((value) => value.service == demoExtendedData.services[0]);
ble.read(demoDevice.id, charsOfOneOfItsServices[0].service,  charsOfOneOfItsServices[0].characteristic);
ble.read(demoDevice.id, charsOfOneOfItsServices[0].service,  charsOfOneOfItsServices[0].characteristic, (data) => log(`we've received some data`), ()=> log(`couldn't read any data`));

//read the rssi
ble.readRSSI(demoDevice.id, (rssi)=>log(`Device ${demoDevice.name} has an RSSI of ${rssi}`));
ble.readRSSI(demoDevice.id, (rssi)=>log(`Device ${demoDevice.name} has an RSSI of ${rssi}`), err => log(`Unable to read RSSI: ${err}`));


// request mtu
ble.requestMtu(demoDevice.id, 10);
ble.requestMtu(demoDevice.id, 10, () => log('it worked'));
ble.requestMtu(demoDevice.id, 10, () => log('it worked'), () => log('it failed'));

// refreshDeviceCache
ble.refreshDeviceCache(demoDevice.id, 10);
ble.refreshDeviceCache(demoDevice.id, 10, () => log('it worked'));
ble.refreshDeviceCache(demoDevice.id, 10, () => log('it worked'), () => log('it failed'));

var notificationsReceived : number = 0;
//get notified of changes for that characteristic
ble.startNotification(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic,
    (data)=> notificationsReceived++);
ble.startNotification(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic,
    (data)=> notificationsReceived++, err => log(`darn: ${err}`));

//write some data
ble.write(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40));
ble.write(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40), ()=> log(`all good`));
ble.write(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40), ()=> log(`all good`), ()=> log(`could't write`));
//write some data without getting notified
ble.writeWithoutResponse(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40));
ble.writeWithoutResponse(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40), ()=> log(`all good`));
ble.writeWithoutResponse(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, new ArrayBuffer(40), ()=> log(`all good`), ()=> log(`could't write`));

//stop getting notified of changes.
ble.stopNotification(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic);
ble.stopNotification(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, () => log('it worked'));
ble.stopNotification(demoDevice.id, charsOfOneOfItsServices[0].service, charsOfOneOfItsServices[0].characteristic, () => log('it worked'), () => log('it failed'));

//notificationsReceived == 1

//just disconnect
ble.disconnect(demoDevice.id);
ble.disconnect(demoDevice.id, () => log('it worked'));
ble.disconnect(demoDevice.id, () => log('it worked'), () => log('it failed'));
