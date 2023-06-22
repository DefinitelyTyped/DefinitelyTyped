import SX127x = require('sx127x-driver');

const sx127x = new SX127x({
    debug: true,
    codingRate: '4/5',
    crc: true,
    frequency: '866E6',
    invertIqReg: false,
    preambleLength: 8,
    resetPin: 24,
    signalBandwidth: '125E3',
    spiBus: 0,
    spiDevice: 0,
    spreadingFactor: 7,
    syncWord: '0x12',
    tempCompensationFactor: false,
    txPower: 7,
});

async () => {
    await sx127x.open();

    await sx127x.setCodingRate('4/5');
    await sx127x.setContinuousReceiveMode();
    await sx127x.setCrc(true);
    await sx127x.setFrequency('433E6');
    await sx127x.setSyncWord('0x12');
    await sx127x.setTxPower(2);

    await sx127x.read();
    const buffer = new ArrayBuffer(10);
    await sx127x.write(buffer);

    await sx127x.close();
};
