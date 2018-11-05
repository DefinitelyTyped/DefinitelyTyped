/// <reference types="node" />
import gamepad = require('gamepad');

// Initialize the library
gamepad.init();

// List the state of all currently attached devices
for (let i = 0, l = gamepad.numDevices(); i < l; i++) {
    console.log(i, gamepad.deviceAtIndex(i));
}

// Create a game loop and poll for events
setInterval(gamepad.processEvents, 16);
// Scan for new gamepads as a slower rate
setInterval(gamepad.detectDevices, 500);

// Listen for new gamepads being attached
gamepad.on('attach', (deviceID, device) => {
    console.log('attach', {
        deviceID,
        device: {
            deviceID: device.deviceID,
            description: device.description,
            vendorID: device.vendorID,
            productID: device.productID,
            axisStates: device.axisStates,
            buttonStates: device.buttonStates,
        }
    });
});

// Listen for new gamepads being removed
gamepad.on('remove', deviceID => {
    console.log('remove', {
        deviceID
    });
});

// Listen for button down events on all gamepads
gamepad.on('up', (deviceID, buttonID, timestamp) => {
    console.log('up', {
        deviceID,
        buttonID,
        timestamp
    });
});

// Listen for button down events on all gamepads
gamepad.on('down', (deviceID, buttonID, timestamp) => {
    console.log('down', {
        deviceID,
        buttonID,
        timestamp
    });
});

// Listen for move events on all gamepads
gamepad.on('move', (deviceID, axisID, value, lastValue, timestamp) => {
    console.log('move', {
        deviceID,
        axisID,
        value,
        lastValue,
        timestamp
    });
});

// Shutdown the library
gamepad.shutdown();
