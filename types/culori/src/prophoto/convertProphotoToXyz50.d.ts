import { Xyz50 } from "../xyz50/types.js";
import { Prophoto } from "./types.js";

declare function convertProphotoToXyz50(color: Omit<Prophoto, "mode">): Xyz50;

export default convertProphotoToXyz50;
