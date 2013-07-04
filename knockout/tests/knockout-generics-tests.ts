/// <reference path="../knockout.d.ts" />


interface MyType { }
var data: MyType;

function test_KnockoutSubscribable() {

    var subscribableAny: KnockoutSubscribable<any> = new ko.subscribable();

    var subscribable: KnockoutSubscribable<MyType> = new ko.subscribable<MyType>();
    
    var subscription: KnockoutSubscription = subscribable.subscribe((val: MyType) => { });
    
    subscribable.notifySubscribers(data);
    subscribable.notifySubscribers(data, 'someevent');

    subscription.dispose();
    
}
