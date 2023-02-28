/* Example taken from Google Drive API JavaScript Quickstart https://developers.google.com/drive/v2/web/quickstart/js */

{
    // Client ID and API key from the Developer Console
    var CLIENT_ID = '<YOUR_CLIENT_ID>';

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

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
            loadDriveApi();
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
     * Load Google Drive client library.
     */
    function loadDriveApi() {
        gapi.client.load('drive', 'v2', () => null);
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    function appendPre(message: string) {
        var pre = document.getElementById('content')!;
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
    }

    /**
     * Print files.
     */
    function listFiles() {
        gapi.client.drive.files.list({
            'maxResults': 10
        }).then(function(response: any) {
            appendPre('Files:');
            var files = response.result.items;
            if (files && files.length > 0) {
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    appendPre(file.title + ' (' + file.id + ')');
                }
            } else {
                appendPre('No files found.');
            }
        });
    }

    /**
     * Get file.
     */
    function getFile() {
        gapi.client.drive.files.get({
            fileId: '1',
            supportsAllDrives: true,
            fields: 'embedLink, title, mimeType, description',
        }).then(function(response: any) {
            appendPre('File:');
            var file = response.result;
            if (file) {
                appendPre(file.title + ' (' + file.id + ')');
            } else {
                appendPre('No files found.');
            }
        });
    }
}
