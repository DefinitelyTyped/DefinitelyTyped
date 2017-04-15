

// access to user agent.
var userAgent = swfobject.ua;
console.log(userAgent.w3, userAgent.pv, userAgent.mac, userAgent.win, userAgent.ie, userAgent.wk);

// get flash player version.
var version = swfobject.getFlashPlayerVersion();
console.log(version.major, version.minor);
console.log('hasPlayerVersion', swfobject.hasFlashPlayerVersion('10.0.0'));

// listen to dom load event.
swfobject.addDomLoadEvent(() => {
  console.log('dom load event.');
});

// listen to load event.
swfobject.addLoadEvent((event?: Event) => {
  console.log(event);
});

// embed swf
swfobject.embedSWF(
  'test.swf',
  'myContent',
  '300',
  '120',
  '10.0.0',
  'expressInstall.swf',
  {},
  {},
  {},
  () => {
    console.log('embedded.');
    console.log(swfobject.getObjectById('myContent'));
  }
);

// show express install
swfobject.showExpressInstall(
  {},
  {},
  'expressInstall',
  () => {
  }
);
