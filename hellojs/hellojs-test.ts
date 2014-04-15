/// <reference path="hellojs.d.ts" />

hello.init(
  {
    'facebook': '<app key>',
  },
  {
    redirect_uri: 'hello.html',
    display: 'page',
  }
  );

hello('facebook').login();

hello('facebook').logout();

hello.on('auth.login', auth => {
  alert('log to ' + auth.network)
}).on('auth.logout', auth => {
    alert('unlog from ' + auth.network)
  });

hello.getAuthResponse('facebook');

hello.login('facebook', null, () => {
  var req = hello.getAuthResponse('facebook');
});

hello.logout('facebook');

var serviceInfo = hello.service('facebook');

