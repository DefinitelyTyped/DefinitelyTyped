import * as weighted from 'weighted';

function testSet() {
    var options = ['Wake Up', 'Snooze Alarm'];
    var weights = [0.25, 0.75];

    console.log('Decision:', weighted.select(options, weights));
}

function testObj() {
    var options = {
        'Wake Up': 0.25,
        'Snooze Alarm': 0.75
    };

    console.log('Decision:', weighted.select(options));
}

function testOverrideRand() {
    var options = ['Wake Up', 'Snooze Alarm'];
	var weights = [0.25, 0.75];

    function rand() {
        return 4; // chosen by fair dice roll.
                  // guaranteed to be random.
    }

    console.log('Decision:', weighted.select(options, weights, rand));
}
