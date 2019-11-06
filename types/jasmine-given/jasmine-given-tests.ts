Given(() => { });

When(() => { });

Then(() => { });

Then('expected condition 1', () => { });

And(() => { });

Invariant(() => { });

Given((done) => {
  done();
});

When((done) => {
  done();
});

Then('expected condition 2', (done) => {
  done();
});

And((done) => {
  done();
});

Invariant((done) => {
  done();
});

Given((done) => {
  done.fail();
});

When((done) => {
  done.fail();
});

Then('expected condition 2', (done) => {
  done.fail();
});

And((done) => {
  done.fail();
});

Invariant((done) => {
  done.fail();
});
