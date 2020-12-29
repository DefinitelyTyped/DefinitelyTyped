import icongen = require('icon-gen');

icongen('./sample.svg', './icons', { report: true })
  .then(results => {
    results[0];
  })
  .catch(err => {
    throw err;
  });

icongen('./sample.svg', './icons')
  .then(results => {
    results[0];
  })
  .catch(err => {
    throw err;
  });

icongen('./sample.svg', './icons', {
  favicon: {
    ico: [16, 24, 32, 48, 64],
    name: 'favicon-',
    sizes: [32, 57, 72, 96, 120, 128, 144, 152, 195, 228],
  },
  report: false,
})
  .then(results => {
    results[0];
  })
  .catch(err => {
    throw err;
  });

icongen('./sample.svg', './icons', {
  favicon: {},
  report: false,
})
  .then(results => {
    results[0];
  })
  .catch(err => {
    throw err;
  });
