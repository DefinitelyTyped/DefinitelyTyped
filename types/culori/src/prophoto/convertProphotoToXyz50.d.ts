import { Xyz50 } from "../xyz50/types";
import { Prophoto } from "./types";

declare function convertProphotoToXyz50(color: Omit<Prophoto, "mode">): Xyz50;

export default convertProphotoToXyz50;
