import * as React from 'react';
import GooglePicker from 'react-google-picker';

const ReactGooglePickerTest = () => {
    /* All code samples taken from project README */
    return (
        <>
            <GooglePicker
                clientId={'your-client-id'}
                developerKey={'your-developer-key'}
                scope={['https://www.googleapis.com/auth/drive.readonly']}
                onChange={data => console.log('on change:', data)}
                onAuthFailed={data => console.log('on auth failed:', data)}
                multiselect={true}
                navHidden={true}
                authImmediate={false}
                mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                query={'a query string like .txt or fileName'}
                viewId={'DOCS'}
            >
                <button>Pick a file</button>
            </GooglePicker>

            <GooglePicker
                clientId={'your-client-id'}
                developerKey={'your-developer-key'}
                scope={['https://www.googleapis.com/auth/drive.readonly']}
                onChange={data => console.log('on change:', data)}
                onAuthenticate={token => console.log('oauth token:', token)}
                onAuthFailed={data => console.log('on auth failed:', data)}
                multiselect={true}
                navHidden={true}
                authImmediate={false}
                mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                viewId={'DOCS'}
            >
                <button>Pick a file</button>
            </GooglePicker>

            <GooglePicker
                clientId={'your-client-id'}
                developerKey={'your-developer-key'}
                scope={['https://www.googleapis.com/auth/drive.readonly']}
                onChange={data => console.log('on change:', data)}
                onAuthFailed={data => console.log('on auth failed:', data)}
                multiselect={true}
                navHidden={true}
                authImmediate={false}
                viewId={'FOLDERS'}
                createPicker={(google, oauthToken) => {
                    const googleViewId = google.picker.ViewId.FOLDERS;
                    const docsView = new google.picker.DocsView(googleViewId)
                        .setIncludeFolders(true)
                        .setMimeTypes('application/vnd.google-apps.folder')
                        .setSelectFolderEnabled(true);

                    const picker = new window.google.picker.PickerBuilder()
                        .addView(docsView)
                        .setOAuthToken(oauthToken)
                        .setDeveloperKey('your-developer-key')
                        .setCallback(() => {
                            console.log('Custom picker is ready!');
                        });

                    picker.build().setVisible(true);
                }}
            >
                <span>Click</span>
                <div className="google"></div>
            </GooglePicker>
        </>
    );
};
