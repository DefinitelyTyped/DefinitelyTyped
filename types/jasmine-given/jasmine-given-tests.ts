Given(() => { });

When(() => { });

Then(() => { });

Then('expected condition 1', () => { });

And(() => { });

Invariant(() => { });

Given((done) => {
  if (done) {
    done();
  }
});

When((done) => {
  if (done) {
    done();
  }
});

Then('expected condition 2', (done) => {
  if (done) {
    done();
  }
});

And((done) => {
  if (done) {
    done();
  }
});

Invariant((done) => {
  if (done) {
    done();
  }
});

Given((done) => {
  if (done) {
    done.fail();
  }
});

When((done) => {
  if (done) {
    done.fail();
  }
});

Then('expected condition 2', (done) => {
  if (done) {
    done.fail();
  }
});

And((done) => {
  if (done) {
    done.fail();
  }
});

Invariant((done) => {
  if (done) {
    done.fail();
  }
});
