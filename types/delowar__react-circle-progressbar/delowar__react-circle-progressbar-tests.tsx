import Progress, { Gradient, ProgressProps, Shadow } from "@delowar/react-circle-progressbar";
import * as React from "react";

// With no required props
<Progress />;

// With optional props
<Progress
    size={180}
    borderWidth={15}
    borderBgWidth={15}
    fillColor="#288feb"
    emptyColor="#288feb"
    background="none"
    className="custom-class"
    percent={40}
    linecap="round"
    transition={200}
    viewport
    onViewport={(element) => {
        // $ExpectType ReactElement<unknown, string | JSXElementConstructor<any>>
        element;
    }}
>
    40%
</Progress>;

// With empty Gradient
<Progress
    isGradient
    gradient={{}}
/>;

// With optional Gradient values
<Progress
    isGradient
    gradient={{ angle: 0, startColor: "#ff0000", stopColor: "#ffff00" }}
/>;

// With empty Shadow
<Progress
    isShadow
    shadow={{}}
/>;

// With optional Shadow values
<Progress
    isShadow
    shadow={{ inset: false, vertical: 3, horizontal: 0, blur: 0, opacity: 0.4, color: "#000000" }}
/>;

// With empty BG Shadow
<Progress
    isBgShadow
    bgShadow={{}}
/>;

// With optional BG Shadow values
<Progress
    isBgShadow
    bgShadow={{ inset: false, vertical: 3, horizontal: 0, blur: 0, opacity: 0.4, color: "#000000" }}
/>;
