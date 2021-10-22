import { diff, diffString } from 'json-diff';

diff({}, { Hello: 'World' });
diffString({}, { Hello: 'World' });
diffString({}, { Hello: 'World' }, {});
diffString({}, { Hello: 'World' }, { color: true });
