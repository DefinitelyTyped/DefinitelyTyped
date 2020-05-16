import { Keystone } from '@keystonejs/keystone';
import { KnexAdapter } from '@keystonejs/adapter-knex';
import { File } from '@keystonejs/fields';
import { LocalFileAdapter, CloudinaryFileAdapter } from '@keystonejs/file-adapters';

const keystone = new Keystone({
    name: 'Typescript Test',
    adapter: new KnexAdapter(),
});

const local = new LocalFileAdapter({
    src: 'something',
});

const cloudinary = new CloudinaryFileAdapter({
    cloudName: 'something',
    apiKey: 'something',
    apiSecret: 'something',
});

keystone.createList('Test', {
    fields: {
        file: { type: File, adapter: local },
        cloudinaryFile: { type: File, adapter: cloudinary },
    },
    access: true,
});
