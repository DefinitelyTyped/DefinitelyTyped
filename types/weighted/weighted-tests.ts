/// <reference lib="dom" />
import weighted = require('weighted');
import { select } from 'weighted';

function testSet() {
    const options = ['Wake Up', 'Snooze Alarm'];
    const weights = [0.25, 0.75];

    console.log('Decision:', weighted(options, weights));
    console.log('Decision:', weighted.select(options, weights));
    console.log('Decision:', select(options, weights));
}

function testObj() {
    const options = {
        'Wake Up': 0.25,
        'Snooze Alarm': 0.75,
    };

    console.log('Decision:', weighted(options));
    console.log('Decision:', weighted.select(options));
    console.log('Decision:', select(options));
}

function testOverrideRand() {
    const options = ['Wake Up', 'Snooze Alarm'];
    const weights = [0.25, 0.75];

    function rand() {
        return 4; // chosen by fair dice roll.
        // guaranteed to be random.
    }

    console.log('Decision:', weighted(options, weights, rand));
    console.log('Decision:', weighted.select(options, weights, rand));
    console.log('Decision:', select(options, weights, rand));
}
