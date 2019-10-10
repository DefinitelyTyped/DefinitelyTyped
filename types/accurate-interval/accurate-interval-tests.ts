import accurateInterval = require('accurate-interval');

const interval = accurateInterval(() => void(0), 100, { aligned: true, immediate: true });
interval.clear();
