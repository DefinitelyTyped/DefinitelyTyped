import ModularScale, { ratios } from 'modular-scale';

const ms = ModularScale({ ratio: ratios.doubleOctave }); // $ExpectType modularScale
ms(1); // $ExpectType number
ms.steps(1); // $ExpectType number[]
