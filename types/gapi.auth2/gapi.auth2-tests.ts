/// <reference types="gapi.people" />

function test_init() {
  const auth: gapi.auth2.GoogleAuth = gapi.auth2.init({
    client_id: 'my-id',
    cookie_policy: 'single_host_origin',
    scope: 'https://www.googleapis.com/auth/plus.login',
    fetch_basic_profile: true
  });
}

function test_getAuthInstance() {
  gapi.auth2.init({
    client_id: 'my-id',
    cookie_policy: 'single_host_origin',
    scope: 'https://www.googleapis.com/auth/plus.login',
    fetch_basic_profile: true,
    ux_mode: "popup",
    redirect_uri: "https://www.example.com"
  });
  const auth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
}

function test_signIn() {
  gapi.auth2.getAuthInstance().signIn({
    scope: 'email profile',
    prompt: 'content'
  });
}

function test_signInOptionsBuild() {
  const options = new gapi.auth2.SigninOptionsBuilder();
  options.setAppPackageName('com.example.app');
  options.setFetchBasicProfile(true);
  options.setPrompt('select_account');
  options.setScope('profile').setScope('email');
  gapi.auth2.getAuthInstance().signIn(options);
}

function test_getAuthResponse() {
  const user: gapi.auth2.GoogleUser = gapi.auth2.getAuthInstance().currentUser.get();
  const authResponse: gapi.auth2.AuthResponse = user.getAuthResponse();
  const authResponseWithAuth: gapi.auth2.AuthResponse = user.getAuthResponse(true);
}

function test_reloadAuthResponse() {
  gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse()
    .then(response => {
      const token: string = response.access_token;
      const expires_in: number = response.expires_in;
    });
}

function test_render() {
  const success = (googleUser: gapi.auth2.GoogleUser): void => {
    console.log(googleUser);
  };
  const failure = (): void => {
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

/* Example taken from https://developers.google.com/identity/sign-in/web/ */
function onSignIn(googleUser: gapi.auth2.GoogleUser) {
  // Useful data for your client-side scripts:
  const profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  const id_token: string = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

/* Example taken from https://github.com/google/google-api-javascript-client/blob/master/samples/authSample.html */

// Enter an API key from the Google API Console:
//   https://console.developers.google.com/apis/credentials
const apiKey = 'YOUR_API_KEY';
// Enter the API Discovery Docs that describes the APIs you want to
// access. In this example, we are accessing the People API, so we load
// Discovery Doc found here: https://developers.google.com/people/api/rest/
const discoveryDocs = ["https://people.googleapis.com/$discovery/rest?version=v1"];
// Enter a client ID for a web application from the Google API Console:
//   https://console.developers.google.com/apis/credentials?project=_
// In your API Console project, add a JavaScript origin that corresponds
//   to the domain where you will be running the script.
const clientId = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';
// Enter one or more authorization scopes. Refer to the documentation for
// the API or https://developers.google.com/people/v1/how-tos/authorizing
// for details.
const scopes = 'profile';
const authorizeButton = document.getElementById('authorize-button');
const signoutButton = document.getElementById('signout-button');
function handleClientLoad() {
  // Load the API client and auth2 library
  gapi.load('client:auth2', initClient);
}
function initClient() {
  gapi.client.init({
    apiKey,
    discoveryDocs,
    clientId,
    scope: scopes
  }).then(() => {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}
function updateSigninStatus(isSignedIn: boolean) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    makeApiCall();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}
function handleAuthClick(event: MouseEvent) {
  gapi.auth2.getAuthInstance().signIn();
}
function handleSignoutClick(event: MouseEvent) {
  gapi.auth2.getAuthInstance().signOut();
}
// Load the API and make an API call.  Display the results on the screen.
function makeApiCall() {
  gapi.client.people.people.get({
    resourceName: 'people/me'
  }).then((resp) => {
    const p = document.createElement('p');
    const name = resp.result.names[0].givenName;
    p.appendChild(document.createTextNode(`Hello, ${name}!`));
    document.getElementById('content').appendChild(p);
  });
}
