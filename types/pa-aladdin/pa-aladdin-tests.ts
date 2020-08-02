import Aladdin from 'pa-aladdin';

const isPro: Aladdin.Env.isPro = true; // $ExpectType boolean
const isDev: Aladdin.Env.isDev = false; // $ExpectType boolean
const countFn: Aladdin.count = (n => n * 2); // $ExpectType number
