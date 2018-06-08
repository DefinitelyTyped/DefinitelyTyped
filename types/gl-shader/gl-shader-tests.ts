import createShader = require("gl-shader");

const gl = new WebGLRenderingContext();

let shader = createShader(gl, "", "");

shader = createShader(gl, "", "", []);
shader = createShader(gl, "", "", [], []);
shader = createShader(gl, "", "", [{name: "foo", type: "bool"}]);
shader = createShader(gl, "", "", [{name: "foo", type: "bool"}, {name: "bar", type: "float"}]);
shader = createShader(gl, "", "", [{name: "foo", type: "bool"}], [{name: "bar", type: "float"}]);

shader = createShader(gl, {vertex: "", fragment: ""});
shader = createShader(gl, {vertex: "", fragment: "", uniforms: [{name: "foo", type: "bool"}]});
shader = createShader(gl, {vertex: "", fragment: "", uniforms: [{name: "foo", type: "bool"}]});
shader = createShader(gl, {
    vertex: "",
    fragment: "",
    uniforms: [{name: "foo", type: "bool"}],
    attributes: [{name: "bar", type: "float"}]
});

shader.bind();
shader.dispose();
shader.update("", "");
shader.update("", "", [{name: "foo", type: "bool"}]);
shader.update("", "", [{name: "foo", type: "bool"}], [{name: "foo", type: "bool"}]);

shader.uniforms;
shader.uniforms.color;
shader.uniforms.color = 4;
shader.uniforms.color = [ 1, 0, 0, 0 ];

shader.uniforms = {
    model: [ 1, 2, 3, 4 ],
    foo: 13
};

shader.attributes;
shader.attributes.position.length;
shader.attributes.position.pointer();
