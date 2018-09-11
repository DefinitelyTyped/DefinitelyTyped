'use strict';

import * as Hapi from '../../';

var route = <Hapi.RoutePublicInterface> {};

var a: string = route.method;
var a: string = route.path;
if (typeof(route.vhost) == 'string') {
  var a: string = route.vhost;
} else {
  var b: string[] = route.vhost!;
}
var c: Hapi.ServerRealm = route.realm;
var d: Hapi.RouteAdditionalConfigurationOptions = route.settings;
var a: string = route.fingerprint;
var e: boolean = route.auth.access(<Hapi.Request> {});
