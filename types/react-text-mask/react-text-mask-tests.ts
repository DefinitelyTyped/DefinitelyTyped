import { conformToMask } from "react-text-mask";

// $ExpectType conformToMaskResult
conformToMask("123", ["(", /\d/, /\d/, ")"]);
