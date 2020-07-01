import progress from 'rollup-plugin-progress';

progress(); // $ExpectType Plugin

progress({ clearLine: true }); // $ExpectType Plugin
