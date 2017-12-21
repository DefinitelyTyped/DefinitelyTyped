// Type definitions for jwt-decode 1.4
// Project: https://github.com/auth0/jwt-decode
// Definitions by: Giedrius Grabauskas <https://github.com/QuatroDevOfficial>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JwtDecode { }

declare function JwtDecode<TTokenDto>(token: string): TTokenDto;

export = JwtDecode;
export as namespace jwt_decode;
