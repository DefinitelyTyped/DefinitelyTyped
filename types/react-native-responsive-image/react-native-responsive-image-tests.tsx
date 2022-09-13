import * as React from "react";
import ResponsiveImage from "react-native-responsive-image";

class Example extends React.Component {
    render() {
        return <ResponsiveImage source={{ uri: "https://reactjs.org/logo-og.png" }} initWidth={138} initHeight={138} />;
    }
}

export default Example;
