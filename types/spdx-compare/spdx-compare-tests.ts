import { eq, gt, lt } from "spdx-compare";

// $ExpectType boolean
gt("GPL-3.0", "GPL-2.0");

// $ExpectType boolean
lt("GPL-2.0", "GPL-3.0");

// $ExpectType boolean
eq("GPL-2.0", "GPL-2.0");
