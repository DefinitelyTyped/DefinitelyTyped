/// <reference path="../tsmonad.d.ts" />

var turns_out_to_be_100 = TsMonad.Maybe.just(10)
    .caseOf({
        just: n => n * n,
        nothing: () => -1
    });

var turns_out_to_be_nothing = TsMonad.Maybe.nothing<number>()
    .caseOf({
        just: n => n * n,
        nothing: () => -1
    });

var turns_out_to_be_true = TsMonad.Maybe.just(123)
    .lift(n => n * 2)
    .caseOf({
        just: n => n === 246,
        nothing: () => false
    });