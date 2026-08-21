import { fontFamily, fontWeight, getTypeSize, print } from "@carbon/type";

fontFamily("mono"); // $ExpectType { fontFamily: string; }
fontWeight("light"); // $ExpectType { fontWeight: number; }
print(fontFamily("mono")); // $ExpectType string
getTypeSize(2); // $ExpectType number
