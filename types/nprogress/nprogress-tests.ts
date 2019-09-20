import NProgress, { NProgressOptions } from 'nprogress';

console.log(NProgress.status);
console.log(NProgress.version);

// $ExpectType NProgress
NProgress.start();
NProgress.inc()
    .inc(0.2)
    .done();

NProgress.set(0.5);
NProgress.trickle();
console.log(NProgress.isStarted());
NProgress.done(true);

NProgress.configure({ minimum: 0.1 });
NProgress.configure({
    template: '<div></div>',
    easing: 'ease',
    speed: 500,
    trickle: true,
    showSpinner: false,
    trickleSpeed: 250,
    parent: '#content',
    // $ExpectError
    foo: ''
});
