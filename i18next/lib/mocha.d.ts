// BDD
declare function describe(cb: () => void);
declare function describe(cb: (done:() => void) => void);
declare function describe(title: string, cb: () => void);
declare function describe(title: string, cb: (done:() => void) => void);

declare function it(cb: () => void);
declare function it(cb: (done:() => void) => void);
declare function it(title: string, cb: () => void);
declare function it(title: string, cb: (done:() => void) => void);

declare function before(cb: () => void);
declare function before(cb: (done:() => void) => void);
declare function before(title: string, cb: () => void);
declare function before(title: string, cb: (done:() => void) => void);

declare function after(cb: () => void);
declare function after(cb: (done:() => void) => void);
declare function after(title: string, cb: () => void);
declare function after(title: string, cb: (done:() => void) => void);

declare function beforeEach(cb: () => void);
declare function beforeEach(cb: (done:() => void) => void);
declare function beforeEach(title: string, cb: () => void);
declare function beforeEach(title: string, cb: (done:() => void) => void);

declare function afterEach(cb: () => void);
declare function afterEach(cb: (done:() => void) => void);
declare function afterEach(title: string, cb: () => void);
declare function afterEach(title: string, cb: (done:() => void) => void);


// TDD
declare function suite(title: string, cb: () => void);
declare function test(title: string, cb: () => void);
declare function test(title: string, cb: (done:() => void) => void);
declare function setup(title: string, cb: () => void);
declare function teardown(title: string, cb: () => void);

declare function suite(cb: () => void);
declare function test(cb: () => void);
declare function test(cb: (done:() => void) => void);
declare function setup(cb: () => void);
declare function teardown(cb: () => void);
