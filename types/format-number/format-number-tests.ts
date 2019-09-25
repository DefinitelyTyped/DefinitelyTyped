import createFormatNumber from "format-number";

createFormatNumber({ round: 2 }); // $ExpectType (number: number, overrideOptions?: { noUnits: boolean; noSeparator: boolean; } | undefined) => string

createFormatNumber({ round: 2 })(12); // $ExpectType string
