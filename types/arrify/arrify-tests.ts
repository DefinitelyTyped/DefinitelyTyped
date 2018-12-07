import * as arrify from 'arrify';

/***************** arrify<T> *****************/
arrify(null);
arrify<number>(null);

arrify(undefined);
arrify<number>(undefined);

arrify(1);
arrify([2, 3]);

function test(val?: string | string[]) {
    arrify(val);
}
/***************** arrify<T> *****************/

/***************** arrify<T1, T2> *****************/
arrify<number, string>(undefined); // returns []

arrify<number, string>(null); // returns []

{
    const value: number | string[] = 2018;
    arrify<number, string>(value); // returns [2018]
}

{
    const value: number[] | string | string[] = ['a', 'b'];
    arrify<number, string>(value); // returns ['a', 'b']
}
/***************** arrify<T1, T2> *****************/

/***************** arrify<T1, T2, T3> *****************/
arrify<boolean, number, string>(undefined);

arrify<boolean, number, string>(null);

{
    const value: boolean | number[] | string[] = true;
    // returns [true]
    arrify<boolean, number, string>(value);
}

{
    const value: boolean[] | number | string[] = ['a', 'b'];
    // returns ['a', 'b']
    arrify<boolean, number, string>(value);
}
/***************** arrify<T1, T2, T3> *****************/

/***************** arrify<T1, T2, T3, T4> *****************/
arrify<boolean, Date, number, string>(undefined);

arrify<boolean, Date, number, string>(null);

{
    const value: boolean | Date | number[] | string[] = new Date(2018);
    // returns [ new Date(2018) ]
    arrify<boolean, Date, number, string>(value);
}

{
    const value: boolean[] | Date[] | number | string = [true, false];
    // returns [true, false]
    arrify<boolean, Date, number, string>(value);
}
/***************** arrify<T1, T2, T3, T4> *****************/

/***************** arrify<T1, T2, T3, T4, T5> *****************/
arrify<boolean, Date, number, RegExp, string>(undefined);

arrify<boolean, Date, number, RegExp, string>(null);

{
    const value: boolean | Date | number[] | RegExp | string[] = /test/;
    // returns [ /test/ ]
    arrify<boolean, Date, number, RegExp, string>(value);
}

{
    const value: boolean[] | Date[] | number | RegExp[] | string = [/test1/, /test2/];
    // returns [/test1/, /test2/]
    arrify<boolean, Date, number, RegExp, string>(value);
}
/***************** arrify<T1, T2, T3, T4, T5> *****************/
