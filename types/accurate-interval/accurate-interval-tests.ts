import accurateInterval = require('accurate-interval');

const interval = accurateInterval(() => void(0), 100, { aligned: true, immediate: true });
interval.clear();
const scheduledTime = 1000;
const intervalScheludel = accurateInterval((scheduledTime: number) => void 0, 100, { aligned: true, immediate: true });
const intervalScheludelError = accurateInterval(
    () => {
        return void 0;
    },
    100,
    { aligned: true, immediate: true },
);
