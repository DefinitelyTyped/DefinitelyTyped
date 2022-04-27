import chai = require('chai');
import chaiJWT = require('chai-jwt');
import { readFileSync } from 'fs';

chai.use(chaiJWT);
const expect = chai.expect;

const validJWT =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZSI6InVwZGF0ZTpzb21ldGhpbmciLCJleHAiOjE0NzA3NjE3ODEsImlhdCI6MTQ3MDc2MDc5M30.1b4RC22Kpx4X4GWXU-Wgsk4IbeRGVD7tNW-tM-LzkVE';

const otherJWT =
    // tslint:disable-next-line max-line-length
    'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.hZnl5amPk_I3tb4O-Otci_5XZdVWhPlFyVRvcqSwnDo_srcysDvhhKOD01DigPK1lJvTSTolyUgKGtpLqMfRDXQlekRsF4XhAjYZTmcynf-C-6wO5EI4wYewLNKFGGJzHAknMgotJFjDi_NCVSjHsW3a10nTao1lB82FRS305T226Q0VqNVJVWhE4G0JQvi2TssRtCxYTqzXVt22iDKkXeZJARZ1paXHGV5Kd1CljcZtkNZYIGcwnj65gvuCwohbkIxAnhZMJXCLaVvHqv9l-AAUV7esZvkQR1IpwBAiDQJh4qxPjFGylyXrHMqh5NlT_pWL2ZoULWTg_TJjMO9TuQ';

expect(validJWT).to.be.a.jwt;

expect(validJWT).to.be.a.jwt.and.equals({
    scope: 'update:something',
    exp: 1470761781,
    iat: 1470760793,
});

expect(validJWT).to.be.signedWith('1234');

expect(otherJWT).to.be.signedWith(readFileSync('public.pem'));

expect(validJWT).to.be.a.jwt.and.have.claim('scope').and.equals('update:something');
