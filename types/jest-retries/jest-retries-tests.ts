import retries from "jest-retries";

retries('some flaky test', 5, () => {
  if (Math.random() > 0.2) {
    throw Error('failed');
  }
});

retries('some flaky test with timeout', 5, () => {
  if (Math.random() > 0.2) {
    throw Error('failed');
  }
}, 10000);
