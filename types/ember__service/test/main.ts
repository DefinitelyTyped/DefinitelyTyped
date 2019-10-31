import Service, { inject } from "@ember/service";
import EmberObject from "@ember/object";

class FirstSvc extends Service {
    foo = "bar";
    first() {
        return "";
    }
}
const SecondSvc = Service.extend({
    foo: "bar",
    second() {
        return "";
    }
});

class ThirdSvc extends Service.extend({
    foo: "bar",
    third() {
        return "";
    }
}) {}

declare module "@ember/service" {
    interface Registry {
        first: FirstSvc;
        second: InstanceType<typeof SecondSvc>;
        third: ThirdSvc;
    }
}

const ServiceTriplet = EmberObject.extend({
    sFirst: inject("first"),
    sSecond: inject("second"),
    sThird: inject("third"),
    unknownService: inject()
});

const obj = ServiceTriplet.create();

obj.get("sFirst"); // $ExpectType FirstSvc
obj.get("sSecond").second(); // $ExpectType ""
obj.get("sThird"); // $ExpectType ThirdSvc
obj.get("unknownService"); // $ExpectType Service
