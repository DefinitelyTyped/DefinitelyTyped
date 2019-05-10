import * as cryptex from "cryptex";

cryptex.decrypt("") // $ExpectType Promise<string>
cryptex.encrypt("") // $ExpectType Promise<string>
cryptex.getSecret("") // $ExpectType Promise<string>
cryptex.getSecrets([""]) // $ExpectType Promise<Array<string>>
