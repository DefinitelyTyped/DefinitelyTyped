import * as Halogenium from "halogenium";
import * as React from "react";

class HalogenTests_RotateLoader_withNoProps extends React.Component {
    render() {
        return <Halogenium.RotateLoader />;
    }
}

class HalogenTests_RotateLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogenium.RotateLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="middle"
                margin="10px"
                size="100px"
            />
        );
    }
}
