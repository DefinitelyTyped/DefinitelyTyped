import * as React from "react";
import FacebookLogin, {
    ReactFacebookFailureResponse,
    ReactFacebookLoginInfo,
    ReactFacebookLoginProps,
} from "react-facebook-login";
import FacebookLoginRender, { RenderProps } from "react-facebook-login/dist/facebook-login-render-props";

const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
};

const failureResponseFacebook = (response: ReactFacebookFailureResponse) => {
    console.log(response);
};

const loginInfoOrFailureResponse = (response: ReactFacebookLoginInfo | ReactFacebookLoginInfo) => {
    console.log(response);
};

const componentClicked = () => {
    console.log("component clicked");
};

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
/>;

<FacebookLoginRender
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
/>;

<FacebookLoginRender
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
    render={(props: RenderProps) => <button onClick={props.onClick}>Facebook</button>}
/>;

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={loginInfoOrFailureResponse}
/>;

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
    onFailure={failureResponseFacebook}
/>;

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
/>;

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon={<div className="myIcon" />}
/>;

<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon={<div className="myIcon" />}
/>;

class MyComponent extends React.Component {
    private responseFacebook(response: ReactFacebookLoginInfo) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={responseFacebook}
            />
        );
    }
}

class MyComponent2 extends React.Component {
    private responseFacebook(response: ReactFacebookLoginInfo) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
            />
        );
    }
}

type FacebookLoginWrapperProps = ReactFacebookLoginProps & { className?: string | undefined };

export const FacebookLoginWrapper = ({ className, ...props }: FacebookLoginWrapperProps) => (
    <FacebookLogin {...props} cssClass={className} />
);
