// Type definitions for jwt-decode v1.4.0
// Project: https://github.com/auth0/jwt-decode
// Definitions by: Giedrius Grabauskas <https://github.com/QuatroDevOfficial/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module JwtDecode {
    interface JwtDecodeStatic {
        (token: string): any;
    }
}

declare module 'jwt-decode' {
    var jwtDecode: JwtDecode.JwtDecodeStatic;
    export = jwtDecode;
}
