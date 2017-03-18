import * as SparkPost from "sparkpost";

let key = "YOURAPIKEY";
let client = new SparkPost(key);

client.get({
  uri: "metrics/domains"
}, function(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.body);
});

// Callback
client.inboundDomains.create({ domain: 'example1.com' }, function(err, res) {
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
client.inboundDomains.delete("example1.com", function(err, res) {
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
client.inboundDomains.get("example1.com", function(err, res) {
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
client.inboundDomains.list(function(err, res) {
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
client.messageEvents.search({}, function(err, res) {
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
}, function(err, res) {
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
}, function(err, res) {
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
}, function(err, res) {
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
client.recipientLists.delete("UNIQUE_TEST_ID", function(err, res) {
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
client.recipientLists.list(function(err, res) {
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
client.recipientLists.get('UNIQUE_TEST_ID', function(err, res) {
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
}, function(err, res) {
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
}, function(err, res) {
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
}, function(err, res) {
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
client.relayWebhooks.delete("123456789", function(err, res) {
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
client.relayWebhooks.get('123456789', function(err, res) {
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

client.relayWebhooks.list(function(err, res) {
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
}, function(err, res) {
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
    "private": "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQABAoGBAITb3BCRPBi5lGhHdn+1RgC7cjUQEbSb4eFHm+ULRwQ0UIPWHwiVWtptZ09usHq989fKp1g/PfcNzm8c78uTS6gCxfECweFCRK6EdO6cCCr1cfWvmBdSjzYhODUdQeyWZi2ozqd0FhGWoV4VHseh4iLj36DzleTLtOZj3FhAo1WJAkEA68T+KkGeDyWwvttYtuSiQCCTrXYAWTQnkIUxduCp7Ap6tVeIDn3TaXTj74UbEgaNgLhjG4bX//fdeDW6PaK9YwJBAM6xJmwHLPMgwNVjiz3u/6fhY3kaZTWcxtMkXCjh1QE82KzDwqyrCg7EFjTtFysSHCAZxXZMcivGl4TZLHnydJUCQQCx16+M+mAatuiCnvxlQUMuMiSTNK6Amzm45u9v53nlZeY3weYMYFdHdfe1pebMiwrT7MI9clKebz6svYJVmdtXAkApDAc8VuR3WB7TgdRKNWdyGJGfoD1PO1ZE4iinOcoKV+IT1UCY99Kkgg6C7j62n/8T5OpRBvd5eBPpHxP1F9BNAkEA5Nf2VO9lcTetksHdIeKK+F7sio6UZn0Rv7iUo3ALrN1D1cGfWIh2dj3ko1iSreyNVSwGW0ePP27qDmU+u6/Y1g==",
    "public": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQAB",
    selector: "brisbane",
    headers: "from:to:subject:date"
  }
}, function(err, res) {
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
      'private': 'MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQABAoGBAITb3BCRPBi5lGhHdn+1RgC7cjUQEbSb4eFHm+ULRwQ0UIPWHwiVWtptZ09usHq989fKp1g/PfcNzm8c78uTS6gCxfECweFCRK6EdO6cCCr1cfWvmBdSjzYhODUdQeyWZi2ozqd0FhGWoV4VHseh4iLj36DzleTLtOZj3FhAo1WJAkEA68T+KkGeDyWwvttYtuSiQCCTrXYAWTQnkIUxduCp7Ap6tVeIDn3TaXTj74UbEgaNgLhjG4bX//fdeDW6PaK9YwJBAM6xJmwHLPMgwNVjiz3u/6fhY3kaZTWcxtMkXCjh1QE82KzDwqyrCg7EFjTtFysSHCAZxXZMcivGl4TZLHnydJUCQQCx16+M+mAatuiCnvxlQUMuMiSTNK6Amzm45u9v53nlZeY3weYMYFdHdfe1pebMiwrT7MI9clKebz6svYJVmdtXAkApDAc8VuR3WB7TgdRKNWdyGJGfoD1PO1ZE4iinOcoKV+IT1UCY99Kkgg6C7j62n/8T5OpRBvd5eBPpHxP1F9BNAkEA5Nf2VO9lcTetksHdIeKK+F7sio6UZn0Rv7iUo3ALrN1D1cGfWIh2dj3ko1iSreyNVSwGW0ePP27qDmU+u6/Y1g==',
      'public': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQAB',
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
client.sendingDomains.delete("example1.com", function(err, data) {
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
client.sendingDomains.list(function(err, res) {
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
client.sendingDomains.get('example1.com', function(err, res) {
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
    "private": "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQABAoGBAITb3BCRPBi5lGhHdn+1RgC7cjUQEbSb4eFHm+ULRwQ0UIPWHwiVWtptZ09usHq989fKp1g/PfcNzm8c78uTS6gCxfECweFCRK6EdO6cCCr1cfWvmBdSjzYhODUdQeyWZi2ozqd0FhGWoV4VHseh4iLj36DzleTLtOZj3FhAo1WJAkEA68T+KkGeDyWwvttYtuSiQCCTrXYAWTQnkIUxduCp7Ap6tVeIDn3TaXTj74UbEgaNgLhjG4bX//fdeDW6PaK9YwJBAM6xJmwHLPMgwNVjiz3u/6fhY3kaZTWcxtMkXCjh1QE82KzDwqyrCg7EFjTtFysSHCAZxXZMcivGl4TZLHnydJUCQQCx16+M+mAatuiCnvxlQUMuMiSTNK6Amzm45u9v53nlZeY3weYMYFdHdfe1pebMiwrT7MI9clKebz6svYJVmdtXAkApDAc8VuR3WB7TgdRKNWdyGJGfoD1PO1ZE4iinOcoKV+IT1UCY99Kkgg6C7j62n/8T5OpRBvd5eBPpHxP1F9BNAkEA5Nf2VO9lcTetksHdIeKK+F7sio6UZn0Rv7iUo3ALrN1D1cGfWIh2dj3ko1iSreyNVSwGW0ePP27qDmU+u6/Y1g==",
    "public": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQAB",
    selector: "hello_selector",
    headers: "from:to:subject:date"
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.update('example1.com', {
	dkim: {
      'private': 'MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQABAoGBAITb3BCRPBi5lGhHdn+1RgC7cjUQEbSb4eFHm+ULRwQ0UIPWHwiVWtptZ09usHq989fKp1g/PfcNzm8c78uTS6gCxfECweFCRK6EdO6cCCr1cfWvmBdSjzYhODUdQeyWZi2ozqd0FhGWoV4VHseh4iLj36DzleTLtOZj3FhAo1WJAkEA68T+KkGeDyWwvttYtuSiQCCTrXYAWTQnkIUxduCp7Ap6tVeIDn3TaXTj74UbEgaNgLhjG4bX//fdeDW6PaK9YwJBAM6xJmwHLPMgwNVjiz3u/6fhY3kaZTWcxtMkXCjh1QE82KzDwqyrCg7EFjTtFysSHCAZxXZMcivGl4TZLHnydJUCQQCx16+M+mAatuiCnvxlQUMuMiSTNK6Amzm45u9v53nlZeY3weYMYFdHdfe1pebMiwrT7MI9clKebz6svYJVmdtXAkApDAc8VuR3WB7TgdRKNWdyGJGfoD1PO1ZE4iinOcoKV+IT1UCY99Kkgg6C7j62n/8T5OpRBvd5eBPpHxP1F9BNAkEA5Nf2VO9lcTetksHdIeKK+F7sio6UZn0Rv7iUo3ALrN1D1cGfWIh2dj3ko1iSreyNVSwGW0ePP27qDmU+u6/Y1g==',
      'public': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx/xFar2wjmzxp2+SnJ5pspaF77VZveN3P/HVmXZVghr3asoV9WBx/uW1nDIUxU35L4juXiTwsMAbgMyh3NqIKTNKyMDy4P8vpEhtH1iv/BrwMdBjHDVCycB8WnwIDAQAB',
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
}, function(err, res) {
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
}, function(err, res) {
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
}, function(err, res) {
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
client.subaccounts.list(function(err, res) {
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
client.subaccounts.get(123, function(err, res) {
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
}, function(err, res) {
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
client.suppressionList.delete('test@test.com', function(err, data) {
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
client.suppressionList.get('test@test.com', function(err, data) {
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
}, function(err, data) {
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
}, function(err, data) {
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
], function(err, data) {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Congrats you can use our client library!');
    console.log(data);
  }
});

client.templates.create({
  template: {
    id: "TEST_ID",
    name: "Test Template",
    content: {
      from: "test@test.com",
      subject: "Test email template!",
      html: "<b>This is a test email template!</b>"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.delete("TEST_ID", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});


client.templates.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.find({
  id: "TEST_ID",
  draft: true
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.find({
  id: "TEST_ID"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.preview({
  id: "TEST_ID",
  data: {}
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.update({
  id: "TEST_ID",
  template: {
    content: {
      from: "test@test.com",
      subject: "Updated Published Test email template!",
      html: "<b>This is a published test email template! Updated!</b>"
    }
  },
  update_published: true
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.templates.update({
  id: "TEST_ID",
  template: {
    content: {
      from: "test@test.com",
      subject: "Updated Test email template!",
      html: "<b>This is a test email template! Updated!</b>"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.find("YOUR-TRANSMISSION-KEY", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.all({
  campaign_id: "my_campaign"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.all({
  template_id: "my_template"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  transmissionBody: {
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
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  transmissionBody: {
    recipients: [{address: {email: "john.doe@example.com"}}],
    content: {
      email_rfc822: "Content-Type: text/plain\nFrom: From Envelope <from@example.com>\nSubject: Example Email\n\nHello World"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  transmissionBody: {
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
      html: "<p>Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n</p><p>Hurry, this offer is only to {{customer_type}}\n</p><p>{{sender}}</p>"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  transmissionBody: {
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
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats! You sent an email with bcc using SparkPost!");
  }
});

client.transmissions.send({
  transmissionBody: {
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
        "CC": "\"Carbon Copy Recipient\" <cc.recipient@example.com>"
      },
      subject: "Example email using cc",
      text: "An example email using cc with SparkPost to the {{recipient_type}} recipient.",
      html: "<p>An example email using cc with SparkPost to the {{recipient_type}} recipient.</p>"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats! You sent an email with cc using SparkPost!");
  }
});

client.transmissions.send({
  transmissionBody: {
    recipients: {
      list_id: "example-list"
    },
    content: {
      from: "From Envelope <from@example.com>",
      subject: "Example Email for Stored List and Inline Content",
      html: "<html><body><p>Hello World</p></body></html>",
      text: "Hello World!"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  transmissionBody: {
    recipients: {
      list_id: "example-list"
    },
    content: {
      from: "From Envelope <from@example.com>",
      subject: "Example Email for Stored List and Template",
      template_id: "my-template"
    }
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.transmissions.send({
  num_rcpt_errors: 3,
  transmissionBody: {
    campaign_id: "ricks-campaign",
    content: {
      template_id: "ricks-template"
    },
    recipients: [{ address: { email: "rick.sanchez@rickandmorty100years.com", name: "Rick Sanchez" } }]
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("What up my glib globs! SparkPost!");
  }
});

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
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.delete("TEST_WEBHOOK_UUID", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.describe({
  id: "TEST_WEBHOOK_UUID",
  timezone: "America/New_York"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.getBatchStatus({
  id: "TEST_WEBHOOK_UUID",
  limit: 1000
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});


client.webhooks.getDocumentation(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.getSamples({
  events: "bounce"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.update({
  id: "TEST_WEBHOOK_UUID",
  name: "Renamed Test webhook",
  events: [
    "policy_rejection",
    "delay"
  ]
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.webhooks.validate({
  id: "TEST_WEBHOOK_UUID",
  message: {
    msys: {}
  }
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});
