import QrTerminal = require("qrcode-terminal");

QrTerminal.setErrorLevel("H");

QrTerminal.generate("test");
QrTerminal.generate("test", { small: true });
QrTerminal.generate("test", { small: true }, qr => {
    const double_qr = `${qr}\n${qr}`;
});

const a = QrTerminal.error;
