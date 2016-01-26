/// <reference path="gapi.auth2.d.ts" />

function test_init(){
  var auth = gapi.auth2.init({
    client_id: 'my-id',
    cookie_policy: 'single_host_origin',
    scope: 'https://www.googleapis.com/auth/plus.login',
    fetch_basic_profile: true
  });
}

function test_getAuthInstance(){
  gapi.auth2.init({
    client_id: 'my-id',
    cookie_policy: 'single_host_origin',
    scope: 'https://www.googleapis.com/auth/plus.login',
    fetch_basic_profile: true
  });
  var auth = gapi.auth2.getAuthInstance();
}

function test_render(){
  var success = (googleUser: gapi.auth2.GoogleUser): void => {
    console.log(googleUser);
  };
  var failure = (): void => {
    console.log('Failure callback');
  };

  gapi.signin2.render('testId', {
    scope: 'https://www.googleapis.com/auth/plus.login',
    width: 250,
    height: 50,
    longtitle: true,
    theme: 'dark',
    onsuccess: success,
    onfailure: failure
  });
}
