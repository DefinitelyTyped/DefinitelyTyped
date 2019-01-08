import iopipe, { label, mark, metric } from '@iopipe/iopipe'

const configuredLib = iopipe({
    token: 'ABCDEFG' 
});

const run = () => {}

configuredLib(run)

label('a label');

mark.start('trace');
mark.end('trace');

metric('metric-label', 42);

