import * as React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { GoogleSignin, GoogleSigninButton, statusCodes, User } from "react-native-google-signin";

interface State {
    user?: User | undefined;
}

export default class Signin extends React.Component<{}, State> {
    state: State = {};

    async componentDidMount() {
        GoogleSignin.configure({
            scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        });
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    }

    async handleSigninPress(): Promise<void> {
        let user;
        try {
            user = await GoogleSignin.signInSilently();
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                user = await GoogleSignin.signIn();
            }
        }
        if (user) {
            this.setState({ user });
        }
    }

    handleSignoutPress(): Promise<void> {
        return GoogleSignin.signOut();
    }

    render() {
        if (this.state.user) {
            return (
                <View>
                    <Text>{this.state.user.user.name}</Text>
                    <TouchableHighlight onPress={() => this.handleSignoutPress()}>
                        <Text>Sign Out</Text>
                    </TouchableHighlight>
                </View>
            );
        }
        return (
            <GoogleSigninButton
                style={styles.button}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => this.handleSigninPress()}
            />
        );
    }
}

const styles = StyleSheet.create({
    button: { width: 312, height: 48 },
});
