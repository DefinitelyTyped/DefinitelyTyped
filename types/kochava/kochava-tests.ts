import { Kochava } from "kochava";

const kochava = Kochava.create(); // $ExpectType Kochava
Kochava.createForNode(); // $ExpectType Kochava
Kochava.createForReact(); // $ExpectType Kochava
Kochava.createForVue(); // $ExpectType Kochava
Kochava.createForAngular(); // $ExpectType Kochava

kochava.startWithAppGuid("app-guid"); // $ExpectType void
kochava.sendPageEvent("page-name", { data: "data" }); // $ExpectType void
kochava.sendEvent("event-name", { data: "data" }); // $ExpectType void
kochava.registerIdentityLink("identity-link-name", "identifier"); // $ExpectType void
kochava.setSleep(true); // $ExpectType void
kochava.getDeviceId(); // $ExpectType string
kochava.setLogLevel("info"); // $ExpectType void
kochava.shutdown(true); // $ExpectType void
kochava.shutdown(false); // $ExpectType void
kochava.useCookies(true); // $ExpectType void
kochava.useCookies(false); // $ExpectType void
kochava.disableAutoPage(true); // $ExpectType void
kochava.disableAutoPage(false); // $ExpectType void
kochava.executeAdvancedInstruction("wrapper", "{data:\"some data\"}", () => {}); // $ExpectType void
kochava.registerCustomValue("key", "value"); // $ExpectType void
kochava.registerCustomDeviceIdentifier("key", "value"); // $ExpectType void
kochava.getStarted(); // $ExpectType boolean
