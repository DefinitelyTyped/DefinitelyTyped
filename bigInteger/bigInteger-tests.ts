/// <reference path="bigInteger.d.ts" />

// constructor tests
var noArgument = bigInt(),
    numberArgument = bigInt( 93 ),
    stringArgument = bigInt( "75643564363473453456342378564387956906736546456235345" ),
    bigIntArgument = bigInt( noArgument );

// method tests
var x = bigInt(),
    isBigInteger: BigInteger,
    isNumber: number,
    isBoolean: boolean,
    isString: string,
    isDivmod: {
        quotient: BigInteger;
        remainder: BigInteger;
    };

isBigInteger = x.abs();

isBigInteger = x.add( 0 );
isBigInteger = x.add( x );

isBigInteger = x.compare( 0 );
isBigInteger = x.compare( x );

isBigInteger = x.compareAbs( 0 );
isBigInteger = x.compareAbs( x );

isBigInteger = x.divide( 0 );
isBigInteger = x.divide( x );

isDivmod = x.divmod( 0 );
isDivmod = x.divmod( x );

isBoolean = x.equals( 0 );
isBoolean = x.equals( x );

isBoolean = x.greater( 0 );
isBoolean = x.greater( x );

isBoolean = x.greaterOrEquals( 0 );
isBoolean = x.greaterOrEquals( x );

isBoolean = x.isEven();

isBoolean = x.isNegative();

isBoolean = x.isOdd();

isBoolean = x.isPositive();

isBoolean = x.lesser( 0 );
isBoolean = x.lesser( x );

isBoolean = x.lesserOrEquals( 0 );
isBoolean = x.lesserOrEquals( x );

isBigInteger = x.minus( 0 );
isBigInteger = x.minus( x );

isBigInteger = x.mod( 0 );
isBigInteger = x.mod( x );

isBigInteger = x.multiply( 0 );
isBigInteger = x.multiply( x );

isBigInteger = x.next();

isBoolean = x.notEquals( 0 );
isBoolean = x.notEquals( x );

isBigInteger = x.over( 0 );
isBigInteger = x.over( x );

isBigInteger = x.plus( 0 );
isBigInteger = x.plus( x );

isBigInteger = x.pow( 0 );
isBigInteger = x.pow( x );

isBigInteger = x.prev();

isBigInteger = x.subtract( 0 );
isBigInteger = x.subtract( x );

isBigInteger = x.times( 0 );
isBigInteger = x.times( x );

isNumber = x.toJSNumber();

isString = x.toString();

isNumber = x.valueOf();