 
import jwtDecode = require('jwt-decode');
 
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo";

interface TokenDto {
  foo: string;
  exp: number;
  iat: number;
}

interface TokenHeaderDto {
  typ: string;
  alg: string;
}

let decodedTokenPayload = jwtDecode(token) as TokenDto;
let decodedTokenHeader = jwtDecode(token, { header: true }) as TokenHeaderDto;