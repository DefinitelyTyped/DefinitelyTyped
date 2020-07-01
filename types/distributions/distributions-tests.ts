import * as distributions from 'distributions';

const normal = distributions.Normal();
normal.cdf(0);
normal.pdf(0);
normal.inv(0);
normal.mean();
normal.median();
normal.variance();

const uniform = distributions.Uniform();
uniform.cdf(0);
uniform.pdf(0);
uniform.inv(0);
uniform.mean();
uniform.median();
uniform.variance();
