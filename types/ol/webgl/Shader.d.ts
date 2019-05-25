export default class WebGLShader {
    constructor(source: string);
    getSource(): string;
    getType(): number;
    isAnimated(): boolean;
}
