/// <reference path="../knockout.d.ts" />


interface MyType { }
var myData: MyType;

function test_KnockoutSubscribable() {

    var subscribableAny: KnockoutSubscribable<any> = new ko.subscribable();

    var subscribable: KnockoutSubscribable<MyType> = new ko.subscribable<MyType>();
    
    var subscription: KnockoutSubscription = subscribable.subscribe((val: MyType) => { });
    
    subscribable.notifySubscribers(myData);
    subscribable.notifySubscribers(myData, 'someevent');

    subscription.dispose();
    
}

function test_KnockoutObservable() {
    
    //works when unexplicit
    var obsAny: KnockoutObservable<any> = ko.observable();

    //type inference works
    var obs: KnockoutObservable<MyType> = ko.observable(myData);

    //inherits properly
    var sub: KnockoutSubscribable<MyType> = obs;

    //returns correct type
    var result:MyType = obs();

}

function test_KnockoutObservableArray() {

    //works when unexplicit
    var obsArrayAny: KnockoutObservableArray<any> = ko.observableArray();

    //type inference works
    var obsArray: KnockoutObservableArray<MyType> = ko.observableArray([myData]);

    //inherits properly
    var obs: KnockoutObservable<MyType[]> = obsArray;
    var sub: KnockoutSubscribable<MyType[]> = obsArray;

    //returns correct type
    var result:MyType[] = obsArray();

}

function test_KnockoutComputed() {

    //type inference works
    var computed: KnockoutComputed<MyType> = ko.computed(()=>myData);

    //inherits properly
    var obs: KnockoutObservable<MyType> = computed;
    var sub: KnockoutSubscribable<MyType> = computed;

    //returns correct type
    var result: MyType = computed();

}