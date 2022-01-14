import * as Perf from 'react-addons-perf';

Perf.start();
Perf.stop();
const measurements = Perf.getLastMeasurements();
Perf.printInclusive(measurements);
Perf.printExclusive(measurements);
Perf.printWasted(measurements);
Perf.printOperations(measurements);
Perf.printInclusive();
Perf.printExclusive();
Perf.printWasted();
Perf.printOperations();

console.log(Perf.getExclusive());
console.log(Perf.getInclusive());
console.log(Perf.getWasted());
console.log(Perf.getOperations());
console.log(Perf.getExclusive(measurements));
console.log(Perf.getInclusive(measurements));
console.log(Perf.getWasted(measurements));
console.log(Perf.getOperations(measurements));

// Renamed to printOperations().  Please use it instead.
Perf.printDOM(measurements);
Perf.printDOM();
