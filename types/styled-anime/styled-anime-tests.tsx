import * as React from "react";

import { styledAnime } from "styled-anime";

const FloatingRectangle = styledAnime("div")`
    width: 100px;
    height: 100px;
    background: #ddd;
`({
    loop: true,
    duration: 3000,
    translateY: [{ duration: 0, value: 0 }, 10, 0],
    easing: "easeInOutSine"
});

class Example extends React.Component {
    public render() {
        return (
            <FloatingRectangle />
        );
    }
}
