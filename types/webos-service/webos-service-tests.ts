import Service, { ActivityManager } from "webos-service";
const service = new Service("test"); // $ExpectType Service
service.activityManager; // $ExpectType ActivityManager
service.activityManager.idleTimeout = 2;
const sub = service.subscribe("test", {}); // $ExpectType Subscription
sub.uri; // $ExpectType string
