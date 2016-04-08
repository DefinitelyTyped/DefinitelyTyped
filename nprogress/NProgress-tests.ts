///<reference path="./NProgress.d.ts"/>

function test_basics() {
    NProgress.start();
    NProgress.inc();
    NProgress.inc(0.2);
    NProgress.done();
    NProgress.set(0.5);

    var status = NProgress.status;
    var version = NProgress.version;
}

function test_configuration() {
    NProgress.configure({
        speed: 0.3
    });

    NProgress.configure({
        trickle: false
    });

    NProgress.configure({
        ease: 'ease',
        minimum: 0.09,
        showSpinner: false,
        speed: 420,
        template: "<div>blah</div>",
        trickle: false,
        trickleRate: 0.42,
        trickleSpeed: 42
    });
}
