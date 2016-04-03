/// <reference path="big-integer.d.ts" />

// constructor tests
var noArgument = bigInt(),
    numberArgument = bigInt( 93 ),
    stringArgument = bigInt( "75643564363473453456342378564387956906736546456235345" ),
    baseArgumentInt = bigInt( "101010", 2 ),
    baseArgumentStr = bigInt( "101010", "2" ),
    baseArgumentBi  = bigInt( "101010", bigInt( 2 ) ), 
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
isBigInteger = x.add( "100" );

isBigInteger = x.compare( 0 );
isBigInteger = x.compare( x );
isBigInteger = x.compare( "100" );

isBigInteger = x.compareAbs( 0 );
isBigInteger = x.compareAbs( x );
isBigInteger = x.compareAbs( "100" );

isBigInteger = x.divide( 0 );
isBigInteger = x.divide( x );
isBigInteger = x.divide( "100" );

isDivmod = x.divmod( 0 );
isDivmod = x.divmod( x );
isDivmod = x.divmod( "100" );

isBoolean = x.equals( 0 );
isBoolean = x.equals( x );
isBoolean = x.equals( "100" );

isBoolean = x.greater( 0 );
isBoolean = x.greater( x );
isBoolean = x.greater( "100" );

isBoolean = x.greaterOrEquals( 0 );
isBoolean = x.greaterOrEquals( x );
isBoolean = x.greaterOrEquals( "100" );

isBoolean = x.isEven();

isBoolean = x.isNegative();

isBoolean = x.isOdd();

isBoolean = x.isPositive();

isBoolean = x.lesser( 0 );
isBoolean = x.lesser( x );
isBoolean = x.lesser( "100" );

isBoolean = x.lesserOrEquals( 0 );
isBoolean = x.lesserOrEquals( x );
isBoolean = x.lesserOrEquals( "100" );

isBigInteger = x.minus( 0 );
isBigInteger = x.minus( x );
isBigInteger = x.minus( "100" );

isBigInteger = x.mod( 0 );
isBigInteger = x.mod( x );
isBigInteger = x.mod( "100" );

isBigInteger = x.multiply( 0 );
isBigInteger = x.multiply( x );
isBigInteger = x.multiply( "100" );

isBigInteger = x.next();

isBoolean = x.notEquals( 0 );
isBoolean = x.notEquals( x );
isBoolean = x.notEquals( "100" );

isBigInteger = x.over( 0 );
isBigInteger = x.over( x );
isBigInteger = x.over( "100" );

isBigInteger = x.plus( 0 );
isBigInteger = x.plus( x );
isBigInteger = x.plus( "100" );

isBigInteger = x.pow( 0 );
isBigInteger = x.pow( x );
isBigInteger = x.pow( "100" );

isBigInteger = x.prev();

isBigInteger = x.subtract( 0 );
isBigInteger = x.subtract( x );
isBigInteger = x.subtract( "100" );

isBigInteger = x.times( 0 );
isBigInteger = x.times( x );
isBigInteger = x.times( "100" );

isNumber = x.toJSNumber();

isString = x.toString();

isNumber = x.valueOf();
