import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const time: ShaderNodeObject<Node>;
export const deltaTime: ShaderNodeObject<Node>;
export const frameId: ShaderNodeObject<Node>;

/**
 * @deprecated Use "time" instead.
 */
export const timerLocal: (timeScale?: number) => ShaderNodeObject<Node>;

/**
 * @deprecated Use "time" instead.
 */
export const timerGlobal: (timeScale?: number) => ShaderNodeObject<Node>;

/**
 * @deprecated Use "deltaTime" instead.
 */
export const timerDelta: (timeScale?: number) => ShaderNodeObject<Node>;
