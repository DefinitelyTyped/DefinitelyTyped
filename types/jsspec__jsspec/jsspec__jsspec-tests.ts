describe('something', () => {});
describe('something', {}, () => {});
describe('something', { timeout: 1, random: false }, () => {});

context('something', () => {});
context('something', {}, () => {});
context('something', { timeout: 1, random: false }, () => {});

sharedContext('something', () => {});
sharedContext('something', {}, () => {});
sharedContext('something', { timeout: 1, random: false }, () => {});

sharedExamples('something', () => {});
sharedExamples('something', {}, () => {});
sharedExamples('something', { timeout: 1, random: false }, () => {});

xdescribe('something', () => {});
xdescribe('something', () => {});
xdescribe('something', {}, () => {});
xdescribe('something', { timeout: 1, random: false }, () => {});

xcontext('something', () => {});
xcontext('something', () => {});
xcontext('something', {}, () => {});
xcontext('something', { timeout: 1, random: false }, () => {});

context('inner', () => {
    set('thing', 1);
    set('thing', () => 4);

    subject('thing', 1);
    subject('thing', () => 4);
    subject(1);
    subject(() => 4);

    it('example', () => {});
    it('example', async () => {});
    it('example', {}, () => {});
    it('example', { timeout: 1 }, () => {});

    xit('example', () => {});
    xit('example', async () => {});
    xit('example', {}, () => {});
    xit('example', { timeout: 1 }, () => {});

    pend('example', () => {});
    pend('example', async () => {});
    pend('example', {}, () => {});
    pend('example', { timeout: 1 }, () => {});

    sharedContext('first', () => {});
    sharedContext('first', (arg1: any) => arg1);
    sharedContext('first', {}, () => {});
    sharedContext('first', {}, (arg1: any) => arg1);
    sharedContext('first', { timeout: 1, random: true }, () => {});

    sharedExamples('first', () => {});
    sharedExamples('first', (arg1: any) => arg1);
    sharedExamples('first', {}, () => {});
    sharedExamples('first', {}, (arg1: any) => arg1);
    sharedExamples('first', { timeout: 1, random: true }, () => {});

    includeContext('first');
    includeContext('first', 1, () => {});

    itBehavesLike('first');
    itBehavesLike('first', 1, () => {});

    afterEach(() => {});
    afterEach('named', () => {});
    afterEach('named', {}, () => {});
    afterEach('named', { timeout: 1 }, () => {});
    afterEach('named', { timeout: 1 }, async () => {});

    beforeEach(() => {});
    beforeEach('named', () => {});
    beforeEach('named', {}, () => {});
    beforeEach('named', { timeout: 1 }, () => {});
    beforeEach('named', { timeout: 1 }, async () => {});

    after(() => {});
    after('named', () => {});
    after('named', {}, () => {});
    after('named', { timeout: 1 }, () => {});
    after('named', { timeout: 1 }, async () => {});

    before(() => {});
    before('named', () => {});
    before('named', {}, () => {});
    before('named', { timeout: 1 }, () => {});
    before('named', { timeout: 1 }, async () => {});
});
