import deltas = require('es-abstract/operations/deltas');
import { RemovedKeys as ES2015RemovedKeys, AllAddedKeys as ES2015AllAddedKeys } from './2015.test';
import { RemovedKeys as ES2016RemovedKeys, AllAddedKeys as ES2016AllAddedKeys } from './2016.test';
import { RemovedKeys as ES2017RemovedKeys, AllAddedKeys as ES2017AllAddedKeys } from './2017.test';
import { RemovedKeys as ES2018RemovedKeys, AllAddedKeys as ES2018AllAddedKeys } from './2018.test';
import { RemovedKeys as ES2019RemovedKeys, AllAddedKeys as ES2019AllAddedKeys } from './2019.test';

// Attempting to use `$ExpectType` in this file leads to intermittent dtslint failures
import { expectType } from '../index.test';

expectType<ReadonlySet<never>>(deltas[5].added); // $ExpectType ReadonlySet<never>
expectType<ReadonlySet<never>>(deltas[5].removed); // $ExpectType ReadonlySet<never>

expectType<ReadonlySet<ES2015AllAddedKeys>>(deltas[2015].added);
expectType<ReadonlySet<ES2015RemovedKeys>>(deltas[2015].removed);

expectType<ReadonlySet<ES2016AllAddedKeys>>(deltas[2016].added);
expectType<ReadonlySet<ES2016RemovedKeys>>(deltas[2016].removed);

expectType<ReadonlySet<ES2017AllAddedKeys>>(deltas[2017].added);
expectType<ReadonlySet<ES2017RemovedKeys>>(deltas[2017].removed);

expectType<ReadonlySet<ES2018AllAddedKeys>>(deltas[2018].added);
expectType<ReadonlySet<ES2018RemovedKeys>>(deltas[2018].removed);

expectType<ReadonlySet<ES2019AllAddedKeys>>(deltas[2019].added);
expectType<ReadonlySet<ES2019RemovedKeys>>(deltas[2019].removed);
