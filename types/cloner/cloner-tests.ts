import cloner = require("cloner");

interface A {
    test: string;
    nest: {
        test: string;
        num: number;
    };
}

interface B {
    somethingElse: string;
    nest: {
        somethingElse: string;
        notNaN: number;
    };
}

let aO: A;
let aN: A;
let bO: B;
let bN: B;

aO = {
    test: "test",
    nest: {
        test: "nestTest",
        num: 1
    }
};
bO = {
    somethingElse: "se",
    nest: {
        somethingElse: "nestSe",
        notNaN: 0
    }
};

aN = cloner.deep.copy(aO);
bN = cloner.shallow.copy(bO);

aN = cloner.deep.merge(aO, bO);
bN = cloner.shallow.merge(aO, bO);
