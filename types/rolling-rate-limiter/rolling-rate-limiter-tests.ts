import * as RateLimiter from 'rolling-rate-limiter';

/*
  Setup:
*/

const limiter = RateLimiter({
  // in miliseconds
  interval: 1000,
  maxInInterval: 10,
  // optional: the minimum time (in miliseconds) between any two actions
  minDifference: 100
});

/*
  Action:
*/

function attemptAction(userId: string) {
  // Argument should be a unique identifier for a user if one exists.
  // If none is provided, the limiter will not differentiate between users.
  const timeLeft = limiter(userId);

  if (timeLeft > 0) {
    // limit was exceeded, action should not be allowed
    // timeLeft is the number of ms until the next action will be allowed
    // note that this can be treated as a boolean, since 0 is falsy
  } else {
    // limit was not exceeded, action should be allowed
  }
}

/*
  Note that the in-memory version can also operate asynchronously.
  The syntax is identical to the redis implementation below.
*/
