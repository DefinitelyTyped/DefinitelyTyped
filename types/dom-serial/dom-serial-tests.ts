navigator.serial.addEventListener("connect", event => {
    console.log(event.target);
});

navigator.serial.addEventListener("disconnect", event => {
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
        parity: "none",
        bufferSize: 128,
    });

    port.onconnect = () => {};
    port.ondisconnect = () => {};

    const info = port.getInfo();
    const vendor = info.vendor;
    port.writable.getWriter();
    port.readable.getReader();

    const signals = await port.getSignals();
    const cts = signals.clearToSend;

    await port.setSignals({
        dataTerminalReady: true,
        requestToSend: false,
        break: false,
    });

    await port.close();

    await port.forget();
}

navigator.serial.requestPort().then(port => {
    navigator.serial.getPorts().then(ports => {
        ports.length;
    });
});
