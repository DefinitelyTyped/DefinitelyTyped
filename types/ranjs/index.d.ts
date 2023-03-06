// Type definitions for ranjs 1.22
// Project: https://synesenom.github.io/ran/
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

declare namespace core {
    function seed(value: number | string): void;

    function float(max: number): number;
    function float(min: number, max: number): number; // tslint:disable-line unified-signatures
    function float(min: number, max: number, n: number): number[];

    function int(max: number): number;
    function int(min: number, max: number): number; // tslint:disable-line unified-signatures
    function int(min: number, max: number, n: number): number[];

    function choice(): undefined;
    function choice<T>(values: ReadonlyArray<T>): T;
    function choice<T>(values: ReadonlyArray<T>, n: number): T[];

    function char(): undefined;
    function char(values: string): string;
    function char(values: string, n: number): string[];

    function shuffle<T>(values: ReadonlyArray<T>): T[];

    function coin<T, U>(head: T, tail: U, p?: number): T | U;
    function coin<T, U>(head: T, tail: U, p: number, n: number): Array<T | U>;
}

declare namespace _dist {
    const stateBrand: unique symbol;
    interface State<T> {
        [stateBrand]: T;
    }

    interface Distribution<T> {
        type(): 'discrete' | 'continuous';
        support(): Array<{
            value: number;
            closed: boolean;
        }>;

        seed(value: number | string): this;
        save(): State<T>;
        load(state: State<T>): this;

        sample(): number;
        sample(n: number): number[];

        pdf(x: number): number;
        cdf(x: number): number;
        q(p: number): number | undefined;
        survival(x: number): number;
        hazard(x: number): number;
        cHazard(x: number): number;
        logPdf(x: number): number;

        lnL(data: readonly number[]): number;
        aic(data: readonly number[]): number;
        bic(data: readonly number[]): number;

        test(
            values: readonly number[],
        ): {
            statistics: number;
            passed: boolean;
        };
    }
    abstract class Distribution<T> {}
}

declare namespace dist {
    type State<T> = _dist.State<T>;
    type Distribution<T = any> = _dist.Distribution<T>;

    class Alpha extends _dist.Distribution<'Alpha'> {
        constructor(alpha?: number);
    }
    class Anglit extends _dist.Distribution<'Anglit'> {}
    class Arcsine extends _dist.Distribution<'Arcsine'> {
        constructor(a?: number, b?: number);
    }
    class BaldingNichols extends _dist.Distribution<'BaldingNichols'> {
        constructor(F?: number, p?: number);
    }
    class Bates extends _dist.Distribution<'Bates'> {
        constructor(n?: number, a?: number, b?: number);
    }
    class Benini extends _dist.Distribution<'Benini'> {
        constructor(alpha?: number, beta?: number, sigma?: number);
    }
    class BenktanderII extends _dist.Distribution<'BenktanderII'> {
        constructor(a?: number, b?: number);
    }
    class Bernoulli extends _dist.Distribution<'Bernoulli'> {
        constructor(p?: number);
    }
    class BetaBinomial extends _dist.Distribution<'BetaBinomial'> {
        constructor(n?: number, alpha?: number, beta?: number);
    }
    class BetaPrime extends _dist.Distribution<'BetaPrime'> {
        constructor(alpha?: number, beta?: number);
    }
    class BetaRectangular extends _dist.Distribution<'BetaRectangular'> {
        constructor(alpha?: number, beta?: number, theta?: number, a?: number, b?: number);
    }
    class Beta extends _dist.Distribution<'Beta'> {
        constructor(alpha?: number, beta?: number);
    }
    class Binomial extends _dist.Distribution<'Binomial'> {
        constructor(n?: number, p?: number);
    }
    class BirnbaumSaunders extends _dist.Distribution<'BirnbaumSaunders'> {
        constructor(mu?: number, beta?: number, gamma?: number);
    }
    class BorelTanner extends _dist.Distribution<'BorelTanner'> {
        constructor(mu?: number, n?: number);
    }
    class Borel extends _dist.Distribution<'Borel'> {
        constructor(mu?: number);
    }
    class BoundedPareto extends _dist.Distribution<'BoundedPareto'> {
        constructor(L?: number, H?: number, alpha?: number);
    }
    class Bradford extends _dist.Distribution<'Bradford'> {
        constructor(c?: number);
    }
    class Burr extends _dist.Distribution<'Burr'> {
        constructor(c?: number, k?: number);
    }
    class Categorical extends _dist.Distribution<'Categorical'> {
        constructor(weights?: readonly number[], min?: number);
    }
    class Cauchy extends _dist.Distribution<'Cauchy'> {
        constructor(x0?: number, gamma?: number);
    }
    class Chi extends _dist.Distribution<'Chi'> {
        constructor(k?: number);
    }
    class Chi2 extends _dist.Distribution<'Chi2'> {
        constructor(k?: number);
    }
    class Dagum extends _dist.Distribution<'Dagum'> {
        constructor(p?: number, a?: number, b?: number);
    }
    class Degenerate extends _dist.Distribution<'Degenerate'> {
        constructor(x0?: number);
    }
    class Delaporte extends _dist.Distribution<'Delaporte'> {
        constructor(alpha?: number, beta?: number, lambda?: number);
    }
    class DiscreteUniform extends _dist.Distribution<'DiscreteUniform'> {
        constructor(xmin?: number, xmax?: number);
    }
    class DiscreteWeibull extends _dist.Distribution<'DiscreteWeibull'> {
        constructor(q?: number, beta?: number);
    }
    class DoubleGamma extends _dist.Distribution<'DoubleGamma'> {
        constructor(alpha?: number, beta?: number);
    }
    class DoubleWeibull extends _dist.Distribution<'DoubleWeibull'> {
        constructor(lambda?: number, k?: number);
    }
    class DoublyNoncentralBeta extends _dist.Distribution<'DoublyNoncentralBeta'> {
        constructor(alpha?: number, meta?: number, lambda1?: number, lambda2?: number);
    }
    class DoublyNoncentralF extends _dist.Distribution<'DoublyNoncentralF'> {
        constructor(d1?: number, d2?: number, lambda1?: number, lambda2?: number);
    }
    class DoublyNoncentralT extends _dist.Distribution<'DoublyNoncentralT'> {
        constructor(nu?: number, mu?: number, theta?: number);
    }
    class Erlang extends _dist.Distribution<'Erlang'> {
        constructor(k?: number, lambda?: number);
    }
    class ExponentialLogarithmic extends _dist.Distribution<'ExponentialLogarithmic'> {
        constructor(p?: number, beta?: number);
    }
    class Exponential extends _dist.Distribution<'Exponential'> {
        constructor(lambda?: number);
    }
    class F extends _dist.Distribution<'F'> {
        constructor(d1?: number, d2?: number);
    }
    class FlorySchulz extends _dist.Distribution<'FlorySchulz'> {
        constructor(a?: number);
    }
    class Frechet extends _dist.Distribution<'Frechet'> {
        constructor(alpha?: number, s?: number, m?: number);
    }
    class FisherZ extends _dist.Distribution<'FisherZ'> {
        constructor(d1?: number, d2?: number);
    }
    class Gamma extends _dist.Distribution<'Gamma'> {
        constructor(alpha?: number, beta?: number);
    }
    class GammaGompertz extends _dist.Distribution<'GammaGompertz'> {
        constructor(b?: number, s?: number, beta?: number);
    }
    class GeneralizedExponential extends _dist.Distribution<'GeneralizedExponential'> {
        constructor(a?: number, b?: number, c?: number);
    }
    class GeneralizedExtremeValue extends _dist.Distribution<'GeneralizedExtremeValue'> {
        constructor(c?: number);
    }
    class GeneralizedGamma extends _dist.Distribution<'GeneralizedGamma'> {
        constructor(a?: number, d?: number, p?: number);
    }
    class GeneralizedHermite extends _dist.Distribution<'GeneralizedHermite'> {
        constructor(a1?: number, am?: number, m?: number);
    }
    class GeneralizedLogistic extends _dist.Distribution<'GeneralizedLogistic'> {
        constructor(mu?: number, s?: number, c?: number);
    }
    class GeneralizedNormal extends _dist.Distribution<'GeneralizedNormal'> {
        constructor(mu?: number, alpha?: number, beta?: number);
    }
    class GeneralizedPareto extends _dist.Distribution<'GeneralizedPareto'> {
        constructor(mu?: number, sigma?: number, xi?: number);
    }
    class Geometric extends _dist.Distribution<'Geometric'> {
        constructor(p?: number);
    }
    class Gilbrat extends _dist.Distribution<'Gilbrat'> {
        constructor();
    }
    class Gompertz extends _dist.Distribution<'Gompertz'> {
        constructor(eta?: number, beta?: number);
    }
    class Gumbel extends _dist.Distribution<'Gumbel'> {
        constructor(mu?: number, beta?: number);
    }
    class HalfGeneralizedNormal extends _dist.Distribution<'HalfGeneralizedNormal'> {
        constructor(alpha?: number, beta?: number);
    }
    class HalfLogistic extends _dist.Distribution<'HalfLogistic'> {
        constructor();
    }
    class HalfNormal extends _dist.Distribution<'HalfNormal'> {
        constructor(sigma?: number);
    }
    class HeadsMinusTails extends _dist.Distribution<'HeadsMinusTails'> {
        constructor(n?: number);
    }
    class Hoyt extends _dist.Distribution<'Hoyt'> {
        constructor(q?: number, omega?: number);
    }
    class HyperbolicSecant extends _dist.Distribution<'HyperbolicSecant'> {
        constructor();
    }
    class Hyperexponential extends _dist.Distribution<'Hyperexponential'> {
        constructor(parameters?: Array<{ weight: number; rate: number }>);
    }
    class Hypergeometric extends _dist.Distribution<'Hypergeometric'> {
        constructor(N?: number, K?: number, n?: number);
    }
    class InverseChi2 extends _dist.Distribution<'InverseChi'> {
        constructor(nu?: number);
    }
    class InverseGamma extends _dist.Distribution<'InverseGamma'> {
        constructor(alpha?: number, beta?: number);
    }
    class InverseGaussian extends _dist.Distribution<'InverseGaussian'> {
        constructor(mu?: number, lambda?: number);
    }
    class InvertedWeibull extends _dist.Distribution<'InvertedWeibull'> {
        constructor(c?: number);
    }
    class IrwinHall extends _dist.Distribution<'IrwinHall'> {
        constructor(n?: number);
    }
    class JohnsonSB extends _dist.Distribution<'JohnsonSB'> {
        constructor(gamma?: number, delta?: number, lambda?: number, xi?: number);
    }
    class JohnsonSU extends _dist.Distribution<'JohnsonSU'> {
        constructor(gamma?: number, delta?: number, lambda?: number, xi?: number);
    }
    class Kumaraswamy extends _dist.Distribution<'Kumaraswamy'> {
        constructor(alpha?: number, beta?: number);
    }
    class Laplace extends _dist.Distribution<'Laplace'> {
        constructor(mu?: number, b?: number);
    }
    class Levy extends _dist.Distribution<'Levy'> {
        constructor(mu?: number, c?: number);
    }
    class Lindley extends _dist.Distribution<'Lindley'> {
        constructor(theta?: number);
    }
    class Logarithmic extends _dist.Distribution<'Logarithmic'> {
        constructor(a?: number, b?: number);
    }
    class LogCauchy extends _dist.Distribution<'LogCauchy'> {
        constructor(mu?: number, sigma?: number);
    }
    class LogGamma extends _dist.Distribution<'LogGamma'> {
        constructor(alpha?: number, beta?: number, mu?: number);
    }
    class Logistic extends _dist.Distribution<'Logistic'> {
        constructor(mu?: number, s?: number);
    }
    class LogisticExponential extends _dist.Distribution<'LogisticExponential'> {
        constructor(lambda?: number, kappa?: number);
    }
    class LogitNormal extends _dist.Distribution<'LogitNormal'> {
        constructor(mu?: number, sigma?: number);
    }
    class LogLaplace extends _dist.Distribution<'LogLaplace'> {
        constructor(mu?: number, b?: number);
    }
    class LogLogistic extends _dist.Distribution<'LogLogistic'> {
        constructor(alpha?: number, beta?: number);
    }
    class LogNormal extends _dist.Distribution<'LogNormal'> {
        constructor(mu?: number, sigma?: number);
    }
    class LogSeries extends _dist.Distribution<'LogSeries'> {
        constructor(p?: number);
    }
    class Lomax extends _dist.Distribution<'Lomax'> {
        constructor(lambda?: number, alpha?: number);
    }
    class Makeham extends _dist.Distribution<'Makeham'> {
        constructor(alpha?: number, beta?: number, lambda?: number);
    }
    class MaxwellBoltzmann extends _dist.Distribution<'MaxwellBoltzmann'> {
        constructor(a?: number);
    }
    class Mielke extends _dist.Distribution<'Mielke'> {
        constructor(k?: number, s?: number);
    }
    class Moyal extends _dist.Distribution<'Moyal'> {
        constructor(mu?: number, sigma?: number);
    }
    class Nakagami extends _dist.Distribution<'Nakagami'> {
        constructor(m?: number, omega?: number);
    }
    class NegativeBinomial extends _dist.Distribution<'NegativeBinomial'> {
        constructor(r?: number, p?: number);
    }
    class NegativeHypergeometric extends _dist.Distribution<'NegativeHypergeometric'> {
        constructor(N?: number, K?: number, r?: number);
    }
    class NeymanA extends _dist.Distribution<'NeymanA'> {
        constructor(lambda?: number, theta?: number);
    }
    class NoncentralBeta extends _dist.Distribution<'NoncentralBeta'> {
        constructor(alpha?: number, beta?: number, lambda?: number);
    }
    class NoncentralChi extends _dist.Distribution<'NoncentralChi'> {
        constructor(k?: number, lambda?: number);
    }
    class NoncentralChi2 extends _dist.Distribution<'NoncentralChi'> {
        constructor(k?: number, lambda?: number);
    }
    class NoncentralF extends _dist.Distribution<'NoncentralF'> {
        constructor(d1?: number, d2?: number, lambda?: number);
    }
    class NoncentralT extends _dist.Distribution<'NoncentralT'> {
        constructor(nu?: number, mu?: number);

        static fnm(nu: number, mu: number, x: number): number;
    }
    class Normal extends _dist.Distribution<'Normal'> {
        constructor(mu?: number, sigma?: number);
    }
    class Pareto extends _dist.Distribution<'Pareto'> {
        constructor(xmin?: number, alpha?: number);
    }
    class PERT extends _dist.Distribution<'PERT'> {
        constructor(a?: number, b?: number, c?: number);
    }
    class Poisson extends _dist.Distribution<'Poisson'> {
        constructor(lambda?: number);
    }
    class PolyaAeppli extends _dist.Distribution<'PolyaAeppli'> {
        constructor(lambda?: number, theta?: number);
    }
    class Power extends _dist.Distribution<'Power'> {
        constructor(a?: number);
    }
    class QExponential extends _dist.Distribution<'QExponential'> {
        constructor(q?: number, lambda?: number);
    }
    class R extends _dist.Distribution<'R'> {
        constructor(c?: number);
    }
    class Rademacher extends _dist.Distribution<'Rademacher'> {
        constructor();
    }
    class RaisedCosine extends _dist.Distribution<'RaisedCosine'> {
        constructor(mu?: number, s?: number);
    }
    class Rayleigh extends _dist.Distribution<'Rayleigh'> {
        constructor(sigma?: number);
    }
    class Reciprocal extends _dist.Distribution<'Reciprocal'> {
        constructor(a?: number, b?: number);
    }
    class ReciprocalInverseGaussian extends _dist.Distribution<'ReciprocalInverseGaussian'> {
        constructor(mu?: number, lambda?: number);
    }
    class Rice extends _dist.Distribution<'Rice'> {
        constructor(nu?: number, sigma?: number);
    }
    class ShiftedLogLogistic extends _dist.Distribution<'ShiftedLogLogistic'> {
        constructor(mu?: number, sigma?: number, xi?: number);
    }
    class Skellam extends _dist.Distribution<'Skellam'> {
        constructor(mu1?: number, mu2?: number);
    }
    class SkewNormal extends _dist.Distribution<'SkewNormal'> {
        constructor(xi?: number, omega?: number, alpha?: number);
    }
    class Slash extends _dist.Distribution<'Slash'> {
        constructor();
    }
    class Soliton extends _dist.Distribution<'Soliton'> {
        constructor(N?: number);
    }
    class StudentT extends _dist.Distribution<'StudentT'> {
        constructor(nu?: number);
    }
    class StudentZ extends _dist.Distribution<'StudentZ'> {
        constructor(n?: number);
    }
    class Trapezoidal extends _dist.Distribution<'Trapezoidal'> {
        constructor(a?: number, b?: number, c?: number, d?: number);
    }
    class Triangular extends _dist.Distribution<'Triangular'> {
        constructor(a?: number, b?: number, c?: number);
    }
    class TukeyLambda extends _dist.Distribution<'TukeyLambda'> {
        constructor(lambda?: number);
    }
    class Uniform extends _dist.Distribution<'Uniform'> {
        constructor(xmin?: number, xmax?: number);
    }
    class UQuadratic extends _dist.Distribution<'UQuadratic'> {
        constructor(a?: number, b?: number);
    }
    class VonMises extends _dist.Distribution<'VonMises'> {
        constructor(kappa?: number);
    }
    class Weibull extends _dist.Distribution<'Weibull'> {
        constructor(lambda?: number, k?: number);
    }
    class Wigner extends _dist.Distribution<'Wigner'> {
        constructor(R?: number);
    }
    class YuleSimon extends _dist.Distribution<'YuleSimon'> {
        constructor(rho?: number);
    }
    class Zeta extends _dist.Distribution<'Zeta'> {
        constructor(s?: number);
    }
    class Zipf extends _dist.Distribution<'Zipf'> {
        constructor(s?: number, N?: number);
    }
}

declare namespace la {
    class Vector {
        constructor(arg?: number | readonly number[] | Vector);

        v(): number[];

        i(i: number): number;
        i(i: number, value: number): void;

        f(func: (d: number) => number): Vector;
        scale(s: number): Vector;

        add(vec: Vector): Vector;
        dot(vec: Vector): number;
    }

    class Matrix {
        constructor(arg?: number | ReadonlyArray<ReadonlyArray<number>> | Matrix);

        m(): number[][];

        ij(i: number, j: number): number;
        ij(i: number, j: number, value: number): void;

        f(func: (d: number) => number): Matrix;
        scale(s: number): Matrix;

        add(mat: Matrix): Matrix;
        mult(max: Matrix): Matrix;
        t(): Matrix;
        act(vec: Vector): Vector;
        ldl(): { D: Matrix; L: Matrix };
    }
}

declare namespace _mc {
    enum State {}

    interface MCMC {
        state(): State;
        statistics(): Array<{
            mean: number;
            std: number;
            cv: number;
        }>;
        ar(): number;
        ac(): number[];
        iterate(
            callback?: (x: number[], accepted: boolean) => void,
            warmUp?: boolean,
        ): {
            x: number[];
            accepted: boolean;
        };
        warmUp(progress?: (percentage: number) => void, maxBatches?: number): void;
        sample(progress?: (percentage: number) => void, size?: number): number[][];
    }
    abstract class MCMC {}
}

declare namespace mc {
    type State = _mc.State;
    type MCMC = _mc.MCMC;

    function gr(samples: ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>>, maxLength?: number): number[][];

    class RWM extends _mc.MCMC {
        constructor(
            logDensity: (x: number[]) => number,
            config?: {
                dim?: number | undefined;
                maxHistory?: number | undefined;
            },
            initialState?: State,
        );
    }
}

declare namespace test {
    function bartlett(dataSets: ReadonlyArray<ReadonlyArray<number>>, alpha: number): { chi2: number; passed: boolean };
    function mannWhitney(dataSets: ReadonlyArray<ReadonlyArray<number>>, alpha: number): { U: number; passed: boolean };
}

declare namespace _ts {
    interface Commons {
        reset(): void;
        update(x: readonly number[]): void;
    }
    abstract class Commons {}
}

declare namespace ts {
    class Cov extends _ts.Commons {
        constructor(dimension?: number);

        compute(): la.Matrix;
    }

    class AC extends _ts.Commons {
        constructor(dimension?: number, range?: number, maxSize?: number);

        compute(): number[][];
    }
}

export { core, dist, la, mc, test, ts };
export as namespace ranjs;
