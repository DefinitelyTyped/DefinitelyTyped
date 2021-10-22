import rollADie from 'roll-a-die';

const element = document.createElement('div');
const cb = (values: number[]) => values;

rollADie({ element, numberOfDice: 2, callback: cb }); // $ExpectType void

rollADie({ element, numberOfDice: 1, callback: cb, noSound: true }); // $ExpectType void
rollADie({ element, numberOfDice: 2, callback: cb, noSound: true }); // $ExpectType void

// $ExpectType void
rollADie({
    element,
    numberOfDice: 1,
    callback: values => {
        values; // $ExpectType number[]
    },
    noSound: true
});

rollADie(); // $ExpectError
rollADie({}); // $ExpectError
rollADie({ element: null, numberOfDice: 1 }); // $ExpectError
rollADie({ element, numberOfDice: true }); // $ExpectError
rollADie({ element, numberOfDice: 1, callback: 34 }); // $ExpectError
rollADie({ element, numberOfDice: 1, delay: '5000' }); // $ExpectError
rollADie({ element, numberOfDice: 1, values: { val: 'Hello World!' } }); // $ExpectError
rollADie({ element, numberOfDice: 1, values: [5, '6'] }); // $ExpectError
