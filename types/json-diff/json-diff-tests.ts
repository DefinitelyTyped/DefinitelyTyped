import { diff, diffString } from 'json-diff';

diff({}, { Hello: 'World' });
diff({}, { Hello: 'World' }, {});
diff({}, { Hello: 'World' }, { verbose: true });
diff({}, { Hello: 'World' }, { raw: true });
diff({}, { Hello: 'World' }, { keysOnly: true });
diff({}, { Hello: 'World' }, { full: true });
diff({}, { Hello: 'World' }, { sort: true });
diff({}, { Hello: 'World' }, { outputKeys: ["Hello"] });

diffString({}, { Hello: 'World' });
diffString({}, { Hello: 'World' }, {});
diffString({}, { Hello: 'World' }, { color: true });
diffString({}, { Hello: 'World' }, { verbose: true });
diffString({}, { Hello: 'World' }, { raw: true });
diffString({}, { Hello: 'World' }, { keysOnly: true });
diffString({}, { Hello: 'World' }, { full: true });
diffString({}, { Hello: 'World' }, { sort: true });
diffString({}, { Hello: 'World' }, { outputKeys: ["Hello"] });
diffString({}, { Hello: 'World' }, { keepUnchangedValues: true });
diffString({}, { Hello: 'World' }, { outputNewOnly: true });
