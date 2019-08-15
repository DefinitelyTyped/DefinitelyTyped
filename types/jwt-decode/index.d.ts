// Type definitions for jwt-decode 2.2
// Project: https://github.com/auth0/jwt-decode
// Definitions by: Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>, Mads Madsen <https://github.com/madsmadsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JwtDecode {
    interface Options {
        header: boolean;
    }
}

declare function JwtDecode<TTokenDto>(token: string, options?: JwtDecode.Options): TTokenDto;

export = JwtDecode;
export as namespace jwt_decode;
