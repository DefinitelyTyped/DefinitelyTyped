import * as pd from "probability-distributions";

pd.prng(0); // $ExpectType number
pd.rbeta(0, 0, 0, 0); // $ExpectType number[]
pd.rbinom(0, 0, 0); // $ExpectType number[]
pd.rcauchy(0, 0, 0); // $ExpectType number[]
pd.rchisq(0, 0, 0); // $ExpectType number[]
pd.dexp(0, 0); // $ExpectType number
pd.rexp(0, 0); // $ExpectType number[]
pd.rf(0, 0, 0); // $ExpectType number[]
pd.rgamma(0, 0, 0); // $ExpectType number[]
pd.rint(0, 0, 0, 0); // $ExpectType number[]
pd.rlaplace(0, 0, 0); // $ExpectType number[]
pd.rlnorm(0, 0, 0); // $ExpectType number[]
pd.rnbinom(0, 0, 0, 0); // $ExpectType number[]
pd.dnorm(0, 0, 0); // $ExpectType number[]
pd.rnorm(0, 0, 0); // $ExpectType number[]
pd.dpois(0, 0); // $ExpectType number[]
pd.rpois(0, 0); // $ExpectType number[]
pd.dunif(0, 0, 0); // $ExpectType number
pd.runif(0, 0, 0); // $ExpectType number[]
pd.rword(0, ""); // $ExpectType string
pd.sample([], 0, true, 0); // $ExpectType any[]
pd.visualize([], "", 0); // $ExpectType any
pd.rfml(0, 0, 0, 0, 0); // $ExpectType number[]
pd.ruf(0); // $ExpectType number[]
