import SparkPost = require("sparkpost");

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

client.inboundDomains.create("example1.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.inboundDomains.delete("example1.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.inboundDomains.find("example1.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.inboundDomains.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.messageEvents.search({}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

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

client.recipientLists.delete("UNIQUE_TEST_ID", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.recipientLists.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.recipientLists.find({
  id: "UNIQUE_TEST_ID"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.recipientLists.find({
  id: "UNIQUE_TEST_ID",
  show_recipients: true
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.recipientLists.update({
  id: "EXISTING_TEST_ID",
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

client.relayWebhooks.delete("123456789", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.relayWebhooks.find("123456789", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.relayWebhooks.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.relayWebhooks.update({
  relayWebhookId: "123456789",
  target: "http://client.test.com/test-webhook"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.sendingDomains.create({
  domain: "example1.com",
  dkim: {
    "private": "MIICXgIBAAKBgQC+W6scd3XWwvC//Y1g==",
    "public": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==",
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


client.sendingDomains.delete("example1.com", function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Congrats you can use our client library!");
  }
});

client.sendingDomains.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.find("example1.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.update({
  domain: "example1.com",
  dkim: {
    "private": "MIICXgIBAAKBgQC+W6scd3XWwvC/hPRksfDYFi3ztgyS9OSqnnjtNQeDdTSD1DRx//Y1g==",
    "public": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+W6scd3XWwvC/==",
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

client.sendingDomains.verify({
  domain: "example1.com"
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.verify({
  domain: "example1.com",
  verifySPF: false
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.sendingDomains.verify({
  domain: "example1.com",
  verifyDKIM: false
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our SDK!");
  }
});

client.subaccounts.create({
  name: "Test Subaccount",
  keyLabel: "Test Subaccount key",
  keyGrants: [
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

client.subaccounts.all(function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.subaccounts.find(123, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.subaccounts.update({
  subaccountId: 123,
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

client.suppressionList.checkStatus("test@test.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.suppressionList.removeStatus("test@test.com", function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.suppressionList.search({
  from: "2015-05-07T00:00:00+0000",
  to: "2015-05-07T23:59:59+0000",
  limit: 5
}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
  }
});

client.suppressionList.upsert([
  {
    recipient: "test1@test.com",
    transactional: false,
    non_transactional: true,
    description: "Test description 1"
  },
  {
    recipient: "test2@test.com",
    transactional: true,
    non_transactional: true,
    description: "Test description 2"
  },
  {
    recipient: "test3@test.com",
    transactional: true,
    non_transactional: false,
    description: "Test description 3"
  }
], function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log("Congrats you can use our client library!");
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
      html: "<p>Hi {{address.name}} \nSave big this Christmas in your area {{place}}! \nClick http://www.mysite.com and get huge discount\n</p>"
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
