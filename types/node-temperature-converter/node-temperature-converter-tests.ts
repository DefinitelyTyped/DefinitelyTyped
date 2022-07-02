import Converter = require('node-temperature-converter');

const celsius = new Converter.Celsius(35);

const obc = {
    name: 'Celsius',
    deg: celsius.degrees,
    fah: celsius.toFahrenheit(),
    kel: celsius.toKelvin(),
    str: celsius.toString()
};

console.table(obc);
