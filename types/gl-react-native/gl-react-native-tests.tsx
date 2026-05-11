import { GLSL, Node, Shaders } from "gl-react";
import { Surface } from "gl-react-native";
import * as React from "react";

const shaders = Shaders.create({
    Test: {
        frag: GLSL`
      precision highp float;
      varying vec2 uv;
      void main() {
        gl_FragColor = vec4(uv.x, uv.y, 0.5, 1.0);
      }`,
    },
});

const App = () => (
    <div>
        <Surface>
            <Node shader={shaders.HelloBlue} />
        </Surface>
    </div>
);

const element = document.createElement("div");
document.body.appendChild(element);
