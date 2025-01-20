import { Luv } from "../luv/types";
import { Lchuv } from "./types";

declare function convertLchuvToLuv(color: Omit<Lchuv, "mode">): Luv;

export default convertLchuvToLuv;
