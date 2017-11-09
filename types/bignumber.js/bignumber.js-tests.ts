let x: BigNumber.BigNumber = new BigNumber(9);
let y = new BigNumber(x);

BigNumber(435.345);

new BigNumber('5032485723458348569331745.33434346346912144534543');
new BigNumber('4.321e+4');
new BigNumber('-735.0918e-430');
new BigNumber(Infinity);
new BigNumber(NaN);
new BigNumber('.5');
new BigNumber('+2');
new BigNumber(-10110100.1, 2);
new BigNumber(-0b10110100);
new BigNumber('123412421.234324', 5);
new BigNumber('ff.8', 16);
new BigNumber('0xff.8');

new BigNumber(9, 2);

new BigNumber(96517860459076817.4395);

new BigNumber('blurgh');

BigNumber.config({ DECIMAL_PLACES: 5 });
new BigNumber(1.23456789);
new BigNumber(1.23456789, 10);

BigNumber.config({ DECIMAL_PLACES: 5 });
let BN = BigNumber.another({ DECIMAL_PLACES: 9 });

x = new BigNumber(1);
y = new BN(1);

x.div(3);
y.div(3);

BN = BigNumber.another();
BN.config({ DECIMAL_PLACES: 9 });

BigNumber.config({ DECIMAL_PLACES: 5 });
BigNumber.set({ DECIMAL_PLACES: 5 });
BigNumber.config(5);

BigNumber.config({ ROUNDING_MODE: 0 });
BigNumber.config(undefined, BigNumber.ROUND_UP);

BigNumber.config({ EXPONENTIAL_AT: 2 });
new BigNumber(12.3);
new BigNumber(123);
new BigNumber(0.123);
new BigNumber(0.0123);

BigNumber.config({ EXPONENTIAL_AT: [-7, 20] });
new BigNumber(123456789);
new BigNumber(0.000000123);

BigNumber.config({ EXPONENTIAL_AT: 1e+9 });

BigNumber.config({ EXPONENTIAL_AT: 0 });

BigNumber.config({ RANGE: 500 });
BigNumber.config().RANGE;
new BigNumber('9.999e499');
new BigNumber('1e500');
new BigNumber('1e-499');
new BigNumber('1e-500');

BigNumber.config({ RANGE: [-3, 4] });
new BigNumber(99999);
new BigNumber(100000);
new BigNumber(0.001);
new BigNumber(0.0001);

BigNumber.config({ ERRORS: false });

BigNumber.config({ CRYPTO: true });
BigNumber.config().CRYPTO;
BigNumber.random();

BigNumber.config({ MODULO_MODE: BigNumber.EUCLID });
BigNumber.config({ MODULO_MODE: 9 });

BigNumber.config({ POW_PRECISION: 100 });

BigNumber.config({
    FORMAT: {
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3,
        secondaryGroupSize: 0,
        fractionGroupSeparator: ' ',
        fractionGroupSize: 0
    }
});

BigNumber.config({
    DECIMAL_PLACES: 40,
    ROUNDING_MODE: BigNumber.ROUND_HALF_CEIL,
    EXPONENTIAL_AT: [-10, 20],
    RANGE: [-500, 500],
    ERRORS: true,
    CRYPTO: true,
    MODULO_MODE: BigNumber.ROUND_FLOOR,
    POW_PRECISION: 80,
    FORMAT: {
        groupSize: 3,
        groupSeparator: ' ',
        decimalSeparator: ','
    }
});

BigNumber.config(40, 7, [-10, 20], 500, 1, 1, 3, 80);

const obj = BigNumber.config();
obj.ERRORS;
obj.RANGE;

x = new BigNumber('3257869345.0378653');
BigNumber.max(4e9, x, '123456789.9');

let arr = [12, '13', new BigNumber(14)];
BigNumber.max(arr);

x = new BigNumber('3257869345.0378653');
BigNumber.min(4e9, x, '123456789.9');

arr = [2, new BigNumber(-14), '-15.9999', -12];
BigNumber.min(arr);

BigNumber.config({ DECIMAL_PLACES: 10 });
BigNumber.random();
BigNumber.random(20);

BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_CEIL });
BigNumber.config({ ROUNDING_MODE: 2 });

x = new BigNumber(-0.8);
y = x.absoluteValue();
let z = y.abs();

x = new BigNumber(1.3);
x.ceil();
y = new BigNumber(-1.8);
y.ceil();

x = new BigNumber(Infinity);
y = new BigNumber(5);
x.comparedTo(y);
x.comparedTo(x.minus(1));
y.cmp(NaN);
y.cmp('110', 2);

x = new BigNumber(123.45);
x.decimalPlaces();
y = new BigNumber('9.9e-101');
y.dp();

x = new BigNumber(355);
y = new BigNumber(113);
x.dividedBy(y);
x.div(5);
x.div(47, 16);

x = new BigNumber(5);
y = new BigNumber(3);
x.dividedToIntegerBy(y);
x.divToInt(0.7);
x.divToInt('0.f', 16);

0 === 1e-324;
x = new BigNumber(0);
x.equals('1e-324');
BigNumber(-0).eq(x);
BigNumber(255).eq('ff', 16);

y = new BigNumber(NaN);
y.equals(NaN);

x = new BigNumber(1.8);
x.floor();
y = new BigNumber(-1.3);
y.floor();

0.1 > (0.3 - 0.2); // tslint:disable-line binary-expression-operand-order
x = new BigNumber(0.1);
x.greaterThan(BigNumber(0.3).minus(0.2));
BigNumber(0).gt(x);
BigNumber(11, 3).gt(11.1, 2);

x = new BigNumber(0.3).minus(0.2);
x.greaterThanOrEqualTo(0.1);
BigNumber(1).gte(x);
BigNumber(10, 18).gte('i', 36);

x = new BigNumber(1);
x.isFinite();
y = new BigNumber(Infinity);
y.isFinite();

x = new BigNumber(1);
x.isInteger();
y = new BigNumber(123.456);
y.isInt();

x = new BigNumber(NaN);
x.isNaN();
y = new BigNumber('Infinity');
y.isNaN();

x = new BigNumber(-0);
x.isNegative();
y = new BigNumber(2);
y.isNeg();

x = new BigNumber(-0);
x.isZero() && x.isNeg();
y = new BigNumber(Infinity);
y.isZero();

x = new BigNumber(0.3).minus(0.2);
x.lessThan(0.1);
BigNumber(0).lt(x);
BigNumber(11.1, 2).lt(11, 3);

x = new BigNumber(0.1);
x.lessThanOrEqualTo(BigNumber(0.3).minus(0.2));
BigNumber(-1).lte(x);
BigNumber(10, 18).lte('i', 36);

x = new BigNumber(0.3);
x.minus(0.1);
x.sub(0.6, 20);

x = new BigNumber(1);
x.modulo(0.9);
y = new BigNumber(33);
y.mod('a', 33);

x = new BigNumber(1.8);
x.negated();
y = new BigNumber(-1.3);
y.neg();

x = new BigNumber(0.1);
y = x.plus(0.2);
BigNumber(0.7).plus(x).add(y);
x.plus('0.1', 8);

x = new BigNumber(1.234);
x.precision();
y = new BigNumber(987000);
y.sd();
y.sd(true);

y = new BigNumber(x);
y.round();
y.round(1);
y.round(2);
y.round(10);
y.round(0, 1);
y.round(0, 6);
y.round(1, 1);
y.round(1, BigNumber.ROUND_HALF_EVEN);

x = new BigNumber(1.23);
x.shift(3);
x.shift(-3);

x = new BigNumber(16);
x.squareRoot();
y = new BigNumber(3);
y.sqrt();

x = new BigNumber(0.6);
y = x.times(3);
BigNumber('7e+500').times(y);
x.times('-a', 16);

BigNumber.config({ DECIMAL_PLACES: 5, ROUNDING_MODE: 4 });
x = new BigNumber(9876.54321);

x.toDigits();
x.toDigits(6);
x.toDigits(6, BigNumber.ROUND_UP);
x.toDigits(2);
x.toDigits(2, 1);

y = new BigNumber(45.6);
y.toExponential();
y.toExponential(0);
y.toExponential(1);
y.toExponential(1, 1);
y.toExponential(3);

y = new BigNumber(3.456);
y.toFixed();
y.toFixed(0);
y.toFixed(2);
y.toFixed(2, 1);
y.toFixed(5);

const format = {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0
};
BigNumber.config({ FORMAT: format });

x = new BigNumber('123456789.123456789');
x.toFormat();
x.toFormat(1);

format.groupSeparator = ' ';
format.fractionGroupSize = 5;
x.toFormat();

BigNumber.config({
    FORMAT: {
        decimalSeparator: ',',
        groupSeparator: '.',
        groupSize: 3,
        secondaryGroupSize: 2
    }
});

x.toFormat(6);

x = new BigNumber(1.75);
x.toFraction();

const pi = new BigNumber('3.14159265358');
pi.toFraction();
pi.toFraction(100000);
pi.toFraction(10000);
pi.toFraction(100);
pi.toFraction(10);
pi.toFraction(1);

x = new BigNumber('177.7e+457');
y = new BigNumber(235.4325);
z = new BigNumber('0.0098074');

const str = JSON.stringify([x, y, z]);

JSON.parse(str, (key, val) => key === '' ? val : new BigNumber(val));

x = new BigNumber(456.789);
x.toNumber();
{ +x; }

y = new BigNumber('45987349857634085409857349856430985');
y.toNumber();

z = new BigNumber(-0);
1 / +z;
1 / z.toNumber();

x = new BigNumber(0.7);
x.toPower(2);
BigNumber(3).pow(-2);

y = new BigNumber(45.6);
x.toPrecision();
y.toPrecision();
x.toPrecision(1);
y.toPrecision(1);
y.toPrecision(2, 0);
y.toPrecision(2, 1);
x.toPrecision(5);
y.toPrecision(5);

x = new BigNumber(750000);
x.toString();
BigNumber.config({ EXPONENTIAL_AT: 5 });
x.toString();

y = new BigNumber(362.875);
y.toString(2);
y.toString(9);
y.toString(32);

BigNumber.config({ DECIMAL_PLACES: 4 });
z = new BigNumber('1.23456789');
z.toString();
z.toString(10);

x = new BigNumber(123.456);
x.truncated();
y = new BigNumber(-12.3);
y.trunc();

x = new BigNumber('-0');
x.toString();
x.valueOf();
y = new BigNumber('1.777e+457');
y.valueOf();

x = new BigNumber(0.123);
x.toExponential();
x.c;
x.e;
x.s;

z = new BigNumber('-123.4567000e+2');
z.toExponential();
z.c;
z.e;
z.s;

x = new BigNumber(3);
x instanceof BigNumber;
x.isBigNumber;

BN = BigNumber.another();

y = new BN(3);
y instanceof BigNumber;
y.isBigNumber;

y = new BigNumber(-0);
y.c;
y.e;
y.s;

try {
    // ...
} catch (e) {
    if (e instanceof Error && e.name === 'BigNumber Error') {
        // ...
    }
}

x = new BigNumber("1.0");
y = new BigNumber("1.1000");
z = x.add(y);

x = new BigNumber("1.20");
y = new BigNumber("3.45000");
z = x.mul(y);
