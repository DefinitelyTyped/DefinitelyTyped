import _ = require("../index");

declare namespace Lodash {
    interface Random {
        (): Random;
        (floating: boolean): Random1x1;
        (floating: boolean, max: number): number;
    }
    interface Random1x1 {
        (): Random1x1;
        (max: number): number;
    }
}

declare const random: Lodash.Random;
export = random;
