import * as R from 'ramda';

() => {
    const classyGreeting = (name: { last: string; first: string }) =>
      `The name's ${name.last}, ${name.first} ${name.last}`;
    const yellGreeting = R.o(R.toUpper, classyGreeting);
    const str: string = yellGreeting({ first: 'James', last: 'Bond' });

    const num: number = R.o(R.multiply(10), R.add(10))(-4);
    const num2: number = R.o(R.multiply(10))(R.add(10))(-4);
    const num3: number = R.o(R.multiply(10))(R.add(10), -4);
    const num4: number = R.o(R.multiply(10), R.add(10), -4);
};
