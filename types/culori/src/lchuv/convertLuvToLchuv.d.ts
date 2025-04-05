import { Luv } from "../luv/types.js";
import { Lchuv } from "./types.js";

declare function convertLuvToLchuv(color: Omit<Luv, "mode">): Lchuv;

export default convertLuvToLchuv;
