import ModularScale, { ratios } from 'modular-scale';

const ms = ModularScale({ ratio: ratios.doubleOctave }); // $ExpectType modularScale
ms(1); // $ExpectType number
ms.steps(1); // $ExpectType number[]

const ms2 = ModularScale({ratio: ratios.augFourth, base: 16 }); // $ExpectType modularScale

const ms3 = ModularScale({ratio: ratios.augFourth, base: "16px"}); // $ExpectType modularScale
