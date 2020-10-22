import * as React from 'react';
import * as FBSDK from 'react-native-fbsdk';
import { View } from 'react-native';

declare function alert(s: string): void;

const {
    LoginButton,
    AccessToken,
    LoginManager,
    ShareDialog,
    AppEventsLogger,
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export class Login extends React.Component {
    render() {
        return (
            <View>
                <LoginButton
                    permissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        if (data) {
                                            alert(data.accessToken.toString());
                                        }
                                    }
                                );
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}
                />
            </View>
        );
    }
}

// Attempt a login using the Facebook login dialog asking for default permissions.
LoginManager.logInWithPermissions(['public_profile']).then(
    result => {
        if (result.isCancelled) {
            alert('Login cancelled');
        } else {
            alert(`Login success with permissions: ${result.grantedPermissions}`);
        }
    },
    error => {
        alert(`Login fail with error: ${error}`);
    }
);

// Build up a shareable link.
const shareLinkContent: FBSDK.ShareLinkContent = {
    contentType: 'link',
    contentUrl: "https://facebook.com",
    contentDescription: 'Wow, check out this great site!',
};

// Share the link using the share dialog.
export const shareLinkWithShareDialog = (): void => {
    ShareDialog.canShow(shareLinkContent).then(
        (canShow) => {
            if (canShow) {
                return ShareDialog.show(shareLinkContent);
            }
        }
    ).then(
        (result) => {
            if (result.isCancelled) {
                alert('Share cancelled');
            } else {
                alert(`Share success with postId: ${result.postId}`);
            }
        },
        (error: Error) => {
            alert(`Share fail with error: ${error}`);
        }
    );
};

const obj = { param: 'value' };
AppEventsLogger.logPurchase(15, 'USD', obj);

// Build user data
const userData: FBSDK.UserData = {
    email: 'johndoe@gmail.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '078787878787',
    dateOfBirth: '04/02/2020',
    gender: 'm',
    city: 'Nottingham',
    state: 'Nottinghamshire',
    zip: 'NG2 7DU',
    country: 'United Kingdom',
};
AppEventsLogger.setUserData(userData);

const responseInfoCallback: FBSDK.GraphRequestCallback = (error, result) => {
    if (error) {
        alert(`Error fetching data: ${error}`);
    } else {
        alert(`Success fetching data: ${result}`);
    }
};

// Create a graph request asking for user information with a callback to handle the response.
const infoRequest = new GraphRequest(
    '/me',
    null,
    responseInfoCallback,
);

// Start the graph request.
new GraphRequestManager().addRequest(infoRequest).start();
