navigator.serial.addEventListener('connect', event => {
    console.log(event.target);
});

navigator.serial.addEventListener('disconnect', event => {
    console.log(event.target);
});

async function connect() {
    const port = await navigator.serial.requestPort({
        filters: [
            {
                usbVendorId: 0x2341,
            },
        ],
    });
    await port.open({
        baudRate: 9600,
        parity: 'none',
        bufferSize: 128,
    });

    port.onconnect = () => {};
    port.ondisconnect = () => {};

    const info = port.getInfo();
    const vendor = info.vendor;
    port.writable.getWriter();
    port.readable.getReader();

    await port.close();
}

navigator.serial.requestPort().then(port => {
    navigator.serial.getPorts().then(ports => {
        ports.length;
    });
});
