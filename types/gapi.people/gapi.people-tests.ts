/* Example taken from Google People API JavaScript Quickstart https://developers.google.com/people/quickstart/js */

{
  // Your Client ID can be retrieved from your project in the Google
  // Developer Console, https://console.developers.google.com
  var CLIENT_ID = '<YOUR_CLIENT_ID>';

  var SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"];

  /**
   * Check if current user has authorized this application.
   */
  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
  }

  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult: GoogleApiOAuth2TokenObject) {
    var authorizeDiv = document.getElementById('authorize-div')!;
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      loadPeopleApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
    }
  }

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  function handleAuthClick(event: MouseEvent) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
    return false;
  }

  /**
   * Load Google People client library. List names if available
   * of 10 connections.
   */
  function loadPeopleApi() {
    gapi.client.load('https://people.googleapis.com/$discovery/rest', 'v1', listConnectionNames);
  }

  /**
   * Print the display name if available for 10 connections.
   */
  function listConnectionNames() {
    var request = gapi.client.people.people.connections.list({
        'resourceName': 'people/me',
        'pageSize': 10,
        'personFields': 'names'
      });

      request.execute(function(resp) {
        var connections = resp.connections;
        appendPre('Connections:');

        if (connections.length > 0) {
          for (var i = 0; i < connections.length; i++) {
            var person = connections[i];
            if (person.names && person.names.length > 0) {
              appendPre(person.names[0].displayName)
            } else {
              appendPre("No display name found for connection.");
            }
          }
        } else {
          appendPre('No upcoming events found.');
        }
      });
  }

  /**
   * Append a pre element to the body containing the given message
   * as its text node.
   *
   * @param {string} message Text to be placed in pre element.
   */
  function appendPre(message: string) {
    var pre = document.getElementById('output')!;
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }
}
