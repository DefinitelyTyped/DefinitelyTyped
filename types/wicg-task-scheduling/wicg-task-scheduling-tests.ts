if (window.scheduler) {
    // $ExpectType Promise<number>
    window.scheduler.postTask(() => 42);

    // $ExpectType Promise<void>
    window.scheduler.postTask(() => {});

    // $ExpectType Promise<void>
    window.scheduler.yield();
}
