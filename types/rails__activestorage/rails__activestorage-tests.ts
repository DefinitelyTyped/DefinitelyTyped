import * as ActiveStorage from '@rails/activestorage';
import { FileChecksum } from '@rails/activestorage/src/file_checksum';

ActiveStorage.start();

const delegate: ActiveStorage.DirectUploadDelegate = {
    directUploadWillCreateBlobWithXHR(xhr) {
        console.log(xhr.status);
    },

    directUploadWillStoreFileWithXHR(xhr) {
        console.log(xhr.status);
    },
};

const d = new ActiveStorage.DirectUpload(
    new File([], 'blank.txt'),
    '/rails/active_storage/direct_uploads',
    delegate
);

d.create((error, blob) => {
    if (error) {
        console.log(error.message);
    } else {
        const { byte_size, checksum, content_type, filename, signed_id } = blob;
        console.log({ byte_size, checksum, content_type, filename, signed_id });
    }
});

FileChecksum.create(new File([], 'blank.txt'), (error, checksum) => {
    if (error) {
        console.log(error);
    } else {
        console.log(checksum);
    }
});
