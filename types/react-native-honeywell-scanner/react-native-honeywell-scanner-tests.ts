import HoneywellScanner from 'react-native-honeywell-scanner';

class Example {
    async test() {
        if (!HoneywellScanner.isCompatible) {
            return;
        }

        const readerConnected = await HoneywellScanner.startReader();

        if (!readerConnected) {
            return;
        }

        HoneywellScanner.on('barcodeReadSuccess', event => {
            // TODO
        });

        HoneywellScanner.on('barcodeReadFail', () => {
            // TODO
        });

        await HoneywellScanner.stopReader();
    }
}
