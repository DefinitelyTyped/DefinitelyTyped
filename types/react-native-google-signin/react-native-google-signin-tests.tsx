import * as React from 'react';
import { GoogleSignin, GoogleSigninButton, User } from 'react-native-google-signin';
import { StyleSheet, ViewStyle, View, Text, TouchableHighlight } from 'react-native';

interface State {
    user?: User;
}

export default class Signin extends React.Component<{}, State> {
    state: State = {};

    componentDidMount() {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        }).then(() => GoogleSignin.hasPlayServices({ autoResolve: true }));
    }

    async handleSigninPress(): Promise<void> {
        const user = await GoogleSignin.signIn();
        this.setState({ user });
    }

    handleSignoutPress(): Promise<void> {
        return GoogleSignin.signOut();
    }

    render() {
        if (this.state.user) {
            return (
                <View>
                    <Text>{this.state.user.name}</Text>
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
    button: { width: 312, height: 48 }
});
