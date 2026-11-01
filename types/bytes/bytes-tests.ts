import bytes = require("bytes");
import { BytesOptions, Unit } from "bytes";

const options: BytesOptions = {
    decimalPlaces: 2,
    thousandsSeparator: ",",
    unitSeparator: " ",
    fixedDecimals: false,
    unit: "MB",
};

// $ExpectType string | null
bytes(1024);

// $ExpectType string | null
bytes(1024, options);

// $ExpectType string | null
bytes(1024, { decimalPlaces: 0, fixedDecimals: true });

// $ExpectType number | null
bytes("1KB");

// $ExpectType number | null
bytes("10.5 MB");

// $ExpectType number | null
bytes.parse("100GB");

// $ExpectType number | null
bytes.parse("1024");

// $ExpectType number | null
bytes.parse(1024);

// $ExpectType string | null
bytes.format(1024);

// $ExpectType string | null
bytes.format(1024 * 1024, options);

// $ExpectType string | null
bytes.format(1024 * 1024 * 1024, { unit: "GB", unitSeparator: "_" });

const kb: Unit = "KB";
const mb: Unit = "MB";
const gb: Unit = "GB";

// $ExpectType string | null
bytes.format(1000, { unit: kb });

// $ExpectType string | null
bytes.format(1000, { unit: mb });

// $ExpectType string | null
bytes.format(1000, { unit: gb });
