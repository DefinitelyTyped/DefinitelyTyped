import * as PullToRefresh from 'pulltorefreshjs';

PullToRefresh.init();

PullToRefresh.init({});

PullToRefresh.init({
    distThreshold: 60,
    distMax: 80,
    distReload: 50,
    distIgnore: 0,
    mainElement: 'body',
    triggerElement: 'body',
    ptrElement: '.ptr',
    classPrefix: 'ptr--',
    cssProp: 'min-height',
    iconArrow: '&#8675;',
    iconRefreshing: '&hellip;',
    instructionsPullToRefresh: 'Pull down to refresh',
    instructionsReleaseToRefresh: 'Release to refresh',
    instructionsRefreshing: 'Refreshing',
    refreshTimeout: 500,
    getMarkup: () => {
        return '';
    },
    getStyles: () => {
        return '';
    },
    onInit: () => {},
    onRefresh: () => {
        location.reload();
    },
    resistanceFunction: t => {
        return Math.min(1, t / 2.5);
    },
    shouldPullToRefresh: () => {
        return !window.scrollY;
    },
});

PullToRefresh.init({
    mainElement: 'body',
    onRefresh: () => {
        window.location.reload();
    },
});

PullToRefresh.init({
    resistanceFunction: x => Math.sqrt(x),
});

PullToRefresh.init({
    mainElement: 'body',
    onRefresh: () => Promise.resolve(),
});

PullToRefresh.destroyAll();

PullToRefresh.setPassiveMode(true);

PullToRefresh.setPassiveMode(false);
