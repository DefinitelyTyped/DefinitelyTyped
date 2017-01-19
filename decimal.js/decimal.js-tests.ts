
var x = new Decimal(9)
var y = new Decimal(x)

Decimal(435.345)

new Decimal('5032485723458348569331745.33434346346912144534543')
new Decimal('4.321e+4')
new Decimal('-735.0918e-430')
new Decimal('5.6700000')
new Decimal(Infinity)
new Decimal(NaN)
new Decimal('.5')
new Decimal('+2')
new Decimal(-10110100.1, 2)
new Decimal('123412421.234324', 5)
new Decimal('ff.8', 16)

Decimal.config({ precision: 5 })
new Decimal(1.23456789)
new Decimal(1.23456789, 10)


Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -9e15,
    maxE: 9e15,
    errors: true,
    crypto: false,
    modulo: 1,
    format: {
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3,
        secondaryGroupSize: 0,
        fractionGroupSeparator: '\xA0',
        fractionGroupSize: 0
    }
});

Decimal.config({
    format: {

        decimalSeparator: '.',

        groupSeparator: ',',

        groupSize: 3,

        secondaryGroupSize: 0,

        fractionGroupSeparator: ' ',

        fractionGroupSize: 0
    }
});
Decimal.config({ rounding: Decimal.ROUND_CEIL })
Decimal.config({ rounding: 2 })
Decimal.rounding

x = new Decimal(1.3)
x.ceil()
y = new Decimal(-1.8)
y.ceil()

x.comparedTo(y)
x.comparedTo(x.minus(1))
y.cmp(NaN)
y.cmp('110', 2)

x.decimalPlaces()
y.dp()

x.dividedBy(y)
x.div(5)
x.div(47, 16)

x.dividedToIntegerBy(y)
x.divToInt(0.7)
x.divToInt('0.f', 16)

x.equals('1e-324')
new Decimal(-0).eq(x)
new Decimal(255).eq('ff', 16)

y = new Decimal(NaN)
y.equals(NaN)

x = new Decimal(1)
x.exponential()
y = new Decimal(2)
y.exp()

x = new Decimal(1.8)
x.floor()
y = new Decimal(-1.3)
y.floor()

x.greaterThan(Decimal(0.3).minus(0.2))
new Decimal(0).gt(x)
new Decimal(11, 3).gt(11.1, 2)


x = new Decimal(0.3).minus(0.2)
x.greaterThanOrEqualTo(0.1)
new Decimal(1).gte(x)
new Decimal(10, 18).gte('i', 36)

x = new Decimal(1)
x.isFinite()
y = new Decimal(Infinity)
y.isFinite()

x = new Decimal(1)
x.isInteger()
y = new Decimal(123.456)
y.isInt()

x = new Decimal(NaN)
x.isNaN()
y = new Decimal('Infinity')
y.isNaN()

x = new Decimal(-0)
x.isNegative()
y = new Decimal(2)
y.isNeg

x = new Decimal(-0)
x.isZero() && x.isNeg()
y = new Decimal(Infinity)
y.isZero()

x.lessThan(0.1)
new Decimal(0).lt(x)
new Decimal(11.1, 2).lt(11, 3)

x.lessThan(0.1)
new Decimal(0).lt(x)
new Decimal(11.1, 2).lt(11, 3)

x = new Decimal(0.1)
x.lessThanOrEqualTo(Decimal(0.3).minus(0.2))
new Decimal(-1).lte(x)
new Decimal(10, 18).lte('i', 36)

x = new Decimal(1000)
x.logarithm()
y = new Decimal(256)
y.log(2)

x = new Decimal(0.3)
x.minus(0.1)
x.minus(0.6, 20)

x = new Decimal(1)
x.modulo(0.9)

y = new Decimal(33)
y.mod('a', 33)

x = new Decimal(8)
y = new Decimal(-3)
Decimal.modulo = 1
x.mod(y)
Decimal.modulo = 3
x.mod(y)

x = new Decimal(10)
x.naturalLogarithm()
y = new Decimal('1.23e+30')
y.ln()

x = new Decimal(1.8)
x.negated()
y = new Decimal(-1.3)
y.neg()

x = new Decimal(0.1)
y = x.plus(0.2)
new Decimal(0.7).plus(x).plus(y)
x.plus('0.1', 8)

x = new Decimal(1.234)
x.precision()
y = new Decimal(987000)
y.sd()
y.sd(true)

Decimal.config({ rounding: 4 })
x.round()

Decimal.rounding = Decimal.ROUND_DOWN
x.round()
x

x = new Decimal(16)
x.squareRoot()
y = new Decimal(3)
y.sqrt()
y.sqrt().eq(y.pow(0.5))

x = new Decimal(0.6)
y = x.times(3)
new Decimal('7e+500').times(y)
x.times('-a', 16)

x = new Decimal(12.24567)
x.toDecimalPlaces(0)
x.toDecimalPlaces(1, 0)

y = new Decimal(9876.54321)
y.toDP(3)
y.toDP(1, 0)
y.toDP(1, Decimal.ROUND_DOWN)

y = new Decimal(x)
x.toExponential()
y.toExponential()
x.toExponential(0)
y.toExponential(0)
x.toExponential(1)
y.toExponential(1)
y.toExponential(1, 1)
x.toExponential(3)
y.toExponential(3)

y = new Decimal(x)
x.toFixed()
y.toFixed()
y.toFixed(0)
x.toFixed(2)
y.toFixed(2)
y.toFixed(2, 1)
x.toFixed(5)
y.toFixed(5)

Decimal.config({
    format: {
        decimalSeparator: '.',
        groupSeparator: ',',
        groupSize: 3,
        secondaryGroupSize: 0,
        fractionGroupSeparator: ' ',
        fractionGroupSize: 0
    }
});

x = new Decimal('123456789.123456789')
x.toFormat()
x.toFormat(1)


Decimal.format.groupSeparator = ' ';
Decimal.format.fractionGroupSize = 5;
x.toFormat()


Decimal.format = {
    decimalSeparator: ',',
    groupSeparator: '.',
    groupSize: 3,
    secondaryGroupSize: 2
}

x.toFormat()

x.toFraction()

var pi = new Decimal('3.14159265358')
pi.toFraction()
pi.toFraction(100000)
pi.toFraction(10000)
pi.toFraction(100)
pi.toFraction(10)
pi.toFraction(1)



x = new Decimal('177.7e+457')
y = new Decimal(235.4325)
var z = new Decimal('0.0098074')

// Serialize an array of three Decimals
var str = JSON.stringify([x, y, z])
// "["1.777e+459","235.4325","0.0098074"]"

// Return an array of three Decimals
JSON.parse(str, function(key, val) {
    return key === '' ? val : new Decimal(val)
})

x = new Decimal(1.39)
x.toNearest(0.25)

y = new Decimal(0.75)
y.toNearest(0.5, 0)
y.toNearest(0.5, 1)

x = new Decimal(456.789)
x.toNumber()

y = new Decimal('45987349857634085409857349856430985')
y.toNumber()

z = new Decimal(-0)
1 / +z
1 / z.toNumber()

Math.pow(0.7, 2)
x = new Decimal(0.7)
x.toPower(2)
new Decimal(3).pow(-2)

new Decimal(1217652.23).pow('98765.489305603941')
y = new Decimal(x)
x.toPrecision()
y.toPrecision()
x.toPrecision(1)
y.toPrecision(1)
y.toPrecision(2, 0)
y.toPrecision(2, 1)
x.toPrecision(5)
y.toPrecision(5)

Decimal.config({ precision: 5, rounding: 4 })
x = new Decimal(9876.54321)

x.toSignificantDigits()
x.toSignificantDigits(6)
x.toSignificantDigits(6, Decimal.ROUND_UP)
x.toSD(2)
x.toSD(2, 1)

x = new Decimal(750000)
x.toString()
Decimal.config({ toExpPos: 5 })
x.toString()

y = new Decimal(362.875)
y.toString(2)
y.toString(9)
y.toString(32)

Decimal.config({ precision: 4 });
z = new Decimal('1.23456789')
z.toString()
z.toString(10)

x = new Decimal(123.456)
x.truncated()
y = new Decimal(-12.3)
y.trunc()

x = new Decimal('1.777e+457')
x.valueOf()

x = Decimal.exp(3)
y = new Decimal(3).exp()
x.equals(y)

x = Decimal.ln(4.321)
y = new Decimal(4.321).ln()
x.equals(y)

x = Decimal.log(100, 2.5)
y = new Decimal(100).log(2.5)
x.equals(y)

x = new Decimal('3257869345.0378653')
Decimal.max(4e9, x, '123456789.9')

var arr = [12, '13', new Decimal(14)]
Decimal.max(arr)

x = new Decimal('3257869345.0378653')
Decimal.min(4e9, x, '123456789.9')

arr = [2, new Decimal(-14), '-15.9999', -12]
Decimal.min(arr)

x = new Decimal(2)
var D = Decimal.noConflict()
Decimal
y = new D(3)

x = Decimal.pow(3257.4, 17.01)
y = new Decimal(3257.4).pow(17.01)
x.equals(y)

Decimal.config({ precision: 10 })
Decimal.random()

Decimal.random(20)

x = Decimal.sqrt('987654321.123456789')
y = new Decimal('987654321.123456789').sqrt()
x.equals(y)
