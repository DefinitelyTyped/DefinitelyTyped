import * as React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export default class ReactAnimateOnScrollTest extends React.Component {
    render() {
        return (
            <ScrollAnimation animateIn="fadeIn">
                Some Text
            </ScrollAnimation>
        );
    }
}
