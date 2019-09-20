import { ontime } from "ontime";

ontime({
    cycle: ['04:30:00', '9:00:00']
}, (ot) => {
    ot.done();
});

ontime({
    cycle: '2-9T00:00:00'
}, (ot) => {
    ot.done();
});

ontime({
    cycle: '31T00:00:00',
    keepLast: true,
    step: 3
}, (ot) => {
    ot.done();
});

ontime({
    cycle: '31T00:00:00',
    single: false
}, (ot) => {
    ot.cancel();
    ot.done();
});

ontime({
    cycle: '31T00:00:00',
    utc: true,
    log: true
}, (ot) => {
    ot.done();
});
