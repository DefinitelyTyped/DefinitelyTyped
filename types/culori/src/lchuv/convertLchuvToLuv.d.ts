import { Luv } from "../luv/types.js";
import { Lchuv } from "./types.js";

declare function convertLchuvToLuv(color: Omit<Lchuv, "mode">): Luv;

export default convertLchuvToLuv;
