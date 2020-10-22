// Type definitions for react-native-dotenv 0.2
// Project: https://github.com/zetachang/react-native-dotenv
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface Env {
    [name: string]: string;
}

declare const env: Env;
export = env;
