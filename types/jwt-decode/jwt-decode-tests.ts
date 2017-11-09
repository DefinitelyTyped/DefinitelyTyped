import * as jwtDecode from "jwt-decode";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo";

interface TokenDto {
  foo: string;
  exp: number;
  iat: number;
}

interface TokenHeaderDto {
  typ: string;
  alg: string;
}

const decodedTokenPayloadOld = jwtDecode(token);
const decodedTokenPayload = jwtDecode<TokenDto>(token);
const decodedTokenHeaderOld = jwtDecode(token, { header: true });
const decodedTokenHeader = jwtDecode<TokenHeaderDto>(token, { header: true });
