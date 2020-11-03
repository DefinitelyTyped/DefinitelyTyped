

import LargeLocalStorage = require('lls');

var storage = new LargeLocalStorage({size: 75*1024*1024});
storage.initialized.then(function(grantedCapacity) {
    // storage ready to be used.
});
 
var desiredCapacity = 50 * 1024 * 1024; // 50MB
var storage = new LargeLocalStorage({
    // desired capacity, in bytes.
    size: desiredCapacity,

     // optional name for your LLS database. Defaults to lls.
    // This is the name given to the underlying
    // IndexedDB or WebSQL DB or FSAPI Folder.
    // LLS's with different names are independent.
    name: 'myStorage'

    // the following is an optional param 
    // that is useful for debugging.
    // force LLS to use a specific storage implementation
    // forceProvider: 'IndexedDB' or 'WebSQL' or 'FilesystemAPI'
});
storage.initialized.then(function(capacity) {
    if (capacity != -1 && capacity != desiredCapacity) {
        // the user didn't authorize your storage request
        // so instead you have some limitation on your storage
    }
});

storage.getAllAttachments('exampleDoc').then(function(attachEntries) {
    attachEntries.map(function(entry) {
        var a = entry.data;
        // do something with it...
        if (a.type.indexOf('image') == 0) {
            // show image...
        } else if (a.type.indexOf('audio') == 0) {
            // play audio...
        } else {
            
        }
    })
});

storage.getAllAttachmentURLs('exampleDoc').then(function(urlEntries) {
    urlEntries.map(function(entry) {
        var url = entry.url;
    })
});

storage.getAttachment('exampleDoc', 'examplePic').then(function(attachment) {
   var url = URL.createObjectURL(attachment);
});

storage.getAttachmentURL('myDoc', 'myPic').then(function(url) {
  var image = new Image();
  image.src = url;
  document.body.appendChild(image);
  storage.revokeAttachmentURL(url);
});

// the initialized property will call you back with the capacity
storage.initialized.then(function(capacity) {
    console.log('Authorized to store: ' + capacity + ' bytes');
});
// or if you know your storage is already available
// you can call getCapacity directly
storage.getCapacity();

storage.getContents('exampleDoc').then(function(contents) {
    alert(contents);
});

storage.ls().then(function(docKeys) {
    console.log(docKeys);
});

// may or may not be true
storage.ready();

storage.initialized.then(function() {
    // always true
    storage.ready();
});

storage.getAttachmentURL('doc', 'attach').then(function(url) {
    // do something with the URL
    storage.revokeAttachmentURL(url);
});

storage.rm('exampleDoc').then(function() {
    alert('doc and all attachments were removed');
});

storage.rmAttachment('exampleDoc', 'someAttachment').then(function() {
    alert('exampleDoc/someAttachment removed');
}).catch(function(e) {
    alert('Attachment removal failed: ' + e);
});

storage.setAttachment('myDoc', 'myPic', [1, 2, 3]).then(function() {
   alert('Attachment written');
});

storage.setContents('exampleDoc', 'some data...').then(function() {
    alert('doc written');
});
