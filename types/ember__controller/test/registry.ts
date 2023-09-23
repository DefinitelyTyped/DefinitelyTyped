import Controller from "@ember/controller";
import Owner from "@ember/owner";

declare let owner: Owner;

declare class TestController extends Controller {}

declare module "@ember/controller" {
    interface Registry {
        test: TestController;
    }
}

owner.lookup("controller:non-registered"); // $ExpectType Controller | undefined
owner.lookup("controller:test"); // $ExpectType TestController
