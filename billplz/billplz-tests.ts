/// <reference path="billplz.d.ts" />

import * as Billplz from 'billplz';

const billplz = new Billplz({
  key: 'your-api-key',
  endpoint: 'http://localhost/',
  sandbox: true
});

// test create collection
billplz.create_collection({
  title: 'your-title'
});

// test create open collection
billplz.create_collectionOpen({
  title: 'your-title',
  description: 'your-description',
  amount: 100
});

// test create bill
billplz.create_bill({
  collection_id: 'your-collection-id',
  description: 'your-description',
  email: 'your-email',
  mobile: 12345,
  name: 'your-name',
  amount: 100,
  callback_url: 'https://example.com/webhook/',
  redirect_url: 'https://example.com/done',
  due_at: '0000-00-00'
});

// test get bill
billplz.get_bill('your-bill-id');

// test delete bill
billplz.delete_bill('your-bill-id');

// test change collection status
billplz.change_collection_status('your-collection-id', 'status-here');

// test registration check
billplz.registration_check('your-bank-account-number');
