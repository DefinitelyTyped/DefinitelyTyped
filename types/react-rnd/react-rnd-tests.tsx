import React = require("react");
import Rnd = require("react-rnd");

const onResize: Rnd.ResizeCallback = (e, direction, ref, delta, position) => {
    direction === "right";
    delta.width;
    delta.height;
    position.x;
    position.y;
};

const enable = {
    bottom: false,
    bottomLeft: false,
    bottomRight: true,
    left: false,
    right: false,
    top: false,
    topLeft: false,
    topRight: false
};

const defaultProp: Rnd.defaultProps = {
    x: 0,
    y: 1,
    width: "150px"
};

<Rnd
    default={defaultProp}
    className="class"
    lockAspectRatio
    maxWidth={100}
    enableResizing={enable}
    resizeHandleStyles={{
        top: { background: "#000" }
    }}
/>;
