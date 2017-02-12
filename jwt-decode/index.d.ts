// Type definitions for jwt-decode v1.4.0
// Project: https://github.com/auth0/jwt-decode
// Definitions by: Giedrius Grabauskas <https://github.com/QuatroDevOfficial/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace JwtDecode {
    interface JwtDecodeStatic {
        (token: string): any;
    }
}

declare var jwtDecode: JwtDecode.JwtDecodeStatic;
export = jwtDecode;
export as namespace jwt_decode;