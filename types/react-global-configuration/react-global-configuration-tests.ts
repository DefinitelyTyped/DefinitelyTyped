import config from "react-global-configuration";

interface UserConfig {
    a: number;
    b: string;
    c: {
        ca: 123;
        cb: 'ABC';
    };
}

config.set({
    a: 456,
    b: "DEF",
    c: {
        ca: 123,
        cb: 'ABC',
    }
});

config.serialize();

const all = config.get(); // all: any
const a = config.get<number>('a', 789); // a: number
const d = config.get('d'); // d: any
