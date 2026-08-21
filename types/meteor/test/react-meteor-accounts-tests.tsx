import * as React from 'react';
import {
    useUser,
    useUserId,
    useLoggingIn,
    useLoggingOut,
    withUser,
    withUserId,
    withLoggingIn,
    withLoggingOut,
} from 'meteor/react-meteor-accounts';

function User() {
    const user = useUser();

    if (user === null) {
        return <h1>Log in</h1>;
    }

    return <h1>Hello {user.username}</h1>;
}

function UserId() {
    const userId = useUserId();

    return (
        <div>
            <h1>Account Details</h1>
            {userId ? <p>Your unique account id is {userId}.</p> : <p>Log-in to view your account details.</p>}
        </div>
    );
}

function LoggingIn() {
    const loggingIn = useLoggingIn();

    if (!loggingIn) {
        return null;
    }

    return <div>Logging in, please wait a moment.</div>;
}

function LoggingOut() {
    const loggingOut = useLoggingOut();

    if (!loggingOut) {
        return null;
    }

    return <div>Logging out, please wait a moment.</div>;
}

interface DemoClassProps {
    user: Meteor.User;
    userId: string;
    loggingIn: boolean;
    loggingOut: boolean;
}

class WithUser extends React.Component<DemoClassProps> {
    render() {
        if (this.props.user === null) {
            return <h1>Log in</h1>;
        }

        return <h1>Hello {this.props.user.username}</h1>;
    }
}

const FooWithUser = withUser(WithUser);

class WithUserId extends React.Component<DemoClassProps> {
    render() {
        return (
            <div>
                <h1>Account Details</h1>
                {this.props.userId ? (
                    <p>Your unique account id is {this.props.userId}.</p>
                ) : (
                    <p>Log-in to view your account details.</p>
                )}
            </div>
        );
    }
}

const FooWithUserId = withUserId(WithUserId);

class WithLoggingIn extends React.Component<DemoClassProps> {
    render() {
        if (!this.props.loggingIn) {
            return null;
        }

        return <div>Logging in, please wait a moment.</div>;
    }
}

const FooWithLoggingIn = withLoggingIn(WithLoggingIn);

class WithLoggingOut extends React.Component<DemoClassProps> {
    render() {
        if (!this.props.loggingOut) {
            return null;
        }

        return <div>Logging out, please wait a moment.</div>;
    }
}

const FooWithLoggingOut = withLoggingOut(WithLoggingOut);
