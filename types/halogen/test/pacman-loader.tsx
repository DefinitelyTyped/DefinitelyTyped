import * as Halogen from "halogen";
import * as React from "react";

class HalogenTests_PacmanLoader_withNoProps extends React.Component {
    render() {
        return <Halogen.PacmanLoader />;
    }
}

class HalogenTests_PacmanLoader_withAllProps extends React.Component {
    render() {
        return (
            <Halogen.PacmanLoader
                loading={false}
                color="black"
                id="MyLoader"
                className="loader"
                verticalAlign="middle"
                margin={10}
                size={200}
            />
        );
    }
}
