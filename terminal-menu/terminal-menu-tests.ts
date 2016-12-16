import * as tty from "tty"; // For typing

let stdin = (<tty.ReadStream> process.stdin);

if(!stdin.isTTY) {
    console.log("Terminal not supported");
    process.exit(0);
}

const MenuContainerFactory = require("terminal-menu");

let menu = MenuContainerFactory({ width: 29, x: 4, y: 2 });
menu.reset();

menu.write('SERIOUS BUSINESS TERMINAL\n');
menu.write('-------------------------\n');

menu.add('ADD TRANSACTION INVOICE');
menu.add('BUSINESS INTELLIGENCE');
menu.add('ACCOUNTS PAYABLE');
menu.add('LEDGER BOOKINGS');
menu.add('INDICATOR CHART METRICS');
menu.add('BACKUP DATA TO FLOPPY DISK');
menu.add('RESTORE FROM FLOPPY DISK');
menu.add('EXIT');

menu.on('select', function (label: string) {
    menu.close();
    console.log('SELECTED: ' + label);
});

stdin.pipe(menu.createStream()).pipe(process.stdout);

stdin.setRawMode(true);

menu.on('close', function () {
    stdin.setRawMode(false);
    stdin.end();
});
