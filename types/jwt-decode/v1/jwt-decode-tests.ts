import jwtDecode = require('jwt-decode');

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIiLCJleHAiOjEzOTMyODY4OTMsImlhdCI6MTM5MzI2ODg5M30.4-iaDojEVl0pJQMjrbM1EzUIfAZgsbK_kgnVyVxFSVo";

interface TokenDto {
  foo: string;
  exp: number;
  iat: number;
}

const decodedTokenOld = jwtDecode(token) as TokenDto;
const decodedToken = jwtDecode<TokenDto>(token);
