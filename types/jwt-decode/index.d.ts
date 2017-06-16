// Type definitions for jwt-decode v2.2.0
// Project: https://github.com/auth0/jwt-decode
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>, Mads Madsen <https://github.com/madsmadsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace JwtDecode {
    interface JwtDecodeStatic {
        (token: string, options?: { header: boolean }): any;
    }
}

declare var jwtDecode: JwtDecode.JwtDecodeStatic;
export = jwtDecode;
export as namespace jwt_decode;
