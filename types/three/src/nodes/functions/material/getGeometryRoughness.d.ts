import MathNode from "../../math/MathNode.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const getGeometryRoughness: () => ShaderNodeObject<MathNode>;

export default getGeometryRoughness;
