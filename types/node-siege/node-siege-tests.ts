import siege = require('node-siege');

const attack = siege()
    .args('-t5s -c 10 -b -f./urls.txt')
    .on('stdout', (data) => {})
    .on('stderr', (data) => {})
    .on('error', (err) => {})
    .on('exit', () => {
        if (attack.running) {
            throw new Error('Exit received but still marked as running');
        }
    })
    .run();
