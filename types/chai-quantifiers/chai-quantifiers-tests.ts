import chai = require("chai");
import chaiQuantifiers = require("chai-quantifiers");

chai.use(chaiQuantifiers);

const { expect } = chai;

const assertion = expect([0, 1, 2, 3]);

assertion.to.containAll((item: unknown) => !!item);
assertion.to.containAll((item: number) => item < 4);
assertion.to.containAll<number>(item => item < 4);

assertion.to.containOne((item: unknown) => !!item);
assertion.to.containOne((item: number) => item < 4);
assertion.to.containOne<number>(item => item < 4);

assertion.to.containExactlyOne((item: unknown) => !!item);
assertion.to.containExactlyOne((item: number) => item < 4);
assertion.to.containExactlyOne<number>(item => item < 4);
