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

// @ts-expect-error
rollADie();
// @ts-expect-error
rollADie({});
// @ts-expect-error
rollADie({ element: null, numberOfDice: 1 });
// @ts-expect-error
rollADie({ element, numberOfDice: true });
// @ts-expect-error
rollADie({ element, numberOfDice: 1, callback: 34 });
// @ts-expect-error
rollADie({ element, numberOfDice: 1, delay: '5000' });
// @ts-expect-error
rollADie({ element, numberOfDice: 1, values: { val: 'Hello World!' } });
// @ts-expect-error
rollADie({ element, numberOfDice: 1, values: [5, '6'] });
