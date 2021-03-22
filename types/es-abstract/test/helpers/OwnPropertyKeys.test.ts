import OwnPropertyKeys = require('es-abstract/helpers/OwnPropertyKeys');
import { expectType } from '../index.test';

declare const arrayLike: ArrayLike<unknown>;

expectType<Array<string | symbol>>(OwnPropertyKeys(arrayLike));
