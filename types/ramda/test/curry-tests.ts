import * as R from 'ramda';

() => {
  function addFourNumbers(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
  }

  function addTenFixedNumbers(
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    k: 9,
    l: 10,
  ): number {
    return a + b + c + d;
  }

  const x1: (a: number, b: number, c: number, d: number) => number = R.curry(
    addFourNumbers,
  );
  // because of the current way of currying, the following call results in a type error
  const x2: (...args: any) => any = R.curry(addFourNumbers)(1, 2, 4);
  const x3: (c: number, d: number) => number = R.curry(addFourNumbers)(1)(2);
  const x4: (d: number) => number = R.curry(addFourNumbers)(1)(2)(3);
  const y1: number = R.curry(addFourNumbers)(1)(2)(3)(4);
  const y2: number = R.curry(addFourNumbers)(1, 2)(3, 4);
  const y3: number = R.curry(addFourNumbers)(1, 2, 3)(4);
  const y4: number = R.curry(addTenFixedNumbers)(R.__, 1, 2)(0)(3)(R.__, R.__)(
    R.__,
    5,
  )(4)(6, 7)(R.__)(8, R.__, R.__)(9, 10);
  const y5: number = R.curry(addTenFixedNumbers)(R.__, 1, R.__)(R.__, 2)(0, 3)(
    R.__,
    5,
  )(4, R.__)(R.__)(6, R.__, 8, 9, 10)(7);

  function addTwoNumbers(a: number, b: number) {
    return a + b;
  }

  const addTwoNumbersCurried = R.curry(addTwoNumbers);

  const inc = addTwoNumbersCurried(1);
  const z1: number = inc(2);
  const z2: number = addTwoNumbersCurried(2, 3);
};

() => {
  interface Car {
    speed?: number;
  }
  interface FastCar {
    speed: number;
  }

  function typeGuard(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    car: Car,
  ): car is FastCar {
    return car.speed !== undefined;
  }

  const typeGuardCurried = R.curry(typeGuard);

  function drive(fastCar: FastCar) {}

  const cars: Car[] = [{ speed: 65 }, {}];
  for (const car of cars) {
    if (typeGuardCurried(1)(2)(3)(4)(5)(car)) {
      drive(car); // $ExpectError
      // Generic Curry solved a previously non reported issue
    }
  }
};
