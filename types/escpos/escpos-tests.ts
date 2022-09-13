import { command, USB, Serial, Network, Console, Image, Printer, Screen, Server, Printer2 } from 'escpos';

const usb  = new USB();
const serial = new Serial(0, { baudRate: 9600, autoOpen: false });
const network  = new Network('192.168.1.109', 8080);
const consl  = new Console();

const image = new Image([]);

Image.load('https://github.githubassets.com/images/modules/open_graph/github-logo.png', 'image/png', (pixels: any) => {
    console.log(pixels);
});

let printer = new Printer(usb, { encoding: 'GB18030' });
printer = new Printer(serial, { encoding: 'GB18030' });
printer = new Printer(network, { encoding: 'GB18030' });
printer = new Printer(consl, { encoding: 'GB18030' });
const screen = new Screen(serial, { encoding: 'GB18030' });

usb.open((error: any) => {
    printer
        .align("LT")
        .barcode('1234567', 'EAN8')
        .beep(1, 10)
        .cashdraw(2)
        .close()
        .color(0)
        .control('LF')
        .cut()
        .encode('GB18030')
        .feed()
        .flush()
        .font('A')
        .hardware('INIT')
        .image(image, 'D24')
        .lineSpace()
        .marginBottom(5)
        .marginLeft(5)
        .marginRight(5)
        .model('qsprinter')
        .print('The quick brown fox jumps over the lazy dog')
        .println('The quick brown fox jumps over the lazy dog')
        .pureText('The quick brown fox jumps over the lazy dog', 'GB18030')
        .qrcode('123456789', 3, 'L', 6)
        .qrimage('https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/escpos', {
            type: 'png',
            mode: 'dhdw',
        })
        .raster(image, 'dhdw')
        .size(1, 1)
        .spacing(0)
        .style('BIU')
        .text('The quick brown fox jumps over the lazy dog', 'GB18030');
});

usb.open((error: any) => {
    usb.write(Buffer.from(''), (error: any) => {
        usb.close((error: any) => {});
    });
});

serial.open((error: any) => {
    serial.write(Buffer.from(''), (error: any) => {
        serial.close((error: any) => {}, 1);
    });
});

network.open((error: any) => {
    network.write(Buffer.from(''), (error: any) => {
        network.close((error: any) => {
            console.log(error);
        });
    });
});

consl.open((error: any) => {
    consl.write(Buffer.from(''));
});

const server = new Server(usb);
usb.open(() => {
    server.listen(6000, () => {
        const address = server.address();
        if (address === null) {
            console.log('Server address null');
        } else if (typeof address === 'string') {
            console.log(server.address);
        } else {
            console.log('Your printer is running at', address.port);
        }
    });
});

async function print() {
    const device  = await USB.getDevice();
    const printer = await Printer.create(device);

    printer.text('hello');
    printer.cut();
    printer.close();

    console.log('print job done');
}

print();
