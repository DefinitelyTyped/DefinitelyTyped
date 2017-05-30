import * as chai from 'chai';
import * as immutable from "immutable";
import * as chaiImmutable from 'chai-immutable';

function test() {
    chai.use(chaiImmutable);
    chai.expect(immutable.List.of(1, 2, 3)).to.have.size(3);
}
