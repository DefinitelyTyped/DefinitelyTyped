import { Luv } from "../luv/types";
import { Lchuv } from "./types";

declare function convertLuvToLchuv(color: Omit<Luv, "mode">): Lchuv;

export default convertLuvToLchuv;
