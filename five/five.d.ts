// Type definitions for Five.js 0.8.0
// Project: https://github.com/jackdcrawford/five
// Definitions by: Raphi Stein <https://github.com/RaphiStein/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FiveStatic {
    (): number;

    // law: ()=>string; // FUTURE VERSION

    upHigh: ()=> string; // ⁵
    downLow: ()=> string ; // ₅
    tooSlow: ()=> string; // 5, with a ~500 millisecond delay
    roman: ()=> string; // V
    morseCode: ()=> string; // .....
    negative: ()=> number;
    loud: (language?:string)=> string;
    smooth: ()=> string; // S
    // mdFive: ()=> string; // 30056e1cab7a61d256fc8edd970d14f5 // FUTURE VERSION

    /* Languages */

    arabic: ()=>string; // خمسة
    azerbaijani: ()=>string; // beş
    basque: ()=>string; // bost
    bosnian: ()=>string; // pet
    bulgarian: ()=>string; // пет
    catalan: ()=>string; // cinc
    chinese: ()=>string; // 五
    choctaw: ()=>string; // tahlapi
    croatian: ()=>string; // pet
    czech: ()=>string; // pět
    dovah: ()=>string; // hen
    dutch: ()=>string; // vijf
    elvish: ()=>string; // lempe
    english: ()=>string; // Five
    finnish: ()=>string; // viisi
    french: ()=>string; // cinq
    german: ()=>string; // fünf
    hebrew: ()=>string; // חמש
    hindi: ()=>string; // पांच
    indonesian: ()=>string; // lima
    irish: ()=>string; // cúig
    italian: ()=>string; // cinque
    japanese: ()=>string; // 五
    kannada: ()=>string; // ಐದು
    klingon: ()=>string; // vagh
    korean: ()=>string; // 오
    latin: ()=>string; // quinque
    mongolian: ()=>string; // таван
    persian: ()=>string; // پنج
    piglatin: ()=>string; // ivefay
    polish: ()=>string; // pięć
    portuguese: ()=>string; // cinco
    romanian: ()=>string; // cinci
    russian: ()=>string; // пять
    slovenian: ()=>string; // pet
    spanish: ()=>string; // cinco
    swedish: ()=>string; // fem
    tamil: ()=>string; // ஐந்து
    telugu: ()=>string; // ఐదు
    thai: ()=>string; // ห้า


    binary: () => number; // 101
    octal: () => number; // 5
    hex: () => number; // 5
    /*base: (base: number) => number; // 11/*/ // FUTURE VERSION

    // isFive: (num: number) => boolean;  // FUTURE VERSION

    /* Filter, Map and Reduce */

    // filter: (arr:any[])=>number[]; // [5, 5] // FUTURE VERSION
    map: (arr:any[])=>number[]; // [5, 5, 5]
    reduce: (arr:any[])=>number[]; // 5

    /* Novelty */

    fab: ()=>string; // ['Juwan Howard','Ray Jackson','Jimmy King','Jalen Rose','Chris Webber']

    // FUTURE VERSION
    // jackson: ()=>string; // ['Jackie','Tito','Jermaine','Marlon','Michael']
    // luniz: ()=>string; // ‘I Got 5 on It’
    // r: ()=>string; // '£5'
    // funk: ()=>string; // '5 bad boys with the power to rock you'
    // rot: (str:string) => string; //"knaj.ox"

    // oclock: ()=>string; // '🕔'
    // guys: ()=>string; // '🍔'
    //
}


declare var five:FiveStatic;

declare module "Five" {
    export = five;
}