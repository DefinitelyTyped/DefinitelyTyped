import * as React from "react";
import Marquee from "react-text-marquee";

class Test extends React.Component {
    render() {
        return (
            <Marquee
                text="Loremipsum dolor sit amet, consectetur adipiscing elit"
                hoverToStop={true}
                loop={true}
                leading={1}
                trailing={1}
            />
        );
    }
}
