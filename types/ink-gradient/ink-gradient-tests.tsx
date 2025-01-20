import * as Box from "ink-box";
import * as Gradient from "ink-gradient";
import * as React from "react";

function test() {
    return (
        <Gradient name="rainbow">
            <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
                I Love TypeScript!
            </Box>
        </Gradient>
    );
}

// function exclusivity() {
//     return (
//         // @ts-expect-error: colors + name cannot be used together
//         <Gradient name="rainbow" colors={[{ r: 100, g: 100, b: 100 }]}>
//             <Box borderStyle="round" borderColor="cyan" float="center" padding={1}>
//                 I'm mutually exclusive!
//             </Box>
//         </Gradient>
//     );
// }
