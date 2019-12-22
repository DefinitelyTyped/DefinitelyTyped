import fs = require('fs');
import portAudio = require('naudiodon');

const devices = portAudio.getDevices();

devices[0].hostAPIName;

const hostAPIs = portAudio.getHostAPIs();

hostAPIs.defaultHostAPI;

const ao = portAudio.AudioIO({
    outOptions: {
        channelCount: 2,
        sampleFormat: portAudio.SampleFormat16Bit,
        sampleRate: 48000,
        deviceId: -1
    }
});

const rs = fs.createReadStream('steam_48000.wav');
rs.pipe(ao);
ao.start();

ao.quit();
