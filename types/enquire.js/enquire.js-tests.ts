import enquire = require('enquire.js');

enquire
    .register('(min-width: 300px) and (max-width: 600px)', {
      deferSetup: true,
      match: () => {},
      unmatch: () => {},
      setup: () => {},
      destroy: () => {}
    })
    .register('(min-width: 300px) and (max-width: 600px)', {});

enquire.register('(min-width: 300px) and (max-width: 600px)', [{}, {}], true);

enquire.register('(min-width: 300px) and (max-width: 600px)', () => {}, true);

enquire.unregister('(min-width: 300px) and (max-width: 600px)');
