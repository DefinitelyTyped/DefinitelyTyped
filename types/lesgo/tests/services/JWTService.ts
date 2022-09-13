import JWTService from 'lesgo/services/JWTService';

// $ExpectType JWTService<{ bar: any; foo: any; }>
const jwtService = new JWTService('mytoken', {
    secret: 'shhhhh',
    iss: {
        validate: true,
        data: ['urn:issuer'],
    },
    customClaims: {
        validate: true,
        data: ['foo', 'bar'],
    },
});

jwtService.validate(); // $ExpectType JWTService<{ bar: any; foo: any; }>

jwtService.jwt();
