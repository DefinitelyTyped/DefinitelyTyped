import * as random from 'random';
let min = 0;
let max = 0;
let mu = 0;
let sigma = 0;
let lambda = 0;
let p = 0;
let n = 0;

// quick uniform shortcuts
// $ExpectType number
random.float(min = 0, max = 1); // uniform float in [ min, max )
// $ExpectType number
random.int(min = 0, max = 1); // uniform integer in [ min, max ]
// $ExpectType boolean
random.boolean(); // true or false

// uniform
// $ExpectType () => number
random.uniform(min = 0, max = 1); // () => [ min, max )
// $ExpectType () => number
random.uniformInt(min = 0, max = 1); // () => [ min, max ]
// $ExpectType () => boolean
random.uniformBoolean(); // () => [ false, true ]

// normal
// $ExpectType () => number
random.normal(mu = 0, sigma = 1);
// $ExpectType () => number
random.logNormal(mu = 0, sigma = 1);

// bernoulli
// $ExpectType () => number
random.bernoulli(p = 0.5);
// $ExpectType () => number
random.binomial(n = 1, p = 0.5);
// $ExpectType () => number
random.geometric(p = 0.5);

// poisson
// $ExpectType () => number
random.poisson(lambda = 1);
// $ExpectType () => number
random.exponential(lambda = 1);

// misc
// $ExpectType () => number
random.irwinHall(n);
// $ExpectType () => number
random.bates(n);
const alpha = 0;
// $ExpectType () => number
random.pareto(alpha);
