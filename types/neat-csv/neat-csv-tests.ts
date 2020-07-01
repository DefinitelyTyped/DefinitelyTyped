import * as neatCsv from 'neat-csv';

const data: neatCsv.Input = 'type,part\nunicorn,horn\nrainbow,pink';
const options: neatCsv.Options = { separator: ',' };

neatCsv(data); // $ExpectType Promise<Row[]>
const rowsPromise = neatCsv(data, options); // $ExpectType Promise<Row[]>

rowsPromise.then(rows =>
    rows.map(({ type, part }: neatCsv.Row) => `type: ${type}, part: ${part}`));
