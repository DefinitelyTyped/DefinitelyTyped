import * as jest from "jest-cli";

// $ExpectType Promise<void>
jest.run(["--config", JSON.stringify({})]);
