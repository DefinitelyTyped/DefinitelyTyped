namespace mathTests.decimalTest {
    const {
        math: {
            Decimal
        }
    } = adone;

    type Decimal = adone.math.Decimal;

    new Decimal(0);
    new Decimal("0");
    new Decimal(new Decimal(0));

    new Decimal(0).e.toExponential();
    new Decimal(0).d[0].toExponential();
    new Decimal(0).s.toExponential();

    const d = new Decimal(0);

    { const a: Decimal = d.abs(); }
    { const a: Decimal = d.absoluteValue(); }

    { const a: Decimal = d.ceil(); }

    { const a: number = d.comparedTo(1); }
    { const a: number = d.comparedTo("1"); }
    { const a: number = d.comparedTo(d); }
    { const a: number = d.cmp(1); }
    { const a: number = d.cmp("1"); }
    { const a: number = d.cmp(d); }

    { const a: Decimal = d.cos(); }
    { const a: Decimal = d.cosine(); }

    { const a: Decimal = d.cubeRoot(); }
    { const a: Decimal = d.cbrt(); }

    { const a: number = d.decimalPlaces(); }
    { const a: number = d.dp(); }

    { const a: Decimal = d.dividedBy(1); }
    { const a: Decimal = d.dividedBy("1"); }
    { const a: Decimal = d.dividedBy(d); }
    { const a: Decimal = d.div(1); }
    { const a: Decimal = d.div("1"); }
    { const a: Decimal = d.div(d); }

    { const a: Decimal = d.dividedToIntegerBy(1); }
    { const a: Decimal = d.dividedToIntegerBy("1"); }
    { const a: Decimal = d.dividedToIntegerBy(d); }
    { const a: Decimal = d.divToInt(1); }
    { const a: Decimal = d.divToInt("1"); }
    { const a: Decimal = d.divToInt(d); }

    { const a: boolean = d.equals(1); }
    { const a: boolean = d.equals("1"); }
    { const a: boolean = d.equals(d); }
    { const a: boolean = d.eq(1); }
    { const a: boolean = d.eq("1"); }
    { const a: boolean = d.eq(d); }

    { const a: Decimal = d.floor(); }

    { const a: boolean = d.greaterThan(1); }
    { const a: boolean = d.greaterThan("1"); }
    { const a: boolean = d.greaterThan(d); }
    { const a: boolean = d.gt(1); }
    { const a: boolean = d.gt("1"); }
    { const a: boolean = d.gt(d); }

    { const a: boolean = d.greaterThanOrEqualTo(1); }
    { const a: boolean = d.greaterThanOrEqualTo("1"); }
    { const a: boolean = d.greaterThanOrEqualTo(d); }
    { const a: boolean = d.gte(1); }
    { const a: boolean = d.gte("1"); }
    { const a: boolean = d.gte(d); }

    { const a: Decimal = d.hyperbolicCosine(); }
    { const a: Decimal = d.cosh(); }

    { const a: Decimal = d.hyperbolicSine(); }
    { const a: Decimal = d.sinh(); }

    { const a: Decimal = d.hyperbolicTangent(); }
    { const a: Decimal = d.tanh(); }

    { const a: Decimal = d.inverseCosine(); }
    { const a: Decimal = d.acos(); }

    { const a: Decimal = d.inverseHyperbolicCosine(); }
    { const a: Decimal = d.acosh(); }

    { const a: Decimal = d.inverseHyperbolicSine(); }
    { const a: Decimal = d.asinh(); }

    { const a: Decimal = d.inverseHyperbolicTangent(); }
    { const a: Decimal = d.atanh(); }

    { const a: Decimal = d.inverseSine(); }
    { const a: Decimal = d.asin(); }

    { const a: Decimal = d.inverseTangent(); }
    { const a: Decimal = d.atan(); }

    { const a: boolean = d.isFinite(); }

    { const a: boolean = d.isInteger(); }
    { const a: boolean = d.isInt(); }

    { const a: boolean = d.isNaN(); }

    { const a: boolean = d.isNegative(); }
    { const a: boolean = d.isNeg(); }

    { const a: boolean = d.isPositive(); }
    { const a: boolean = d.isPos(); }

    { const a: boolean = d.isZero(); }

    { const a: boolean = d.lessThan(1); }
    { const a: boolean = d.lessThan("1"); }
    { const a: boolean = d.lessThan(d); }
    { const a: boolean = d.lt(1); }
    { const a: boolean = d.lt("1"); }
    { const a: boolean = d.lt(d); }

    { const a: boolean = d.lessThanOrEqualTo(1); }
    { const a: boolean = d.lessThanOrEqualTo("1"); }
    { const a: boolean = d.lessThanOrEqualTo(d); }
    { const a: boolean = d.lte(1); }
    { const a: boolean = d.lte("1"); }
    { const a: boolean = d.lte(d); }

    { const a: Decimal = d.logarithm(); }
    { const a: Decimal = d.logarithm(1); }
    { const a: Decimal = d.logarithm("1"); }
    { const a: Decimal = d.logarithm(d); }
    { const a: Decimal = d.log(); }
    { const a: Decimal = d.log(1); }
    { const a: Decimal = d.log("1"); }
    { const a: Decimal = d.log(d); }

    { const a: Decimal = d.minus(1); }
    { const a: Decimal = d.minus("1"); }
    { const a: Decimal = d.minus(d); }
    { const a: Decimal = d.sub(1); }
    { const a: Decimal = d.sub("1"); }
    { const a: Decimal = d.sub(d); }

    { const a: Decimal = d.modulo(1); }
    { const a: Decimal = d.modulo("1"); }
    { const a: Decimal = d.modulo(d); }
    { const a: Decimal = d.mod(1); }
    { const a: Decimal = d.mod("1"); }
    { const a: Decimal = d.mod(d); }

    { const a: Decimal = d.naturalExponential(); }
    { const a: Decimal = d.exp(); }

    { const a: Decimal = d.naturalLogarithm(); }
    { const a: Decimal = d.ln(); }

    { const a: Decimal = d.negated(); }
    { const a: Decimal = d.neg(); }

    { const a: Decimal = d.plus(1); }
    { const a: Decimal = d.plus("1"); }
    { const a: Decimal = d.plus(d); }
    { const a: Decimal = d.add(1); }
    { const a: Decimal = d.add("1"); }
    { const a: Decimal = d.add(d); }

    { const a: number = d.precision(); }
    { const a: number = d.precision(true); }
    { const a: number = d.sd(); }
    { const a: number = d.sd(true); }

    { const a: Decimal = d.round(); }

    { const a: Decimal = d.sine(); }
    { const a: Decimal = d.sin(); }

    { const a: Decimal = d.squareRoot(); }
    { const a: Decimal = d.sqrt(); }

    { const a: Decimal = d.tangent(); }
    { const a: Decimal = d.tan(); }

    { const a: Decimal = d.times(1); }
    { const a: Decimal = d.times("1"); }
    { const a: Decimal = d.times(d); }
    { const a: Decimal = d.mul(1); }
    { const a: Decimal = d.mul("1"); }
    { const a: Decimal = d.mul(d); }

    { const a: string = d.toBinary(); }
    { const a: string = d.toBinary(1); }
    { const a: string = d.toBinary(1, 1); }

    { const a: Decimal = d.toDecimalPlaces(); }
    { const a: Decimal = d.toDecimalPlaces(1); }
    { const a: Decimal = d.toDecimalPlaces(1, 1); }
    { const a: Decimal = d.toDP(); }
    { const a: Decimal = d.toDP(1); }
    { const a: Decimal = d.toDP(1, 1); }

    { const a: string = d.toExponential(); }
    { const a: string = d.toExponential(1); }
    { const a: string = d.toExponential(1, 1); }

    { const a: string = d.toFixed(); }
    { const a: string = d.toFixed(1); }
    { const a: string = d.toFixed(1, 1); }

    { const a: Decimal[] = d.toFraction(); }
    { const a: Decimal[] = d.toFraction(1); }
    { const a: Decimal[] = d.toFraction("1"); }
    { const a: Decimal[] = d.toFraction(d); }

    { const a: string = d.toHexadecimal(); }
    { const a: string = d.toHexadecimal(1); }
    { const a: string = d.toHexadecimal(1, 1); }
    { const a: string = d.toHex(); }
    { const a: string = d.toHex(1); }
    { const a: string = d.toHex(1, 1); }

    { const a: string = d.toJSON(); }

    { const a: Decimal = d.toNearest(); }
    { const a: Decimal = d.toNearest(1); }
    { const a: Decimal = d.toNearest("1"); }
    { const a: Decimal = d.toNearest(d); }
    { const a: Decimal = d.toNearest(d, 1); }

    { const a: number = d.toNumber(); }

    { const a: string = d.toOctal(); }
    { const a: string = d.toOctal(1); }
    { const a: string = d.toOctal(1, 1); }

    { const a: Decimal = d.toPower(1); }
    { const a: Decimal = d.toPower("1"); }
    { const a: Decimal = d.toPower(d); }
    { const a: Decimal = d.pow(1); }
    { const a: Decimal = d.pow("1"); }
    { const a: Decimal = d.pow(d); }

    { const a: string = d.toPrecision(); }
    { const a: string = d.toPrecision(1); }
    { const a: string = d.toPrecision(1, 1); }

    { const a: Decimal = d.toSignificantDigits(); }
    { const a: Decimal = d.toSignificantDigits(1); }
    { const a: Decimal = d.toSignificantDigits(1, 1); }
    { const a: Decimal = d.toSD(); }
    { const a: Decimal = d.toSD(1); }
    { const a: Decimal = d.toSD(1, 1); }

    { const a: string = d.toString(); }

    { const a: Decimal = d.truncated(); }
    { const a: Decimal = d.trunc(); }

    { const a: string = d.valueOf(); }

    { const a: Decimal = Decimal.abs(1); }
    { const a: Decimal = Decimal.abs("1"); }
    { const a: Decimal = Decimal.abs(d); }

    { const a: Decimal = Decimal.acos(1); }
    { const a: Decimal = Decimal.acos("1"); }
    { const a: Decimal = Decimal.acos(d); }

    { const a: Decimal = Decimal.acosh(1); }
    { const a: Decimal = Decimal.acosh("1"); }
    { const a: Decimal = Decimal.acosh(d); }

    { const a: Decimal = Decimal.asin(1); }
    { const a: Decimal = Decimal.asin("1"); }
    { const a: Decimal = Decimal.asin(d); }

    { const a: Decimal = Decimal.asinh(1); }
    { const a: Decimal = Decimal.asinh("1"); }
    { const a: Decimal = Decimal.asinh(d); }

    { const a: Decimal = Decimal.atan(1); }
    { const a: Decimal = Decimal.atan("1"); }
    { const a: Decimal = Decimal.atan(d); }

    { const a: Decimal = Decimal.atan2(1, 1); }
    { const a: Decimal = Decimal.atan2("1", "1"); }
    { const a: Decimal = Decimal.atan2(d, d); }

    { const a: Decimal = Decimal.cbrt(1); }
    { const a: Decimal = Decimal.cbrt("1"); }
    { const a: Decimal = Decimal.cbrt(d); }

    { const a: typeof Decimal = Decimal.clone({}); }
    { const a: typeof Decimal = Decimal.clone({ crypto: true }); }
    { const a: typeof Decimal = Decimal.clone({ defaults: true }); }
    { const a: typeof Decimal = Decimal.clone({ maxE: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ minE: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ modulo: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ precision: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ rounding: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ toExpNeg: 1 }); }
    { const a: typeof Decimal = Decimal.clone({ toExpPos: 1 }); }
    { const a: typeof Decimal = Decimal.clone({}); }

    { const a: typeof Decimal = Decimal.config({ crypto: true }); }
    { const a: typeof Decimal = Decimal.config({ defaults: true }); }
    { const a: typeof Decimal = Decimal.config({ maxE: 1 }); }
    { const a: typeof Decimal = Decimal.config({ minE: 1 }); }
    { const a: typeof Decimal = Decimal.config({ modulo: 1 }); }
    { const a: typeof Decimal = Decimal.config({ precision: 1 }); }
    { const a: typeof Decimal = Decimal.config({ rounding: 1 }); }
    { const a: typeof Decimal = Decimal.config({ toExpNeg: 1 }); }
    { const a: typeof Decimal = Decimal.config({ toExpPos: 1 }); }

    { const a: typeof Decimal = Decimal.set({ crypto: true }); }
    { const a: typeof Decimal = Decimal.set({ defaults: true }); }
    { const a: typeof Decimal = Decimal.set({ maxE: 1 }); }
    { const a: typeof Decimal = Decimal.set({ minE: 1 }); }
    { const a: typeof Decimal = Decimal.set({ modulo: 1 }); }
    { const a: typeof Decimal = Decimal.set({ precision: 1 }); }
    { const a: typeof Decimal = Decimal.set({ rounding: 1 }); }
    { const a: typeof Decimal = Decimal.set({ toExpNeg: 1 }); }
    { const a: typeof Decimal = Decimal.set({ toExpPos: 1 }); }

    { const a: Decimal = Decimal.cos(1); }
    { const a: Decimal = Decimal.cos("1"); }
    { const a: Decimal = Decimal.cos(d); }

    { const a: Decimal = Decimal.div(1, 1); }
    { const a: Decimal = Decimal.div("1", "1"); }
    { const a: Decimal = Decimal.div(d, d); }

    { const a: Decimal = Decimal.exp(1); }
    { const a: Decimal = Decimal.exp("1"); }
    { const a: Decimal = Decimal.exp(d); }

    { const a: Decimal = Decimal.floor(1); }
    { const a: Decimal = Decimal.floor("1"); }
    { const a: Decimal = Decimal.floor(d); }

    { const a: Decimal = Decimal.hypot(1); }
    { const a: Decimal = Decimal.hypot("1"); }
    { const a: Decimal = Decimal.hypot(d); }
    { const a: Decimal = Decimal.hypot(1, 1); }
    { const a: Decimal = Decimal.hypot("1", "1"); }
    { const a: Decimal = Decimal.hypot(d, d); }
    { const a: Decimal = Decimal.hypot(1, 1, 1); }
    { const a: Decimal = Decimal.hypot("1", "1", "1"); }
    { const a: Decimal = Decimal.hypot(d, d, d); }
    { const a: Decimal = Decimal.hypot(1, 1, 1, 1, 1, 1, 1, 1, 1, d, 1, 1, 1, "1", d); }

    { const a: boolean = Decimal.isDecimal(d); }

    { const a: Decimal = Decimal.ln(1); }
    { const a: Decimal = Decimal.ln("1"); }
    { const a: Decimal = Decimal.ln(d); }

    { const a: Decimal = Decimal.log(1); }
    { const a: Decimal = Decimal.log("1"); }
    { const a: Decimal = Decimal.log(d); }
    { const a: Decimal = Decimal.log(1, 2); }
    { const a: Decimal = Decimal.log("1", 2); }
    { const a: Decimal = Decimal.log(d, 2); }

    { const a: Decimal = Decimal.log2(1); }
    { const a: Decimal = Decimal.log2("1"); }
    { const a: Decimal = Decimal.log2(d); }

    { const a: Decimal = Decimal.log10(1); }
    { const a: Decimal = Decimal.log10("1"); }
    { const a: Decimal = Decimal.log10(d); }

    { const a: Decimal = Decimal.min(1, "1", 1, d); }

    { const a: Decimal = Decimal.max(1, "1", 1, d); }

    { const a: Decimal = Decimal.mul(1, 1); }
    { const a: Decimal = Decimal.mul("1", "1"); }
    { const a: Decimal = Decimal.mul(d, d); }

    { const a: Decimal = Decimal.pow(1, 1); }
    { const a: Decimal = Decimal.pow("1", "1"); }
    { const a: Decimal = Decimal.pow(d, d); }

    { const a: Decimal = Decimal.random(); }
    { const a: Decimal = Decimal.random(1); }

    { const a: Decimal = Decimal.round(1); }
    { const a: Decimal = Decimal.round("1"); }
    { const a: Decimal = Decimal.round(d); }

    { const a: Decimal = Decimal.sign(1); }
    { const a: Decimal = Decimal.sign("1"); }
    { const a: Decimal = Decimal.sign(d); }

    { const a: Decimal = Decimal.sin(1); }
    { const a: Decimal = Decimal.sin("1"); }
    { const a: Decimal = Decimal.sin(d); }

    { const a: Decimal = Decimal.sinh(1); }
    { const a: Decimal = Decimal.sinh("1"); }
    { const a: Decimal = Decimal.sinh(d); }

    { const a: Decimal = Decimal.sqrt(1); }
    { const a: Decimal = Decimal.sqrt("1"); }
    { const a: Decimal = Decimal.sqrt(d); }

    { const a: Decimal = Decimal.sub(1, 1); }
    { const a: Decimal = Decimal.sub("1", "1"); }
    { const a: Decimal = Decimal.sub(d, d); }

    { const a: Decimal = Decimal.tan(1); }
    { const a: Decimal = Decimal.tan("1"); }
    { const a: Decimal = Decimal.tan(d); }

    { const a: Decimal = Decimal.tanh(1); }
    { const a: Decimal = Decimal.tanh("1"); }
    { const a: Decimal = Decimal.tanh(d); }

    { const a: Decimal = Decimal.trunc(1); }
    { const a: Decimal = Decimal.trunc("1"); }
    { const a: Decimal = Decimal.trunc(d); }

    { const a: number = Decimal.precision; }
    { const a: number = Decimal.rounding; }
    { const a: number = Decimal.toExpNeg; }
    { const a: number = Decimal.minE; }
    { const a: boolean = Decimal.crypto; }
    { const a: number = Decimal.modulo; }
    { const a: number = Decimal.ROUND_UP; }
    { const a: number = Decimal.ROUND_DOWN; }
    { const a: number = Decimal.ROUND_CEIL; }
    { const a: number = Decimal.ROUND_FLOOR; }
    { const a: number = Decimal.ROUND_HALF_UP; }
    { const a: number = Decimal.ROUND_HALF_DOWN; }
    { const a: number = Decimal.ROUND_HALF_EVEN; }
    { const a: number = Decimal.ROUND_HALF_CEIL; }
    { const a: number = Decimal.ROUND_HALF_FLOOR; }
    { const a: number = Decimal.EUCLID; }
}
