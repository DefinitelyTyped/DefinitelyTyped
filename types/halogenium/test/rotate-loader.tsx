import Halogenium = require("halogenium");
import React = require("react");

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
