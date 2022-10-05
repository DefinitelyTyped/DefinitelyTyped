/*~ https://wicg.github.io/serial/#example-1 */

async function example_1() {
    const filter = { usbVendorId: 0x2341 };
    const port = await navigator.serial.requestPort({ filters: [filter] });

    const connectButton = document.getElementById("connect");
    if (connectButton) {
        connectButton.addEventListener('click', async () => {
            try {
                const port = await navigator.serial.requestPort();
                // Continue connecting to the device attached to |port|.
            } catch (e) {
                // The prompt has been dismissed without selecting a device.
            }
        });
    }
}

/*~ https://wicg.github.io/serial/#example-2 */

// Check to see what ports are available when the page loads.
document.addEventListener('DOMContentLoaded', async () => {
    const ports = await navigator.serial.getPorts();
    // Populate the UI with options for the user to select or
    // automatically connect to devices.
});

navigator.serial.addEventListener('connect', e => {
    // Add |e.port| to the UI or automatically connect.
});

navigator.serial.addEventListener('disconnect', e => {
    // Remove |e.port| from the UI. If the device was open the
    // disconnection can also be observed as a stream error.
});

/*~ https://wicg.github.io/serial/#example-3 */

async function example_3() {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
}

async function example_3b() {
    const port = await navigator.serial.requestPort();
    const info = port.getInfo();
}

/*~ https://wicg.github.io/serial/#readable-example */

async function example_4() {
    const port = await navigator.serial.requestPort();

    while (port.readable) {
        const reader = port.readable.getReader();
        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) {
                    // |reader| has been canceled.
                    break;
                }
                // Do something with |value|...
            }
        } catch (error) {
            // Handle |error|...
        } finally {
            reader.releaseLock();
        }
    }
}

async function example_4b() {
    class LineBreakTransformer implements Transformer<string, string> {
        container: string;

        constructor() {
            this.container = '';
        }

        transform(chunk: string, controller: TransformStreamDefaultController<string>) {
            this.container += chunk;
            const lines = this.container.split('\r\n');
            this.container = lines.pop()!;
            lines.forEach(line => controller.enqueue(line));
        }

        flush(controller: TransformStreamDefaultController<string>) {
            controller.enqueue(this.container);
        }
    }

    const port = await navigator.serial.requestPort();

    if (port.readable) {
        const lineReader = port.readable
            .pipeThrough(new TextDecoderStream())
            .pipeThrough(new TransformStream(new LineBreakTransformer()))
            .getReader();
    }
}

/*~ https://wicg.github.io/serial/#example-5 */

async function example_5() {
    const port = await navigator.serial.requestPort();

    if (port.writable) {
        const encoder = new TextEncoder();
        const writer = port.writable.getWriter();
        await writer.write(encoder.encode("PING"));
        writer.releaseLock();
    }
}

/*~ https://wicg.github.io/serial/#example-6 */

async function example_6() {
    const port = await navigator.serial.requestPort();

    await port.setSignals({ dataTerminalReady: false });
    await new Promise(resolve => setTimeout(resolve, 200));
    await port.setSignals({ dataTerminalReady: true });
}

/*~ https://wicg.github.io/serial/#example-7 */

async function example_7a() {
    const port = await navigator.serial.requestPort();

    if (port.writable) {
        const encoder = new TextEncoder();
        const writer = port.writable.getWriter();
        writer.write(encoder.encode("A long message that will take..."));
        await writer.close();
        await port.close();
    }
}

async function example_7b() {
    const port = await navigator.serial.requestPort();

    if (port.writable) {
        const encoder = new TextEncoderStream();
        const writableStreamClosed = encoder.readable.pipeTo(port.writable);
        const writer = encoder.writable.getWriter();
        writer.write("A long message that will take...");
        writer.close();
        await writableStreamClosed;
        await port.close();
    }
}

async function example_7c() {
    const port = await navigator.serial.requestPort();

    let keepReading = true;
    let reader: ReadableStreamDefaultReader | null;

    async function readUntilClosed() {
        while (port.readable && keepReading) {
            reader = port.readable.getReader();
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        // |reader| has been canceled.
                        break;
                    }
                    // Do something with |value|...
                }
            } catch (error) {
                // Handle |error|...
            } finally {
                reader.releaseLock();
            }
        }

        await port.close();
    }

    readUntilClosed();

    setTimeout(() => {
        // Sometime later...
        keepReading = false;
        if (reader) {
            reader.cancel();
        }
    }, 1_000);
}

/*~ https://wicg.github.io/serial/#example-8 */

async function example_8() {
    // Request a serial port.
    const port = await navigator.serial.requestPort();

    // Then later... revoke permission to the serial port.
    await port.forget();
}
