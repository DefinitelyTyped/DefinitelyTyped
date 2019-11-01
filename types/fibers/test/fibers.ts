import Fiber = require('fibers');

const sleepFiberTest = () => {
  const sleep = (ms: number) => {
    const fiber = Fiber.current!;
    setTimeout(() => fiber.run(), ms);
    Fiber.yield();
  };

  Fiber(() => {
    console.log('wait... ' + new Date());
    sleep(1000);
    console.log('ok... ' + new Date());
  }).run();

  console.log('back in sleepFiberTest');
};

const generatorFiberTest = () => {
  const inc = Fiber((start: number) => {
    let total = start;
    while (true) {
      total += Fiber.yield(total);
    }
  });

  for (let ii = inc.run(1); ii <= 10; ii = inc.run(1)) {
    console.log(ii);
  }
};

const fibonacciGeneratorFiberTest = () => {
  const Fibonacci = () => {
    // Create a new fiber which yields sequential Fibonacci numbers
    const fiber = Fiber(() => {
      for (let [curr, prev] = [0, 1]; ; [curr, prev] = [curr + prev, curr]) {
        Fiber.yield(curr);
      }
    });
    // Return a bound handle to `run` on this fiber
    return fiber.run.bind(fiber);
  };

  const seq = Fibonacci();
  for (let ii: number = seq(); ii <= 1597; ii = seq()) {
    console.log(ii);
  }
};

const fiberErrorTest = () => {
  const fn = Fiber(() => {
    console.log('async work here...');
    Fiber.yield();
    console.log('still working...');
    Fiber.yield();
    console.log('just a little bit more...');
    Fiber.yield();
    throw new Error('oh crap!');
  });

  try {
    while (true) {
      fn.run();
    }
  } catch (e) {
    console.log('safely caught that error!');
    console.log(e.stack);
  }
  console.log('done!');
};
