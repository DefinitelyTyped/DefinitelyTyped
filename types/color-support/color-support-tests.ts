import colorSupport = require('color-support');

(() => {
  const result = colorSupport();
  if (!result) {
    console.log('color is not supported');
  } else if (result.has16m) {
    console.log('\x1b[38;2;102;194;255m16m colors\x1b[0m');
  } else if (result.has256) {
    console.log('\x1b[38;5;119m256 colors\x1b[0m');
  } else if (result.hasBasic) {
    console.log('\x1b[31mbasic colors\x1b[0m');
  } else {
    console.log('Level: ', result.level);
    console.log('this is impossible, but colors are not supported');
  }
})();

(() => {
  const result = colorSupport({
    alwaysReturn: false,
    env: process.env,
    ignoreCI: true,
    ignoreDumb: true,
    ignoreTTY: true,
    level: 2,
    stream: process.stdout,
    term: process.env.TERM,
  }, {
    has16m: false,
    has256: false,
    hasBasic: false,
    level: 0,
  });

  if (!result) {
    console.log('color is not supported');
  } else if (result.has16m) {
    console.log('\x1b[38;2;102;194;255m16m colors\x1b[0m');
  } else if (result.has256) {
    console.log('\x1b[38;5;119m256 colors\x1b[0m');
  } else if (result.hasBasic) {
    console.log('\x1b[31mbasic colors\x1b[0m');
  } else {
    console.log('Level: ', result.level);
    console.log('this is impossible, but colors are not supported');
  }
})();
