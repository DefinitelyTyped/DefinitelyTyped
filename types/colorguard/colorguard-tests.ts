import postcss = require("postcss");
import colorguard = require("colorguard");

postcss([colorguard]);
postcss([colorguard()]);
postcss([colorguard({})]);
postcss([
    colorguard({
        ignore: ["#ffffff"] as const,
        threshold: 3,
        whitelist: [["#000000", "#010101"]] as const,
        allowEquivalentNotation: true,
    }),
]);

colorguard.process("* {}"); // $ExpectType LazyResult
colorguard.process("* {}", {}); // $ExpectType LazyResult
