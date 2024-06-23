var ax: Rx.Observable<number>;

var ao = ax.toKoObservable();

ao(100);
ao.getSubscriptionsCount();

ao.toObservable();
ao.toObservable("change");
ao.toObservable<Error>("error");
