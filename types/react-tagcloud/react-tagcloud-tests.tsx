import * as React from "react";
import { RendererFunction, Tag, TagCloud } from "react-tagcloud";

let data: Tag[] = [
    { value: "jQuery", count: 25 },
    { value: "MongoDB", count: 18 },
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "Nodejs", count: 28 },
    { value: "Express.js", count: 25, key: "expr" },
    { value: "HTML5", count: 33, color: "blue" },
    { value: "CSS3", count: 20, props: { style: { textDecoration: "underline" } } },
];

const customRenderer: RendererFunction = (tag, size, color) => (
    <span
        key={tag.key ?? tag.value}
        style={{
            animation: "blinker 3s linear infinite",
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${size / 2}em`,
            border: `2px solid ${color}`,
            margin: "3px",
            padding: "3px",
            display: "inline-block",
            color: "white",
        }}
    >
        {tag.value}
    </span>
);

export function MyTagCloud() {
    return (
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            shuffle={false}
            disableRandomColor={false}
            randomSeed={123456}
            colorOptions={{ hue: "green", luminosity: "bright", count: 100, seed: 123, format: "rgba", alpha: 0.9 }}
            onClick={(tag, event) => console.log("click on:", tag.value, event.target)}
            onDoubleClick={(tag, event) => console.log("dbl-click on:", tag.value, event.target)}
            onMouseMove={(tag, event) => console.log("hover on:", tag.value, event.target)}
            renderer={customRenderer}
        />
    );
}
