const service = new WebosService.Service("test"); // $ExpectType Service
service.activityManager; // $ExpectType ActivityManager
const sub = service.subscribe("test", {}); // $ExpectType Subscription
sub.uri; // $ExpectType string
