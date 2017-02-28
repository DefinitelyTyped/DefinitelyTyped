

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

function test_signIn(){
  gapi.auth2.getAuthInstance().signIn({
    scope: 'email profile',
    prompt: 'content'
  });
}

function test_signInOptionsBuild(){
  var options = new gapi.auth2.SigninOptionsBuilder();
  options.setAppPackageName('com.example.app');
  options.setFetchBasicProfile(true);
  options.setPrompt('select_account');
  options.setScope('profile').setScope('email');
  gapi.auth2.getAuthInstance().signIn(options);
}

function test_getAuthResponse(){
  var user = gapi.auth2.getAuthInstance().currentUser.get();
  var authResponse = user.getAuthResponse();
  var authResponseWithAuth = user.getAuthResponse(true);
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
