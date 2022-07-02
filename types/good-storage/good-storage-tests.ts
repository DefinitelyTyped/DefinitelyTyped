import storage = require('good-storage');

// localStorage
storage.set('name', 'value');
storage.get('name', 'defaultValue');
storage.has('name');
storage.remove('name');
storage.clear();
storage.getAll();
storage.forEach(() => {});

// sessionStorage
storage.session.set('name', 'value');
storage.session.get('name', 'defaultValue');
storage.session.has('name');
storage.session.remove('name');
storage.session.clear();
storage.session.getAll();
storage.session.forEach(() => {});
