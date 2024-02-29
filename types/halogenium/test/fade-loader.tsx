import * as Halogenium from "halogenium";
import * as React from "react";

class HalogenTests_FadeLoader_withNoProps extends React.Component {
    render() {
        return <Halogenium.FadeLoader />;
    }
}

class HalogenTests_FadeLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogenium.FadeLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="middle"
                size="100px"
                margin="10px"
                height="200px"
                width="200px"
                radius="5px"
            />
        );
    }
}
