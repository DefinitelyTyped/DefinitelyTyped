import broccoliMergeTrees = require("broccoli-merge-trees");

// $ExpectType MergeTrees
broccoliMergeTrees(["public", "scripts"]);

// $ExpectType MergeTrees
broccoliMergeTrees(["public", "scripts"], { overwrite: true, destDir: "assets", annotation: "annotation" });

import { MergeTrees } from "broccoli-merge-trees";

// $ExpectType MergeTrees
new MergeTrees(["public", "scripts"]);

new MergeTrees(["public", "scripts"], { overwrite: true, destDir: "assets", annotation: "annotation" });
