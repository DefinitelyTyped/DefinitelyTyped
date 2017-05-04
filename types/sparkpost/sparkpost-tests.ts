import * as SparkPost from "sparkpost";

let key = "YOURAPIKEY";
let client = new SparkPost(key);

// Callback
client.get({
  uri: "metrics/domains"
}, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.body);
});

// Promise
client.get({
  uri: 'metrics/domains'
})
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Callback
client.inboundDomains.create({ domain: 'example1.com' }, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.inboundDomains.create({ domain: 'example1.com' })
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.inboundDomains.delete("example1.com", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.inboundDomains.delete('example1.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.inboundDomains.get("example1.com", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.inboundDomains.get('example1.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.inboundDomains.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.inboundDomains.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.messageEvents.search({}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.messageEvents.search({
  events: "click",
  campaign_ids: "monday_mailshot"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.messageEvents.search({
  from: "2016-01-01T00:00",
  to: "2016-01-02T23:59",
  page: 1,
  per_page: 5,
  events: ["bounce", "out_of_band"],
  bounce_classes: [10]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.messageEvents.search({
  events: 'click',
  campaign_ids: 'monday_mailshot'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Promise
client.messageEvents.search({})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Promise
client.messageEvents.search({
  from: '2016-01-01T00:00',
  to: '2016-01-02T23:59',
  page: 1,
  per_page: 5,
  events: ['bounce', 'out_of_band'],
  bounce_classes: [10]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.recipientLists.create({
  id: "UNIQUE_TEST_ID",
  name: "Test Recipient List",
  recipients: [
    {
      address: {
        email: "test1@test.com"
      }
    }, {
      address: {
        email: "test2@test.com"
      }
    }, {
      address: {
        email: "test3@test.com"
      }
    }
  ]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.recipientLists.create({
  id: "UNIQUE_TEST_ID",
  name: "Test Recipient List",
  recipients: [
    {
      address: {
        email: "test1@test.com"
      }
    }, {
      address: {
        email: "test2@test.com"
      }
    }, {
      address: {
        email: "test3@test.com"
      }
    }
  ]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.recipientLists.delete("UNIQUE_TEST_ID", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.recipientLists.delete('UNIQUE_TEST_ID')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.recipientLists.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.recipientLists.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.recipientLists.get('UNIQUE_TEST_ID', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.recipientLists.get('UNIQUE_TEST_ID', {
  show_recipients: true
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.recipientLists.get('UNIQUE_TEST_ID', {
  show_recipients: true
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Promise
client.recipientLists.get('UNIQUE_TEST_ID')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.recipientLists.update('EXISTING_TEST_ID', {
  name: "Test Recipient List",
  recipients: [
    {
      address: {
        email: "test1@test.com"
      }
    }, {
      address: {
        email: "test2@test.com"
      }
    }, {
      address: {
        email: "test3@test.com"
      }
    }
  ]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.recipientLists.update('EXISTING_TEST_ID', {
  name: "Test Recipient List",
  recipients: [
    {
      address: {
        email: "test1@test.com"
      }
    }, {
      address: {
        email: "test2@test.com"
      }
    }, {
      address: {
        email: "test3@test.com"
      }
    }
  ]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// Callback
client.relayWebhooks.create({
  name: "Test Relay Webhook",
  target: "http://client.test.com/test-webhook",
  match: {
    domain: "inbound.example.com"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.relayWebhooks.create({
  name: 'Test Relay Webhook',
  target: 'http://client.test.com/test-webhook',
  match: {
    domain: 'inbound.example.com'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.relayWebhooks.delete("123456789", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.relayWebhooks.delete('123456789')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.relayWebhooks.get('123456789', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.relayWebhooks.get('123456789')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

client.relayWebhooks.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.relayWebhooks.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.relayWebhooks.update('123456789', {
  target: "http://client.test.com/test-webhook"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.relayWebhooks.update('123456789', {
  target: 'http://client.test.com/test-webhook'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.create({
  domain: "example1.com",
  dkim: {
    private: "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/==",
    public: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==",
    selector: "brisbane",
    headers: "from:to:subject:date"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.sendingDomains.create({
  domain: 'example1.com',
  dkim: {
    private: 'MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/==',
    public: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==',
    selector: 'brisbane',
    headers: 'from:to:subject:date'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.delete("example1.com", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.sendingDomains.delete('example1.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.sendingDomains.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.get('example1.com', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.sendingDomains.get('example1.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.update('example1.com', {
  dkim: {
    private: "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/Y1g==",
    public: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==",
    selector: "hello_selector",
    headers: "from:to:subject:date"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.update('example1.com', {
  dkim: {
    private: 'MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/Y1g==',
    public: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==',
    selector: 'hello_selector',
    headers: 'from:to:subject:date'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.sendingDomains.verify('example1.com', {
  dkim_verify: true,
  spf_verify: true,
  abuse_at_verify: true,
  postmaster_at_verify: true
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.sendingDomains.verify('example1.com', {
  dkim_verify: false
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.sendingDomains.verify('example1.com', {
  dkim_verify: true,
  spf_verify: true,
  abuse_at_verify: true,
  postmaster_at_verify: true
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.subaccounts.create({
  name: "Test Subaccount",
  key_label: 'Test Subaccount key',
  key_grants: [
    "smtp/inject",
    "transmissions/modify"
  ]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.subaccounts.create({
  name: 'Test Subaccount',
  key_label: 'Test Subaccount key',
  key_grants: [
    'smtp/inject',
    'transmissions/modify'
  ]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.subaccounts.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.subaccounts.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.subaccounts.get(123, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.subaccounts.get('123')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.subaccounts.update('123', {
  name: "Test Subaccount",
  status: "suspended"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

// Promise
client.subaccounts.update('123', {
  name: 'Test Subaccount',
  status: 'suspended'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.suppressionList.delete('test@test.com', (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Promise
client.suppressionList.delete('test@test.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Promise
client.suppressionList.get('test@test.com')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.suppressionList.get('test@test.com', (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Promise
client.suppressionList.list({
  from: '2015-05-07T00:00:00+0000',
  to: '2015-05-07T23:59:59+0000',
  limit: 5
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.suppressionList.list({
  from: '2015-05-07T00:00:00+0000',
  to: '2015-05-07T23:59:59+0000',
  limit: 5
}, (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Callback
client.suppressionList.list((err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Promise
client.suppressionList.upsert({
  recipient: 'test1@test.com',
  transactional: false,
  non_transactional: true,
  description: 'Test description 1'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.suppressionList.upsert({
  recipient: 'test1@test.com',
  transactional: false,
  non_transactional: true,
  description: 'Test description 1'
}, (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Promise
client.suppressionList.upsert([
  {
    recipient: 'test1@test.com',
    transactional: false,
    non_transactional: true,
    description: 'Test description 1'
  },
  {
    recipient: 'test2@test.com',
    transactional: true,
    non_transactional: true,
    description: 'Test description 2'
  },
  {
    recipient: 'test3@test.com',
    transactional: true,
    non_transactional: false,
    description: 'Test description 3'
  }
])
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.suppressionList.upsert([
  {
    recipient: 'test1@test.com',
    transactional: false,
    non_transactional: true,
    description: 'Test description 1'
  },
  {
    recipient: 'test2@test.com',
    transactional: true,
    non_transactional: true,
    description: 'Test description 2'
  },
  {
    recipient: 'test3@test.com',
    transactional: true,
    non_transactional: false,
    description: 'Test description 3'
  }
], (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Callback
client.templates.create({
  id: "TEST_ID",
  name: "Test Template",
  content: {
    from: "test@test.com",
    subject: "Test email template!",
    html: "<b>This is a test email template!</b>"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.create({
  id: 'TEST_ID',
  name: 'Test Template',
  content: {
    from: 'test@test.com',
    subject: 'Test email template!',
    html: '<b>This is a test email template!</b>'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.templates.delete("TEST_ID", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.delete('TEST_ID')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.templates.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.templates.get('TEST_ID', {
  draft: true
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.templates.get('TEST_ID', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.get('TEST_ID')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.templates.preview('TEST_ID', {
  substitution_data: {}
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.preview('TEST_ID', {
  substitution_data: {
    name: 'Natalie',
    age: 35,
    member: true
  },
  draft: true
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.templates.update('TEST_ID', {
  content: {
    from: "test@test.com",
    subject: "Updated Published Test email template!",
    html: "<b>This is a published test email template! Updated!</b>"
  },
}, { update_published: true },
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.body);
      console.log("Congrats you can use our SDK!");
    }
  });

// Callback
client.templates.update('TEST_ID', {
  content: {
    from: "test@test.com",
    subject: "Updated Test email template!",
    html: "<b>This is a test email template! Updated!</b>"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.templates.update('TEST_ID', {
  content: {
    from: 'test@test.com',
    subject: 'Updated Test email template!',
    html: '<b>This is a test email template! Updated!</b>'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.transmissions.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.transmissions.list()
  .then(data => {
    console.log(data);
    console.log('Congrats you can use our client library!');
  })
  .catch(err => {
    console.log(err);
  });

client.transmissions.list({
  campaign_id: "my_campaign"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.list({
  template_id: "my_template"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.get("YOUR-TRANSMISSION-KEY", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.transmissions.get('YOUR-TRANSMISSION-KEY')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.transmissions.send({
  recipients: [{ address: { email: "john.doe@example.com" } }],
  content: {
    from: "From Envelope <from@example.com>",
    subject: "Example Email for MIME Parts",
    html: "<html><body><p>Hello World!</p></body></html>",
    text: "Hello World!"
  },
  options: {
    open_tracking: true,
    click_tracking: true
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.send({
  recipients: [{ address: { email: "john.doe@example.com" } }],
  content: {
    email_rfc822: "Content-Type: text/plain\nFrom: From Envelope <from@example.com>\nSubject: Example Email\n\nHello World"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.send({
  options: {
    open_tracking: true,
    click_tracking: true
  },
  campaign_id: "christmas_campaign",
  return_path: "bounces-christmas-campaign@flintstone.com",
  metadata: {
    user_type: "students"
  },
  substitution_data: {
    sender: "Big Store Team"
  },
  recipients: [
    {
      return_path: "123@bounces.flintstone.com",
      address: {
        email: "wilma@flintstone.com",
        name: "Wilma Flintstone"
      },
      tags: [
        "greeting",
        "prehistoric",
        "fred",
        "flintstone"
      ],
      metadata: {
        place: "Bedrock"
      },
      substitution_data: {
        customer_type: "Platinum"
      }
    }
  ],
  content: {
    from: {
      name: "Fred Flintstone",
      email: "fred@flintstone.com"
    },
    subject: "Big Christmas savings!",
    reply_to: "Christmas Sales <sales@flintstone.com>",
    headers: {
      "X-Customer-Campaign-ID": "christmas_campaign"
    },
    text: "Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n Hurry, this offer is only to {{customer_type}}\n {{sender}}",
    html: "<p>Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n</p>"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.send({
  recipients: [
    {
      address: {
        email: "original.recipient@example.com",
        name: "Original Recipient"
      },
      substitution_data: {
        recipient_type: "Original"
      }
    },
    {
      address: {
        email: "bcc.recipient@example.com",
        header_to: "\"Original Recipient\" <original.recipient@example.com>"
      },
      substitution_data: {
        recipient_type: "BCC"
      }
    }
  ],
  content: {
    from: {
      name: "Node BCC Test",
      email: "from@example.com"
    },
    subject: "Example email using bcc",
    text: "An example email using bcc with SparkPost to the {{recipient_type}} recipient.",
    html: "<p>An example email using bcc with SparkPost to the {{recipient_type}} recipient.</p>"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats! You sent an email with bcc using SparkPost!");
  }
});

// Callback
client.transmissions.send({
  recipients: [
    {
      address: {
        email: "original.recipient@example.com",
        name: "Original Recipient"
      },
      substitution_data: {
        recipient_type: "Original"
      }
    },
    {
      address: {
        email: "cc.recipient@example.com",
        name: "Carbon Copy Recipient",
        header_to: "\"Original Recipient\" <original.recipient@example.com>"
      },
      substitution_data: {
        recipient_type: "CC"
      }
    }
  ],
  content: {
    from: {
      name: "Node CC Test",
      email: "from@example.com"
    },
    headers: {
      CC: "\"Carbon Copy Recipient\" <cc.recipient@example.com>"
    },
    subject: "Example email using cc",
    text: "An example email using cc with SparkPost to the {{recipient_type}} recipient.",
    html: "<p>An example email using cc with SparkPost to the {{recipient_type}} recipient.</p>"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats! You sent an email with cc using SparkPost!");
  }
});

// Callback
client.transmissions.send({
  recipients: {
    list_id: "example-list"
  },
  content: {
    from: "From Envelope <from@example.com>",
    subject: "Example Email for Stored List and Inline Content",
    html: "<html><body><p>Hello World</p></body></html>",
    text: "Hello World!"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.send({
  recipients: {
    list_id: "example-list"
  },
  content: {
    from: "From Envelope <from@example.com>",
    subject: "Example Email for Stored List and Template",
    template_id: "my-template"
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Callback
client.transmissions.send({
  campaign_id: "ricks-campaign",
  content: {
    template_id: "ricks-template"
  },
  recipients: [{ address: { email: "rick.sanchez@rickandmorty100years.com", name: "Rick Sanchez" } }]
}, {
    num_rcpt_errors: 3
  }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res.body);
      console.log("What up my glib globs! SparkPost!");
    }
  });

// Promise
client.transmissions.send({
  options: {
    open_tracking: true,
    click_tracking: true
  },
  campaign_id: 'christmas_campaign',
  metadata: {
    user_type: 'students'
  },
  substitution_data: {
    sender: 'Big Store Team'
  },
  cc: [],
  bcc: [],
  recipients: [
    {
      address: {
        email: 'wilma@flintstone.com',
        name: 'Wilma Flintstone'
      },
      tags: [
        'greeting',
        'prehistoric',
        'fred',
        'flintstone'
      ],
      metadata: {
        place: 'Bedrock'
      },
      substitution_data: {
        customer_type: 'Platinum'
      }
    }
  ],
  content: {
    from: {
      name: 'Fred Flintstone',
      email: 'fred@flintstone.com'
    },
    subject: 'Big Christmas savings!',
    reply_to: 'Christmas Sales <sales@flintstone.com>',
    headers: {
      'X-Customer-Campaign-ID': 'christmas_campaign'
    },
    text: 'Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n Hurry, this offer is only to {{customer_type}}\n {{sender}}',
    html: '<p>Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n</p>'
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Promise
client.transmissions.send({
  recipients: [
    {
      address: {
        email: 'original.recipient@example.com',
        name: 'Original Recipient'
      },
      substitution_data: {
        recipient_type: 'Original'
      }
    },
    {
      address: {
        email: 'cc.recipient@example.com',
        name: 'Carbon Copy Recipient',
        header_to: '"Original Recipient" <original.recipient@example.com>'
      },
      substitution_data: {
        recipient_type: 'CC'
      }
    }
  ],
  content: {
    from: {
      name: 'Node CC Test',
      email: 'from@example.com'
    },
    headers: {
      CC: '"Carbon Copy Recipient" <cc.recipient@example.com>'
    },
    subject: 'Example email using cc',
    text: 'An example email using cc with SparkPost to the {{recipient_type}} recipient.',
    html: '<p>An example email using cc with SparkPost to the {{recipient_type}} recipient.</p>'
  }
})
  .then(data => {
    console.log('Congrats! You sent an email with cc using SparkPost!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.create({
  name: "Test webhook",
  target: "http://client.test.com/test-webhook",
  auth_token: "AUTH_TOKEN",
  events: [
    "delivery",
    "injection",
    "open",
    "click"
  ]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.create({
  name: 'Test Webhook',
  target: 'http://client.test.com/test-webhook',
  auth_token: 'AUTH_TOKEN',
  events: [
    'delivery',
    'injection',
    'open',
    'click'
  ]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.delete("TEST_WEBHOOK_UUID", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.delete('TEST_WEBHOOK_UUID')
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.get('TEST_WEBHOOK_UUID', {
  timezone: 'America/New_York'
}, (err, data) => {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

// Promise
client.webhooks.get('TEST_WEBHOOK_UUID', {
  timezone: 'America/New_York'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.getBatchStatus('TEST_WEBHOOK_UUID', {
  limit: 1000
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.getBatchStatus('TEST_WEBHOOK_UUID', {
  limit: 1000
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.getDocumentation((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.getDocumentation()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.getSamples({
  events: "bounce"
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.getSamples({
  events: 'bounce'
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.list((err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.list()
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.update('TEST_WEBHOOK_UUID', {
  name: "Renamed Test webhook",
  events: [
    "policy_rejection",
    "delay"
  ]
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.update('TEST_WEBHOOK_UUID', {
  name: 'Renamed Test Webhook',
  events: [
    'policy_rejection',
    'delay'
  ]
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });

// Callback
client.webhooks.validate('TEST_WEBHOOK_UUID', {
  message: {
    msys: {}
  }
}, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

// Promise
client.webhooks.validate('TEST_WEBHOOK_UUID', {
  message: {
    msys: {}
  }
})
  .then(data => {
    console.log('Congrats you can use our client library!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
