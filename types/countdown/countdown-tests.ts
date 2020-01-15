import * as countdown from 'countdown';

let ts: countdown.Timespan;
let interval: number;

ts = <countdown.Timespan>countdown(new Date());
ts = <countdown.Timespan>countdown(150);

ts = <countdown.Timespan>countdown(undefined, Date.now() + 60000);
ts = <countdown.Timespan>countdown(Date.now() - 60000, null);

interval = <number>countdown(new Date(),
    function (ts: countdown.Timespan) {
        document.getElementById('pageTimer').innerHTML = ts.toHTML('strong');
    },
    countdown.HOURS | countdown.MINUTES | countdown.SECONDS,
    2,
    2
);

clearInterval(interval);

ts.toString('foo');
ts.toHTML('em', 'foo');

countdown.resetFormat();
countdown.setLabels('a', 'b', 'c', 'd', 'e');

countdown.setLabels('a', 'b', 'c', 'd', 'e', function (value: number): string {
    return 'ok';
}, function (value: number, unit: number): string {
    return 'ok';
});

countdown.setLabels(null, null, null, null, 'Now.');

countdown.setLabels(
    ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium',
    ' milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia',
    ' and ',
    ', ',
    '',
    n => n.toString());
