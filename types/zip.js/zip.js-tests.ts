

// create the blob object storing the data to compress
var blob: Blob = new Blob([ "Lorem ipsum dolor sit amet, consectetuer adipiscing elit..." ], {
  type : "text/plain"
});
// creates a zip storing the file "lorem.txt" with blob as data
// the zip will be stored into a Blob object (zippedBlob)
zipBlob("lorem.txt", blob, function(zippedBlob: Blob) {
  // unzip the first file from zipped data stored in zippedBlob
  unzipBlob(zippedBlob, function(unzippedBlob: Blob) {
    // logs the uncompressed Blob
    console.log(unzippedBlob);
  });
});

function zipBlob(filename: string, blob: Blob, callback: (blob: Blob) => void) {
  // use a zip.BlobWriter object to write zipped data into a Blob object
  zip.createWriter(new zip.BlobWriter("application/zip"), function(zipWriter) {
    // use a BlobReader object to read the data stored into blob variable
    zipWriter.add(filename, new zip.BlobReader(blob), function() {
      // close the writer and calls callback function
      zipWriter.close(callback);
    });
  }, theErrorHandler);
}

function unzipBlob(blob: Blob, callback: (unzippedBlob: Blob) => void) {
  // use a zip.BlobReader object to read zipped data stored into blob variable
  zip.createReader(new zip.BlobReader(blob), function(zipReader) {
    // get entries from the zip file
    zipReader.getEntries(function(entries: zip.Entry[]) {
      // get data from the first file
      entries[0].getData(new zip.BlobWriter("text/plain"), function(data: Blob) {
        // close the reader and calls callback function with uncompressed data as parameter
        zipReader.close();
        callback(data);
      });
    });
  }, theErrorHandler);
}

function theErrorHandler(message: any) {
  console.error(message);
}