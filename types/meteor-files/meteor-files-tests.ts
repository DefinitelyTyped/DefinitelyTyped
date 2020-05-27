// Below code copied from examples in documentation at https://github.com/VeliovGroup/Meteor-Files/blob/master/docs/toc.md

import { FilesCollection } from "meteor/ostrio:files";

interface MetaTest {
  downloads: number;
  owner: string;
}

const Images = new FilesCollection<MetaTest>({
  storagePath: 'assets/app/uploads/Images',
  downloadRoute: '/files/images',
  collectionName: 'Images',
  permissions: 0o755,
  allowClientCode: false,
  cacheControl: 'public, max-age=31536000',
  // Read more about cacheControl: https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers
  onbeforeunloadMessage() {
    return 'Upload is still in progress! Upload will be aborted if you leave this page!';
  },
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    // Note: You should never trust to extension and mime-type here
    // as this data comes from client and can be easily substitute
    // to check file's "magic-numbers" use `mmmagic` or `file-type` package
    // real extension and mime-type can be checked on client (untrusted side)
    // and on server at `onAfterUpload` hook (trusted side)
    if (file.size <= 10485760 && /png|jpe?g/i.test(file.ext)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  },
  downloadCallback(this, fileObj) {
    if (this.params.query.download === 'true') {
      // Increment downloads counter
      Images.update(fileObj._id, {$inc: {'meta.downloads': 1}});
    }
    // Must return true to continue download
    return true;
  },
  protected(this, fileObj) {
    // Check if current user is owner of the file
    return fileObj.meta?.owner === this.userId;
  },
  onBeforeRemove(cursor) {
    const records = cursor.fetch();

    if (records && records.length) {
      if (this.userId) {
        const user = this.user();
        // Assuming user.profile.docs is array
        // with file's records _id(s)

        for (let i = 0, len = records.length; i < len; i++) {
          const file = records[i];
          if (!~user.profile.docs.indexOf(file._id)) {
            // Return false if at least one document
            // is not owned by current user
            return false;
          }
        }
      }
    }

    return true;
  }
});

Images.write(new Buffer('abc'), {
  fileName: 'sample.png',
  fileId: 'abc123myId',
  type: 'image/png'
}, (writeError, fileRef) => {
  if (writeError) {
    throw writeError;
  } else {
    console.log(fileRef.name, 'is successfully saved to FS. _id:', fileRef._id);
  }
});

Images.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
  fileName: 'logo.png',
  fileId: 'abc123myId',
  meta: {
    downloads: 1,
    owner: 'abc'
  }
});

Images.addFile('/var/www/files/sample.png', {
  fileName: 'sample.png',
  type: 'image/png',
  fileId: 'abc123AwesomeId',
  meta: {
    downloads: 1,
    owner: 'abc'
  }
});

// Usage:
// Set cursor:
const file = Images.findOne({_id: 'Rfy2HLutYK4XWkwhm'});
// Generate downloadable link:
file.link();
// Get cursor's data as plain Object:
file.get();
file.get('_id'); // <-- returns sub-property value, if exists
// Get cursor's data as reactive Object
file.with();
// Get cursor as array:
file.fetch();
// Remove record from collection and file from FS
file.remove((error) => {
  if (error) {
    console.error('File wasn\'t removed', error);
  }
});

// Remove record from collection:
Images.collection.remove({_id: 'Rfy2HLutYK4XWkwhm'});

// Usage:
// Set cursor:
const filesCursor = Images.find();

// Get Mongo cursor:
Meteor.publish('images', () => {
  Images.find().cursor;
});

// Get cursor's data:
filesCursor.fetch();
// Get cursor's data (alternative):
filesCursor.get();

// Remove all cursor's records and associated files:
filesCursor.remove((error) => {
  if (error) {
    console.error('File(s) is not removed!', error);
  }
});

// Each:
filesCursor.each((file) => {
  // Only available in .each():
  file.link();
  file.remove();
  file.with(); // <-- Reactive object
});

// As dataURI
Images.insert({
  file: 'data:image/png,base64str…',
  isBase64: true, // <— Mandatory
  fileName: 'pic.png' // <— Mandatory
});

// As base64:
Images.insert({
  file: 'image/png,base64str…',
  isBase64: true, // <— Mandatory
  fileName: 'pic.png' // <— Mandatory
});

// As plain base64:
Images.insert({
  file: 'base64str…',
  isBase64: true, // <— Mandatory
  fileName: 'pic.png', // <— Mandatory
  type: 'image/png' // <— Mandatory
});

// Usage:
// Drop collection's data and remove all associated files from FS
Images.remove({});
// Remove particular file
Images.remove({_id: 'Rfy2HLutYK4XWkwhm'});
// Equals to above
Images.findOne({_id: 'Rfy2HLutYK4XWkwhm'}).remove();

// Direct Collection usage
// Remove record(s) ONLY from collection
Images.collection.remove({});

// Using callback
Images.remove({_id: 'Rfy2HLutYK4XWkwhm'}, (error) => {
  if (error) {
    console.error(`File wasn't removed, error:  ${error.reason}`);
  } else {
    console.info('File successfully removed');
  }
});
