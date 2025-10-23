import Halogen = require("halogen");
import React = require("react");

class HalogenTests_ClipLoader_withNoProps extends React.Component {
    render() {
        return <Halogen.ClipLoader />;
    }
}

class HalogenTests_ClipLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogen.ClipLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="bottom"
                size="200px"
            />
        );
    }
}
