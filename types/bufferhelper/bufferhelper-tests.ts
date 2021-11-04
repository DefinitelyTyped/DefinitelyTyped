import BufferHelper from 'bufferhelper';

// test data
const buffer = new BufferHelper();

// tests
buffer.concat('');
buffer.toBuffer().toString();
buffer.empty();
buffer.load('', () => {});
buffer.toString('ascii');
