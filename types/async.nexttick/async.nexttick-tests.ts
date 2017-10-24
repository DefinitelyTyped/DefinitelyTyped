import { nextTick } from 'async.nexttick';

function calledOnNextTick(a: string): number {
    return parseInt(a, 10);
}

const aString = 'Hi!';

nextTick(() => {
    calledOnNextTick(aString);
});
