import * as adcModule from "adc";
import * as atModule from "at";
import * as buttonModule from "button";
import * as eventsModule from "events";
import * as gpioModule from "gpio";
import * as i2cModule from "i2c";
import * as ledModule from "led";
import * as uartModule from "uart";

// test globals

// analog I/O
(() => {
    // $ExpectType number
    analogRead(0);

    // $ExpectType void
    analogWrite(0);
    // $ExpectType void
    analogWrite(0, 0);
    // $ExpectType void
    analogWrite(0, 0, 0);

    // $ExpectType void
    tone(0);
    // $ExpectType void
    tone(0, 0);
    // $ExpectType void
    tone(0, 0, {});
    // $ExpectType void
    tone(0, 0, { duration: 0 });
    // $ExpectType void
    tone(0, 0, { duty: 0 });
    // $ExpectType void
    tone(0, 0, { inversion: 0 });
    // @ts-expect-error
    // $ExpectType void
    tone(0, 0, { unk: "a" });

    // $ExpectType void
    noTone(0);
});

// digital I/O
(() => {
    // $ExpectType void
    pinMode(0);
    // $ExpectType void
    pinMode([0]);
    // $ExpectType void
    pinMode(0, 0);

    // $ExpectType number
    digitalRead(0);

    // $ExpectType void
    digitalWrite(0);
    // $ExpectType void
    digitalWrite([0]);
    // $ExpectType void
    digitalWrite(0, 1);

    // $ExpectType void
    digitalToggle(0);

    // $ExpectType number
    setWatch(() => {}, 0);
    // $ExpectType number
    setWatch((p) => {}, 0);
    // $ExpectType number
    setWatch(() => {}, 0, 1);
    // $ExpectType number
    setWatch(() => {}, 0, 0);

    // $ExpectType void
    clearWatch(0);

    // $ExpectType number[]
    pulseRead(0, 0);
    // $ExpectType number[]
    pulseRead(0, 0, {});
    // $ExpectType number[]
    pulseRead(0, 0, { timeout: 0 });
    // $ExpectType number[]
    pulseRead(0, 0, { startState: 0 });
    // $ExpectType number[]
    pulseRead(0, 0, { mode: 0 });
    // $ExpectType number[]
    pulseRead(0, 0, { trigger: {} });
    // $ExpectType number[]
    pulseRead(0, 0, { trigger: { pin: 0 } });
    // $ExpectType number[]
    pulseRead(0, 0, { trigger: { startState: 0 } });
    // $ExpectType number[]
    pulseRead(0, 0, { trigger: { interval: [0] } });

    // $ExpectType number
    pulseWrite(0, 0, [0]);
});

// globals
(() => {
    // $ExpectType void
    print();
    // $ExpectType void
    print("a");
    // $ExpectType void
    print("a", 0);

    // $ExpectType void
    seed(0);

    // $ExpectType string
    btoa("0");
    // $ExpectType string
    btoa(new Uint8Array(0));

    // $ExpectType Uint8Array
    atob("0");

    // $ExpectType string
    encodeURIComponent("a");

    // $ExpectType string
    decodeURIComponent("a");

    let te00 = new TextEncoder();
    // @ts-expect-error
    let te01 = new TextEncoder("a");
    let te02 = new TextEncoder("ascii");
    let te03 = new TextEncoder("utf-8");

    // $ExpectType Uint8Array
    te00.encode("a");
    // $ExpectType string
    te00.encoding;

    let td00 = new TextDecoder();
    // @ts-expect-error
    let td01 = new TextDecoder("a");
    let td02 = new TextDecoder("ascii");
    let td03 = new TextDecoder("utf-8");

    // $ExpectType string
    td00.decode(new Uint8Array(0));
    // $ExpectType string
    td00.encoding;
});

// errors
(() => {
    let sysError = new SystemError();
    // $ExpectType number
    sysError.errno;
    // $ExpectType string
    sysError.code;
});

// interrupts
(() => {
    // $ExpectType void
    attachInterrupt(0, (p: number, m: number) => {});

    // $ExpectType void
    attachInterrupt(0, () => {}, 4);

    // @ts-expect-error
    attachInterrupt(0, () => {}, 0);

    // $ExpectType void
    detachInterrupt(0);

    // $ExpectType void
    enableInterrupts();

    // $ExpectType void
    disableInterrupts();
});

// timers
(() => {
    // $ExpectType void
    delay(0);

    // $ExpectType number
    millis();

    // $ExpectType void
    delayMicroseconds(0);

    // $ExpectType number
    micros();

    // $ExpectType number
    setTimeout(() => {}, 0);

    // $ExpectType number
    setInterval(() => {}, 0);

    // $ExpectType void
    clearTimeout(0);

    // $ExpectType void
    clearInterval(0);
});

// events module
(() => {
    let ev00: eventsModule.EventEmitter = new eventsModule.EventEmitter();
    let ev01: eventsModule.EventEmitter = new eventsModule.EventEmitter<"foo">();
    let ev02: eventsModule.EventEmitter<"foo"> = new eventsModule.EventEmitter();
    let ev03: eventsModule.EventEmitter<"foo"> = new eventsModule.EventEmitter<"foo">();
    // @ts-expect-error
    let ev04: eventsModule.EventEmitter<"bar"> = new eventsModule.EventEmitter<"foo">();
    let ev05: IEventEmitter = new eventsModule.EventEmitter();
    let ev06: IEventEmitter<"foo"> = new eventsModule.EventEmitter();
    let ev07: IEventEmitter<"foo"> = new eventsModule.EventEmitter<"foo">();
    // @ts-expect-error
    let ev08: IEventEmitter<"bar"> = new eventsModule.EventEmitter<"foo">();

    // $ExpectType void
    ev00.addListener("foo", () => {});
    // $ExpectType void
    ev00.addListener("foo", (x) => {});
    // $ExpectType void
    ev00.addListener("foo", (x, y) => {});
    // $ExpectType void
    ev02.addListener("foo", () => {});
    // @ts-expect-error
    // $ExpectType void
    ev04.addListener("foo", () => {});

    // $ExpectType void
    ev00.emit("foo");
    // $ExpectType void
    ev00.emit("foo", 0);
    // $ExpectType void
    ev00.emit("foo", 0, 1);
    // $ExpectType void
    ev02.emit("foo");
    // @ts-expect-error
    // $ExpectType void
    ev04.emit("foo");

    // $ExpectType void
    ev00.on("foo", () => {});
    // $ExpectType void
    ev00.on("foo", (x) => {});
    // $ExpectType void
    ev00.on("foo", (x, y) => {});
    // $ExpectType void
    ev02.on("foo", () => {});
    // @ts-expect-error
    // $ExpectType void
    ev04.on("foo", () => {});

    // $ExpectType void
    ev00.once("foo", () => {});
    // $ExpectType void
    ev00.once("foo", (x) => {});
    // $ExpectType void
    ev00.once("foo", (x, y) => {});
    // $ExpectType void
    ev02.once("foo", () => {});
    // @ts-expect-error
    // $ExpectType void
    ev04.once("foo", () => {});

    // $ExpectType void
    ev00.removeListener("foo", () => {});
    // $ExpectType void
    ev00.removeListener("foo", (x) => {});
    // $ExpectType void
    ev00.removeListener("foo", (x, y) => {});
    // $ExpectType void
    ev02.removeListener("foo", () => {});
    // @ts-expect-error
    // $ExpectType void
    ev04.removeListener("foo", () => {});

    // $ExpectType void
    ev00.removeAllListeners();
    // $ExpectType void
    ev00.removeAllListeners("foo");
    // $ExpectType void
    ev02.removeAllListeners("foo");
    // @ts-expect-error
    // $ExpectType void
    ev04.removeAllListeners("foo");

    // $ExpectType void
    ev00.off("foo", () => {});
    // $ExpectType void
    ev00.off("foo", (x) => {});
    // $ExpectType void
    ev00.off("foo", (x, y) => {});
    // $ExpectType void
    ev02.off("foo", () => {});
    // @ts-expect-error
    // $ExpectType void
    ev04.off("foo", () => {});

    // $ExpectType ListenerFn[]
    ev00.listeners("foo");
    // $ExpectType ListenerFn[]
    ev02.listeners("foo");
    // @ts-expect-error
    // $ExpectType ListenerFn[]
    ev04.listeners("foo");

    // $ExpectType number
    ev00.listenerCount("foo");
    // $ExpectType number
    ev02.listenerCount("foo");
    // @ts-expect-error
    // $ExpectType number
    ev04.listenerCount("foo");
});

// gpio module
(() => {
    let gp00: gpioModule.GPIO = new gpioModule.GPIO(0);
    let gp01: gpioModule.GPIO = new gpioModule.GPIO(0, INPUT);
    // @ts-expect-error
    let gp02: gpioModule.GPIO = new gpioModule.GPIO(0, CHANGE);
    let gp03: IGPIO = new gpioModule.GPIO(0);

    // $ExpectType number
    gp00.read();

    // $ExpectType void
    gp00.write(LOW);
    // @ts-expect-error
    // $ExpectType void
    gp00.write(3);

    // $ExpectType void
    gp00.toggle();

    // $ExpectType void
    gp00.low();

    // $ExpectType void
    gp00.high();

    // $ExpectType void
    gp00.irq(() => {});
    // $ExpectType void
    gp00.irq((x: number) => {});
    // $ExpectType void
    gp00.irq((x: number, y: number) => {});
    // $ExpectType void
    gp00.irq(() => {}, FALLING);
    // @ts-expect-error
    // $ExpectType void
    gp00.irq(() => {}, 0);
});

// i2c module
(() => {
    let ic00: i2cModule.I2C = new i2cModule.I2C(0);
    let ic01: i2cModule.I2C = new i2cModule.I2C(0, {});
    let ic02: i2cModule.I2C = new i2cModule.I2C(0, { mode: 0 });
    let ic03: i2cModule.I2C = new i2cModule.I2C(0, { baudrate: 0 });
    let ic04: i2cModule.I2C = new i2cModule.I2C(0, { scl: 0 });
    let ic05: i2cModule.I2C = new i2cModule.I2C(0, { sda: 0 });
    let ic06: II2C = new i2cModule.I2C(0);

    // $ExpectType 0
    i2cModule.I2C.MASTER;

    // $ExpectType 1
    i2cModule.I2C.SLAVE;

    // $ExpectType number
    ic00.write("0", 0);
    // $ExpectType number
    ic00.write(new Uint8Array(0), 0);
    // $ExpectType number
    ic00.write("0", 0, 0);
    // $ExpectType number
    ic00.write("0", 0, 0, 0);

    // $ExpectType Uint8Array
    ic00.read(0, 0);
    // $ExpectType Uint8Array
    ic00.read(0, 0, 0);

    // $ExpectType number
    ic00.memWrite("0", 0, 0);
    // $ExpectType number
    ic00.memWrite(new Uint8Array(0), 0, 0);
    // $ExpectType number
    ic00.memWrite("0", 0, 0, 0);
    // $ExpectType number
    ic00.memWrite("0", 0, 0, 0, 0);
    // $ExpectType number
    ic00.memWrite("0", 0, 0, 0, 0, 0);

    // $ExpectType Uint8Array
    ic00.memRead(0, 0, 0);
    // $ExpectType Uint8Array
    ic00.memRead(0, 0, 0, 0);
    // $ExpectType Uint8Array
    ic00.memRead(0, 0, 0, 0, 0);

    // $ExpectType void
    ic00.close();
});

// led module
(() => {
    let led00: ledModule.LED = new ledModule.LED(0);
    let led01: ILED = new ledModule.LED(0);

    // $ExpectType void
    led00.on();

    // $ExpectType void
    led00.off();

    // $ExpectType void
    led00.toggle();

    // $ExpectType number
    led00.read();

    // $ExpectType number
    led00.pin;
});

// require
(() => {
    // $ExpectType any
    require("a");
});

// global boardObject
(() => {
    // $ExpectType string
    board.name;
    // $ExpectType string
    board.uid;
    // $ExpectType number
    board.LED;
    const r025: IGPIO = board.gpio(0);
    const r026: IGPIO = board.gpio(0, OUTPUT);
    const r027: ILED = board.led(25);
    const r028: IADC = board.adc(1);
    const r029: IButton = board.button(0);
    const r030: IButton = board.button(0, {});
    const r031: IButton = board.button(0, { mode: 0 });
    const r032: IButton = board.button(0, { event: 0 });
    const r033: IButton = board.button(0, { debounce: 0 });
    const r034: IPWM = board.pwm(1, 100, 0.4);
    const r035: IPWM = board.pwm(1, 100);
    const r036: IPWM = board.pwm(1);
    const r037: II2C = board.i2c(0, {});
    const r038: II2C = board.i2c(0, { mode: 0 });
    const r039: II2C = board.i2c(0, { baudrate: 0 });
    const r040: II2C = board.i2c(0, { scl: 0 });
    const r041: II2C = board.i2c(0, { sda: 0 });
    const r042: II2C = board.i2c(0);
    const r043: ISPI = board.spi(0, {});
    const r044: ISPI = board.spi(0, { mode: 0 });
    const r045: ISPI = board.spi(0, { baudrate: 0 });
    const r046: ISPI = board.spi(0, { bitorder: 0 });
    const r047: ISPI = board.spi(0, { sck: 0 });
    const r048: ISPI = board.spi(0, { mosi: 0 });
    const r049: ISPI = board.spi(0, { miso: 0 });
    const r050: ISPI = board.spi(0);
});

// global console object
(() => {
    // $ExpectType void
    console.log();
    // $ExpectType void
    console.log("a");
    // $ExpectType void
    console.log(1, "a");

    // $ExpectType void
    console.error();
    // $ExpectType void
    console.error("a");
    // $ExpectType void
    console.error(1, "a");
});

// adc module
(() => {
    const adc00: adcModule.ADC = new adcModule.ADC(0);
    // $ExpectType number
    adc00.read();
    // $ExpectType number
    adc00.pin;

    const adc01: IADC = new adcModule.ADC(0);
    // $ExpectType number
    adc00.read();
    // $ExpectType number
    adc00.pin;
});

// at module
(() => {
    const at00: atModule.ATCommand = new atModule.ATCommand(<uartModule.UART> {});
    const at01: atModule.ATCommand = new atModule.ATCommand(<uartModule.UART> {}, {});
    const at02: atModule.ATCommand = new atModule.ATCommand(<uartModule.UART> {}, { debug: true });
    const at03: atModule.ATCommand = new atModule.ATCommand(<IUART> {});
    const at04: atModule.ATCommand = new atModule.ATCommand(<IUART> {}, {});
    const at05: atModule.ATCommand = new atModule.ATCommand(<IUART> {}, { debug: true });
    const at06: IATCommand = new atModule.ATCommand(<uartModule.UART> {});
    const at07: eventsModule.EventEmitter = new atModule.ATCommand(<uartModule.UART> {});
    const at08: IEventEmitter = new atModule.ATCommand(<uartModule.UART> {});

    // $ExpectType void
    at00.send("a");
    // $ExpectType void
    at00.send("a", (r) => "");
    // $ExpectType void
    at00.send("a", (r) => "", 0);
    // $ExpectType void
    at00.send("a", (r) => "", ["a"]);
    // $ExpectType void
    at00.send("a", (r) => "", 0, {});
    // $ExpectType void
    at00.send("a", (r) => "", 0, { timeout: 0 });
    // $ExpectType void
    at00.send("a", (r) => "", 0, { sendAsData: true });

    // $ExpectType void
    at00.addHandler("", (l, b) => {});

    // $ExpectType void
    at00.removeHandler("");

    // $ExpectType string
    at00.buffer;
});

// button module
(() => {
    const bu00: buttonModule.Button = new buttonModule.Button(0);
    const bu01: buttonModule.Button = new buttonModule.Button(0, {});
    const bu02: buttonModule.Button = new buttonModule.Button(0, { mode: 0 });
    const bu03: buttonModule.Button = new buttonModule.Button(0, { event: 0 });
    const bu04: buttonModule.Button = new buttonModule.Button(0, { debounce: 0 });
    const bu05: IButton = new buttonModule.Button(0);
    const bu06: IEventEmitter = new buttonModule.Button(0);
    const bu07: eventsModule.EventEmitter = new buttonModule.Button(0);

    // $ExpectType number
    bu00.read();

    // $ExpectType void
    bu00.close();

    // $ExpectType void
    bu00.on("click", () => {});

    // @ts-expect-error
    bu00.on("error", () => {});
});
